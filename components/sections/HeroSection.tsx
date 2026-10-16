import Image from "next/image";
import { ArrowDownRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section id="about" className="relative isolate overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(14,124,102,0.14),transparent_30%),radial-gradient(circle_at_8%_12%,rgba(214,107,66,0.09),transparent_22%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="page-shell grid min-h-[calc(100vh-72px)] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-green/20 bg-white/70 px-3.5 py-2 text-xs font-bold text-neon-green shadow-sm">
            <span className="h-2 w-2 rounded-full bg-neon-green" />
            Seeking a 480-hour OJT · {personalInfo.availability}
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-text-muted">{personalInfo.name}</p>
          <h1 className="balanced mt-4 max-w-4xl text-[3.25rem] font-black leading-[0.94] tracking-[-0.065em] text-ink sm:text-6xl lg:text-[5.5rem]">
            I build reliable software for <span className="text-neon-green">real-world work.</span>
          </h1>
          <p className="pretty mt-7 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
            {personalInfo.summary}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-neon-green">
              View selected projects <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href={personalInfo.resumeUrl} download className="inline-flex items-center justify-center gap-2 rounded-full border border-border-bright bg-white px-6 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-neon-green">
              Download resume <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm font-semibold text-text-secondary">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-neon-green" />{personalInfo.location}</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-neon-green"><Github className="h-4 w-4" />GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-neon-green"><Linkedin className="h-4 w-4" />LinkedIn</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute -inset-5 -z-10 rotate-2 rounded-[2rem] bg-neon-green/10" />
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(17,35,31,0.16)]">
            <div className="relative aspect-[4/4.3] overflow-hidden rounded-[1.45rem] bg-surface-2">
              <Image src="/assets/john-mark-valdez.jpg" alt="John Mark R. Valdez" fill priority sizes="(min-width: 1024px) 42vw, 90vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-6 pb-6 pt-20 text-white">
                <p className="text-xl font-extrabold">Computer Engineering Student</p>
                <p className="mt-1 text-sm text-white/70">Full-Stack & Automation Developer</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 p-3 pt-5">
              <div className="rounded-2xl bg-surface-2 p-4"><p className="text-2xl font-black text-ink">4th year</p><p className="mt-1 text-xs font-semibold text-text-muted">BS Computer Engineering</p></div>
              <div className="rounded-2xl bg-surface-2 p-4"><p className="text-2xl font-black text-ink">480 hrs</p><p className="mt-1 text-xs font-semibold text-text-muted">Required OJT duration</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
