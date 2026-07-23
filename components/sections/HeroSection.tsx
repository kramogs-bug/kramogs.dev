"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Workflow,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { getGmailComposeUrl } from "@/lib/utils";

const emailUrl = getGmailComposeUrl({
  to: personalInfo.email,
  subject: "Project inquiry",
  body: "Hi John Mark,\n\nI would like to discuss a project with you.\n\n",
});

export default function HeroSection() {
  return (
    <section id="about" className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_75%_20%,rgba(45,138,126,0.16),transparent_32%),radial-gradient(circle_at_8%_22%,rgba(239,131,84,0.12),transparent_24%)]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl grid-cols-1 items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="min-w-0"
        >
          <span className="section-kicker mb-7">Automation × Engineering</span>
          <h1 className="balanced max-w-3xl font-display text-[2.7rem] font-extrabold leading-[0.9] tracking-[-0.065em] text-ink min-[420px]:text-[3.15rem] sm:text-[4.5rem] lg:text-[clamp(4.8rem,7.5vw,6.8rem)]">
            I make busywork{" "}
            <span className="relative inline-block text-neon-green">
              disappear.
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-signal"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path d="M2 9C71 2 204 2 298 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="pretty mt-8 max-w-xl text-lg leading-8 text-text-secondary sm:text-xl">
            Hi, I&apos;m {personalInfo.name}. I design automation systems, custom tools, and web
            applications that turn repetitive work into reliable processes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon-green px-6 py-3.5 text-sm font-bold text-white shadow-glow-green transition-all hover:-translate-y-0.5 hover:bg-neon-green-dim sm:w-auto"
            >
              Explore selected work
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-bright bg-white/80 px-6 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-neon-green sm:w-auto"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-text-secondary">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-neon-green" />
              {personalInfo.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-neon-green" />
              Available for freelance work
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mx-auto min-w-0 w-full max-w-2xl lg:max-w-none"
        >
          <div className="absolute -inset-5 -z-10 rotate-2 rounded-[2.25rem] bg-mint" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink p-3 shadow-[0_35px_90px_rgba(8,42,47,0.22)] sm:p-5">
            <div className="mb-4 flex items-center justify-between px-1">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-signal" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f0c96a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-neon-cyan" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                Featured build / AMYT
              </span>
            </div>

            <div className="relative aspect-[1.69/1] overflow-hidden rounded-2xl bg-[#111827]">
              <Image
                src="/assets/amyt-preview.png"
                alt="AMYT automation platform interface"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 90vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            </div>

            <div className="mt-4 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neon-cyan">
                  Flagship product
                </p>
                <p className="mt-1 truncate text-sm font-bold sm:text-base">
                  Automation Made for You
                </p>
              </div>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-neon-cyan text-ink">
                <Workflow className="h-5 w-5" />
              </span>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-3 hidden rounded-2xl border border-border bg-white p-4 shadow-card sm:block lg:-left-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
              Build approach
            </p>
            <p className="mt-1 text-sm font-extrabold text-ink">Practical. Tested. Useful.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
