"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Check, Copy, ExternalLink, Mail, ShieldCheck, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { getMailtoUrl } from "@/lib/utils";

type CopyStatus = "idle" | "copied" | "manual";

type EmailAppLauncherProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  subject?: string;
  body?: string;
};

export default function EmailAppLauncher({
  children,
  className,
  ariaLabel,
  subject,
  body,
}: EmailAppLauncherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const mailtoUrl = getMailtoUrl({
    to: personalInfo.email,
    subject,
    body,
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) {
      return;
    }

    const handleClose = () => {
      setIsOpen(false);
      setCopyStatus("idle");
    };

    dialog.addEventListener("close", handleClose);
    dialog.showModal();

    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, [isOpen]);

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
              className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-[1.75rem] border border-border bg-white p-0 text-ink shadow-[0_30px_100px_rgba(8,42,47,0.32)] backdrop:bg-ink/75 backdrop:backdrop-blur-sm"
            >
              <div className="relative p-6 sm:p-7">
                <button
                  type="button"
                  onClick={closeDialog}
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-text-secondary transition-colors hover:border-neon-green hover:text-ink"
                  aria-label="Close contact options"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>

                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-neon-green">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>

                <h2
                  id={titleId}
                  className="mt-5 pr-10 text-2xl font-extrabold tracking-[-0.035em]"
                >
                  Open your email app?
                </h2>
                <p
                  id={descriptionId}
                  className="pretty mt-3 text-sm leading-6 text-text-secondary"
                >
                  Your browser or device may ask permission to open the email app you have
                  configured. The recipient and project subject will already be filled in.
                </p>

                <div className="mt-5 rounded-2xl border border-border bg-background p-4">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-text-muted">
                    Send to
                  </p>
                  <p className="mt-1.5 select-all break-all text-sm font-bold text-ink">
                    {personalInfo.email}
                  </p>
                </div>

                <div className="mt-5 grid gap-2.5">
                  <a
                    href={mailtoUrl}
                    onClick={closeDialog}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-neon-green"
                  >
                    Open email app
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3.5 text-sm font-bold text-ink transition-colors hover:border-neon-green"
                  >
                    {copyStatus === "copied" ? (
                      <Check className="h-4 w-4 text-neon-green" aria-hidden="true" />
                    ) : (
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                    {copyStatus === "copied" ? "Email copied" : "Copy email address"}
                  </button>
                </div>

                <div className="mt-5 flex items-start gap-2.5 text-xs leading-5 text-text-muted">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-neon-green"
                    aria-hidden="true"
                  />
                  <p>
                    No account access is requested. Your device controls which email app
                    opens, and you review the message before sending.
                  </p>
                </div>

                {copyStatus === "manual" ? (
                  <p className="mt-3 rounded-xl bg-signal/10 px-3 py-2 text-xs font-semibold text-ink">
                    Automatic copy was blocked. Select the email address above and copy it
                    manually.
                  </p>
                ) : null}
              </div>
            </dialog>,
            document.body,
          )
        : null}
    </>
  );
}
