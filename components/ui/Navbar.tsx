"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="page-shell flex h-[72px] items-center justify-between">
        <a href="#main-content" className="group flex items-center gap-3" aria-label="John Mark Valdez home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-sm font-black tracking-tight text-white transition-transform group-hover:-rotate-3">
            JM
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-[-0.01em] text-ink">John Mark Valdez</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-text-muted">OJT Portfolio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-text-secondary transition-colors hover:text-neon-green">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={personalInfo.resumeUrl}
          download
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-neon-green lg:inline-flex"
        >
          Resume <Download className="h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-border bg-white p-2.5 text-ink shadow-sm lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-navigation" className="border-t border-border bg-background px-5 pb-6 pt-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-bold text-ink hover:bg-white">
                {link.label}
              </a>
            ))}
            <a href={personalInfo.resumeUrl} download className="mt-2 inline-flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-base font-bold text-white">
              Download resume <Download className="h-5 w-5" />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
