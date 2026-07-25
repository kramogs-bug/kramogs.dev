"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import EmailAppLauncher from "@/components/ui/EmailAppLauncher";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Expertise", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#main-content" className="group flex items-center gap-3" aria-label="Kramogs.Dev home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink font-mono text-sm font-bold tracking-tight text-white transition-transform group-hover:-rotate-3">
            KD
          </span>
          <span className="leading-none">
            <span className="block text-sm font-extrabold tracking-[0.12em] text-text-primary">
              KRAMOGS.DEV
            </span>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
              Systems builder
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-text-secondary transition-colors hover:text-neon-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="hidden items-center gap-2 text-xs font-semibold text-text-muted xl:flex">
            <span className="h-2 w-2 rounded-full bg-neon-green shadow-[0_0_0_4px_rgba(11,107,96,0.12)]" />
            Open for projects
          </span>
          <EmailAppLauncher
            subject="Project inquiry"
            body={"Hi John Mark,\n\nI would like to discuss a project with you.\n\n"}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-neon-green"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" />
          </EmailAppLauncher>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-xl border border-border bg-white p-2.5 text-text-primary shadow-sm lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-border bg-background px-5 pb-6 pt-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-bold text-text-primary hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-base font-bold text-white"
              >
                Start a project
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
