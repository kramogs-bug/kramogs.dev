import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import EmailAppLauncher from "@/components/ui/EmailAppLauncher";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="text-sm font-bold text-ink">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="mt-1 text-xs text-text-muted">
            Designed around real work, not a template.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-text-secondary transition-colors hover:border-neon-green hover:text-neon-green"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <EmailAppLauncher
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-text-secondary transition-colors hover:border-neon-green hover:text-neon-green"
            ariaLabel="Open email contact options"
          >
            <Mail className="h-4 w-4" />
          </EmailAppLauncher>
          <a
            href="#main-content"
            className="ml-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-text-secondary transition-colors hover:text-neon-green"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
