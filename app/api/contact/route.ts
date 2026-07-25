const RESEND_API_URL =
  process.env.RESEND_API_URL || "https://api.resend.com/emails";
const DEFAULT_RECIPIENT = "vjohnmark673@gmail.com";
const DEFAULT_SENDER = "Kramogs.Dev Portfolio <onboarding@resend.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  subject?: unknown;
  website?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return true;
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return Response.json({ error: "Request origin is not allowed." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return Response.json({ error: "Request body is too large." }, { status: 413 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Expected a JSON request." }, { status: 415 });
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = cleanText(payload.name, 80);
  const email = cleanText(payload.email, 254).toLowerCase();
  const message = cleanText(payload.message, 3000);
  const subject =
    cleanText(payload.subject, 120).replace(/[\r\n]+/g, " ") || "Portfolio inquiry";
  const website = cleanText(payload.website, 200);

  if (website) {
    return Response.json({ ok: true });
  }

  if (name.length < 2) {
    return Response.json(
      { error: "Please enter at least 2 characters for your name." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length < 20) {
    return Response.json(
      { error: "Please add a little more detail to your message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Contact form is missing RESEND_API_KEY.");
    return Response.json(
      {
        error:
          "The contact form is being configured. Please copy the email address and try again.",
      },
      { status: 503 },
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
      const providerError = await resendResponse.text();
      console.error("Resend contact delivery failed.", {
        status: resendResponse.status,
        providerError: providerError.slice(0, 500),
      });

      return Response.json(
        { error: "Your message could not be sent right now. Please try again." },
        { status: 502 },
      );
    }

    const result = (await resendResponse.json()) as { id?: string };
    console.info("Portfolio contact delivered.", { emailId: result.id ?? "unknown" });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact delivery request failed.", {
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return Response.json(
      { error: "Your message could not be sent right now. Please try again." },
      { status: 502 },
    );
  }
}
