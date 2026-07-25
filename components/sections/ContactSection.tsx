import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import EmailAppLauncher from "@/components/ui/EmailAppLauncher";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-signal px-6 py-12 text-ink sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full border-[42px] border-white/15" />
          <div className="absolute bottom-0 right-1/3 -z-10 h-28 w-48 bg-grid opacity-30" />

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink/60">
                Have a workflow in mind?
              </span>
              <h2 className="balanced mt-5 max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Let&apos;s turn that repetitive task into a system.
              </h2>
              <p className="pretty mt-6 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg">
                Tell me what is slowing you down, what a good result looks like, and where the
                process lives today. I&apos;ll help you find the practical next step.
              </p>
            </div>

            <EmailAppLauncher
              subject="Automation project inquiry"
              body={"Hi John Mark,\n\nI would like to discuss a project with you.\n\n"}
              className="inline-flex w-full items-center justify-between gap-4 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(8,42,47,0.20)] transition-transform hover:-translate-y-1 sm:w-auto"
            >
              Start a project
              <ArrowUpRight className="h-5 w-5" />
            </EmailAppLauncher>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-ink/15 pt-7 text-sm font-semibold text-ink/70 sm:flex-row sm:flex-wrap sm:gap-7">
            <EmailAppLauncher
              ariaLabel={`Email ${personalInfo.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </EmailAppLauncher>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {personalInfo.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
