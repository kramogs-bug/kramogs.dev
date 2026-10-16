import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section id="contact" className="pb-20 sm:pb-24">
      <div className="page-shell">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-signal px-6 py-12 text-ink sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border-[38px] border-white/15" />
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-ink/55">Open to OJT opportunities</p>
              <h2 className="balanced mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">Let&apos;s build something useful together.</h2>
              <p className="pretty mt-6 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg">I&apos;m looking for a team where I can contribute to real software, strengthen my engineering practice, and learn from experienced developers.</p>
            </div>
            <a href={`mailto:${personalInfo.email}?subject=OJT%20Opportunity%20for%20John%20Mark%20Valdez`} className="inline-flex w-full items-center justify-between gap-5 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(17,35,31,0.18)] transition-transform hover:-translate-y-1 sm:w-auto">Email me <ArrowUpRight className="h-5 w-5" /></a>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-ink/15 pt-7 text-sm font-semibold text-ink/70 sm:flex-row sm:flex-wrap sm:gap-7">
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-ink"><Mail className="h-4 w-4" />{personalInfo.email}</a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-ink"><Github className="h-4 w-4" />GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-ink"><Linkedin className="h-4 w-4" />LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
