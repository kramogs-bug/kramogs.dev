import { createHash } from "node:crypto";
import { checkBotId } from "botid/server";

const RESEND_API_URL =
  process.env.RESEND_API_URL || "https://api.resend.com/emails";
const DEFAULT_RECIPIENT = "vjohnmark673@gmail.com";
const DEFAULT_SENDER = "Kramogs.Dev Portfolio <onboarding@resend.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_LENGTH = 20_000;
const MAX_MESSAGE_LENGTH = 2_000;
const IDEMPOTENCY_WINDOW_MS = 10 * 60 * 1_000;
const NO_STORE_HEADERS = {
  "Cache-Control": "no-store, max-age=0",
  "X-Robots-Tag": "noindex, nofollow",
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  subject?: unknown;
  website?: unknown;
};

function jsonResponse(
  body: Record<string, unknown>,
  status = 200,
  headers: HeadersInit = {},
) {
  return Response.json(body, {
    status,
    headers: {
      ...NO_STORE_HEADERS,
      ...Object.fromEntries(new Headers(headers)),
    },
  });
}

function cleanText(
  value: unknown,
  maxLength: number,
  options: { multiline?: boolean } = {},
) {
  if (typeof value !== "string") {
    return "";
  }

  const normalized = value
    .normalize("NFKC")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");

  const safeText = options.multiline
    ? normalized
    : normalized.replace(/[\r\n\t]+/g, " ");

  return safeText.trim().slice(0, maxLength);
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return process.env.NODE_ENV !== "production";
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function hasSafeFetchContext(request: Request) {
  const fetchSite = request.headers.get("sec-fetch-site");
  return !fetchSite || fetchSite === "same-origin" || fetchSite === "same-site";
}

function looksLikeSpam(name: string, email: string, message: string) {
  const combined = `${name} ${email} ${message}`;
  const linkCount = combined.match(/(?:https?:\/\/|www\.)/gi)?.length ?? 0;

  return linkCount > 4 || /(\S)\1{15,}/u.test(combined);
}

function exceedsFieldLimits(payload: ContactPayload) {
  return (
    (typeof payload.name === "string" && payload.name.length > 80) ||
    (typeof payload.email === "string" && payload.email.length > 254) ||
    (typeof payload.message === "string" &&
      payload.message.length > MAX_MESSAGE_LENGTH) ||
    (typeof payload.subject === "string" && payload.subject.length > 120) ||
    (typeof payload.website === "string" && payload.website.length > 200)
  );
}

function createIdempotencyKey(email: string, subject: string, message: string) {
  const timeBucket = Math.floor(Date.now() / IDEMPOTENCY_WINDOW_MS);
  const digest = createHash("sha256")
    .update(`${email}\0${subject}\0${message}\0${timeBucket}`)
    .digest("hex");

  return `portfolio-contact/${timeBucket}/${digest}`;
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOrigin(request) || !hasSafeFetchContext(request)) {
    return jsonResponse({ error: "Request origin is not allowed." }, 403);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (!Number.isFinite(contentLength) || contentLength > MAX_BODY_LENGTH) {
    return jsonResponse({ error: "Request body is too large." }, 413);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return jsonResponse({ error: "Expected a JSON request." }, 415);
  }

  try {
    const verification = await checkBotId();

    if (verification.isBot) {
      console.warn("Blocked automated portfolio contact submission.");
      return jsonResponse(
        { error: "We could not verify this submission. Please refresh and try again." },
        403,
      );
    }
  } catch (error) {
    console.error("Contact bot verification failed.", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return jsonResponse(
      { error: "The contact form is temporarily unavailable. Please try again shortly." },
      503,
    );
  }

  let payload: ContactPayload;

  try {
    const rawBody = await request.text();

    if (rawBody.length > MAX_BODY_LENGTH) {
      return jsonResponse({ error: "Request body is too large." }, 413);
    }

    const parsedPayload = JSON.parse(rawBody) as unknown;

    if (
      !parsedPayload ||
      typeof parsedPayload !== "object" ||
      Array.isArray(parsedPayload)
    ) {
      return jsonResponse({ error: "Invalid request body." }, 400);
    }

    payload = parsedPayload as ContactPayload;
  } catch {
    return jsonResponse({ error: "Invalid request body." }, 400);
  }

  if (exceedsFieldLimits(payload)) {
    return jsonResponse({ error: "One or more fields are too long." }, 400);
  }

  const name = cleanText(payload.name, 80);
  const email = cleanText(payload.email, 254).toLowerCase();
  const message = cleanText(payload.message, MAX_MESSAGE_LENGTH, {
    multiline: true,
  });
  const subject = cleanText(payload.subject, 120) || "Portfolio inquiry";
  const website = cleanText(payload.website, 200);

  if (website) {
    console.warn("Blocked portfolio contact honeypot submission.");
    return jsonResponse({ ok: true });
  }

  if (name.length < 2) {
    return jsonResponse(
      { error: "Please enter at least 2 characters for your name." },
      400,
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return jsonResponse(
      { error: "Please enter a valid email address." },
      400,
    );
  }

  if (message.length < 20) {
    return jsonResponse(
      { error: "Please add a little more detail to your message." },
      400,
    );
  }

  if (looksLikeSpam(name, email, message)) {
    return jsonResponse(
      {
        error:
          "Please remove excessive links or repeated characters, then try again.",
      },
      400,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Contact form is missing RESEND_API_KEY.");
    return jsonResponse(
      {
        error:
          "The contact form is being configured. Please copy the email address and try again.",
      },
      503,
    );
  }

  const recipient = process.env.CONTACT_TO_EMAIL || DEFAULT_RECIPIENT;
  const sender = process.env.CONTACT_FROM_EMAIL || DEFAULT_SENDER;
  const text = [
    "New portfolio inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": createIdempotencyKey(email, subject, message),
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text,
        tags: [{ name: "source", value: "portfolio-contact" }],
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!resendResponse.ok) {
      console.error("Resend contact delivery failed.", {
        status: resendResponse.status,
      });

      return jsonResponse(
        {
          error:
            resendResponse.status === 429
              ? "The email service is busy. Please wait a minute and try again."
              : "Your message could not be sent right now. Please try again.",
        },
        resendResponse.status === 429 ? 503 : 502,
        resendResponse.status === 429 ? { "Retry-After": "60" } : {},
      );
    }

    const result = (await resendResponse.json()) as { id?: string };
    console.info("Portfolio contact delivered.", { emailId: result.id ?? "unknown" });

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Contact delivery request failed.", {
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return jsonResponse(
      { error: "Your message could not be sent right now. Please try again." },
      502,
    );
  }
}
