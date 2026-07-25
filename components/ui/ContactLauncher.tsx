"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Check, CheckCircle2, Copy, Mail, Send, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

type CopyStatus = "idle" | "copied" | "manual";
type SubmitStatus = "idle" | "submitting" | "success" | "error";

type ContactLauncherProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  subject?: string;
  body?: string;
};

type ContactResponse = {
  ok?: boolean;
  error?: string;
};

export default function ContactLauncher({
  children,
  className,
  ariaLabel,
  subject = "Portfolio inquiry",
  body = "",
}: ContactLauncherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const statusId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) {
      return;
    }

    const handleClose = () => {
      setIsOpen(false);
      setCopyStatus("idle");
      setSubmitStatus("idle");
      setStatusMessage("");
      formRef.current?.reset();
    };

    dialog.addEventListener("close", handleClose);
    if (!dialog.open) {
      dialog.showModal();
    }

    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, [isOpen]);

  async function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("submitting");
    setStatusMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
          subject,
        }),
      });
      const result = (await response.json().catch(() => ({}))) as ContactResponse;

      if (!response.ok || !result.ok) {
        if (response.status === 429) {
          const retryAfter = Number.parseInt(
            response.headers.get("retry-after") || "",
            10,
          );
          const waitMinutes = Number.isFinite(retryAfter)
            ? Math.max(1, Math.ceil(retryAfter / 60))
            : 10;

          throw new Error(
            `Message limit reached. Please wait about ${waitMinutes} minute${waitMinutes === 1 ? "" : "s"} before trying again.`,
          );
        }

        throw new Error(result.error || "Your message could not be sent. Please try again.");
      }

      setSubmitStatus("success");
      setStatusMessage("Thanks — your message is on its way to John Mark.");
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again.",
      );
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("manual");
    }
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </button>

      {isOpen
        ? createPortal(
            <dialog
              ref={dialogRef}
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              onCancel={(event) => {
                event.preventDefault();
                closeDialog();
              }}
              className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-[1.75rem] border border-border bg-white p-0 text-ink shadow-[0_30px_100px_rgba(8,42,47,0.32)] backdrop:bg-ink/75 backdrop:backdrop-blur-sm"
            >
              <div className="relative p-5 sm:p-7">
                <button
                  type="button"
                  onClick={closeDialog}
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-text-secondary transition-colors hover:border-neon-green hover:text-ink"
                  aria-label="Close contact form"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>

                {submitStatus === "success" ? (
                  <div className="flex min-h-[24rem] flex-col items-center justify-center py-8 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-mint text-neon-green">
                      <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <h2
                      id={titleId}
                      className="mt-6 text-3xl font-extrabold tracking-[-0.04em]"
                    >
                      Message sent
                    </h2>
                    <p
                      id={descriptionId}
                      className="pretty mt-3 max-w-sm text-sm leading-6 text-text-secondary"
                    >
                      {statusMessage}
                    </p>
                    <button
                      type="button"
                      onClick={closeDialog}
                      className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-neon-green"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-neon-green">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <h2
                      id={titleId}
                      className="mt-5 pr-10 text-2xl font-extrabold tracking-[-0.035em] sm:text-3xl"
                    >
                      Send a message
                    </h2>
                    <p
                      id={descriptionId}
                      className="pretty mt-2 text-sm leading-6 text-text-secondary"
                    >
                      This form sends directly to my inbox. No email app or browser
                      permission is required.
                    </p>

                    <form
                      ref={formRef}
                      onSubmit={submitMessage}
                      aria-describedby={statusMessage ? statusId : undefined}
                      className="mt-6 grid gap-4"
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="grid gap-2 text-sm font-bold text-ink">
                          Name
                          <input
                            type="text"
                            name="name"
                            autoComplete="name"
                            minLength={2}
                            maxLength={80}
                            required
                            placeholder="Your name"
                            className="h-12 rounded-xl border border-border bg-background px-4 text-sm font-medium text-ink outline-none transition focus:border-neon-green focus:ring-4 focus:ring-neon-green/10"
                          />
                        </label>

                        <label className="grid gap-2 text-sm font-bold text-ink">
                          Email
                          <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            maxLength={254}
                            required
                            placeholder="you@example.com"
                            className="h-12 rounded-xl border border-border bg-background px-4 text-sm font-medium text-ink outline-none transition focus:border-neon-green focus:ring-4 focus:ring-neon-green/10"
                          />
                        </label>
                      </div>

                      <label className="grid gap-2 text-sm font-bold text-ink">
                        Message
                        <textarea
                          name="message"
                          minLength={20}
                          maxLength={2000}
                          rows={6}
                          required
                          defaultValue={body}
                          placeholder="Tell me about the workflow or project you have in mind."
                          className="min-h-36 resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-neon-green focus:ring-4 focus:ring-neon-green/10"
                        />
                        <span className="text-xs font-medium leading-5 text-text-muted">
                          20–2,000 characters · protected by invisible anti-spam checks
                        </span>
                      </label>

                      <label
                        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                        aria-hidden="true"
                      >
                        Website
                        <input
                          type="text"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </label>

                      {statusMessage ? (
                        <p
                          id={statusId}
                          role="alert"
                          className="rounded-xl border border-signal/20 bg-signal/10 px-4 py-3 text-xs font-semibold leading-5 text-ink"
                        >
                          {statusMessage}
                        </p>
                      ) : null}

                      <button
                        type="submit"
                        disabled={submitStatus === "submitting"}
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-neon-green disabled:cursor-wait disabled:opacity-65"
                      >
                        <Send className="h-4 w-4" aria-hidden="true" />
                        {submitStatus === "submitting" ? "Sending…" : "Send message"}
                      </button>
                    </form>

                    <div className="mt-5 flex flex-col items-start justify-between gap-3 border-t border-border pt-5 sm:flex-row sm:items-center">
                      <p className="text-xs leading-5 text-text-muted">
                        Prefer another channel? Copy my email address.
                      </p>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="inline-flex items-center gap-2 text-xs font-bold text-ink transition-colors hover:text-neon-green"
                      >
                        {copyStatus === "copied" ? (
                          <Check className="h-4 w-4 text-neon-green" aria-hidden="true" />
                        ) : (
                          <Copy className="h-4 w-4" aria-hidden="true" />
                        )}
                        {copyStatus === "copied"
                          ? "Email copied"
                          : personalInfo.email}
                      </button>
                    </div>

                    {copyStatus === "manual" ? (
                      <p className="mt-3 rounded-xl bg-signal/10 px-3 py-2 text-xs font-semibold text-ink">
                        Automatic copy was blocked. Select the email address above and copy
                        it manually.
                      </p>
                    ) : null}
                  </>
                )}
              </div>
            </dialog>,
            document.body,
          )
        : null}
    </>
  );
}
