import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="page-shell flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-sm font-extrabold text-ink">© {new Date().getFullYear()} {personalInfo.name}</p><p className="mt-1 text-xs text-text-muted">Computer Engineering · Full-Stack · Automation</p></div>
        <a href="#main-content" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-text-secondary transition-colors hover:text-neon-green">Back to top <ArrowUp className="h-4 w-4" /></a>
      </div>
    </footer>
  );
}
