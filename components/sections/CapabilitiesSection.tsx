"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  GitMerge,
  Globe,
  MousePointer2,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { capabilities, projects } from "@/data/portfolio";

const iconMap = {
  Database,
  Code2,
  GitMerge,
  TrendingUp,
  Wrench,
  Globe,
} as Record<string, React.ElementType>;

const systemProfiles: Record<
  string,
  {
    approach: string[];
    projectId: string;
  }
> = {
  "data-entry": {
    approach: ["Structured inputs", "Validation rules", "Reliable sync"],
    projectId: "paper-flowers",
  },
  macro: {
    approach: ["Jitbit", "Macrorify", "Custom scripts"],
    projectId: "amyt",
  },
  workflow: {
    approach: ["Trigger logic", "Branching paths", "Error recovery"],
    projectId: "wescomm",
  },
  productivity: {
    approach: ["Auto-organization", "Live dashboards", "Clear reporting"],
    projectId: "wescomm",
  },
  "custom-tools": {
    approach: ["Next.js", "TypeScript", "Purpose-built UX"],
    projectId: "sellables-calc",
  },
  "web-automation": {
    approach: ["Browser flows", "Monitoring", "Data extraction"],
    projectId: "amyt",
  },
};

const projectsById = new Map(projects.map((project) => [project.id, project]));

export default function CapabilitiesSection() {
  const [selectedId, setSelectedId] = useState(capabilities[0].id);
  const selectedIndex = capabilities.findIndex((capability) => capability.id === selectedId);
  const selectedCapability = capabilities[selectedIndex] ?? capabilities[0];
  const selectedProfile = systemProfiles[selectedCapability.id];
  const relatedProject = projectsById.get(selectedProfile.projectId);
  const SelectedIcon = iconMap[selectedCapability.icon] ?? Code2;

  return (
    <section id="skills" className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.035]" />
      <div className="absolute right-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full border border-white/10" />
      <div className="absolute right-[-8rem] top-[-8rem] h-[26rem] w-[26rem] rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <span className="section-kicker !text-neon-cyan">System select</span>
            <h2 className="balanced mt-5 max-w-lg text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
              Choose the system for the work at hand.
            </h2>
          </div>
          <p className="pretty max-w-2xl self-end text-base leading-7 text-white/60 lg:justify-self-end lg:text-lg">
            Select a capability to inspect how I approach it, what it can produce, and where
            I&apos;ve applied the same thinking in a live project.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between px-2 py-1">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                <MousePointer2 className="h-3.5 w-3.5 text-neon-cyan" />
                Select to inspect
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(capabilities.length).padStart(2, "0")}
              </span>
            </div>

            <div
              className="grid grid-cols-2 gap-2.5"
              role="group"
              aria-label="Choose a capability to inspect"
            >
              {capabilities.map((capability, index) => {
                const Icon = iconMap[capability.icon] ?? Code2;
                const isSelected = capability.id === selectedCapability.id;

                return (
                  <motion.button
                    key={capability.id}
                    type="button"
                    onClick={() => setSelectedId(capability.id)}
                    aria-pressed={isSelected}
                    className={`group relative min-h-[126px] overflow-hidden rounded-2xl border p-4 text-left transition-colors ${
                      isSelected
                        ? "border-neon-cyan/80 text-ink"
                        : "border-white/10 bg-ink/70 text-white hover:border-neon-cyan/30 hover:bg-white/[0.055]"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSelected ? (
                      <motion.span
                        layoutId="selected-system"
                        className="absolute inset-0 bg-neon-cyan"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      />
                    ) : null}

                    <span className="relative z-10 flex h-full flex-col justify-between gap-5">
                      <span className="flex items-start justify-between gap-3">
                        <span
                          className={`grid h-10 w-10 place-items-center rounded-xl transition-colors ${
                            isSelected
                              ? "bg-ink text-neon-cyan"
                              : "bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan/15"
                          }`}
                        >
                          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                        </span>
                        <span
                          className={`font-mono text-[9px] font-bold tracking-[0.12em] ${
                            isSelected ? "text-ink/45" : "text-white/25"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span className="text-sm font-extrabold leading-tight tracking-[-0.015em] sm:text-base">
                        {capability.title}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div
            id="active-system-panel"
            className="relative min-h-[470px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b3338] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10"
            aria-live="polite"
          >
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.09] [mask-image:linear-gradient(to_bottom_right,black,transparent_75%)]" />
            <div className="pointer-events-none absolute -right-6 -top-12 font-mono text-[10rem] font-black leading-none text-white/[0.025] sm:text-[14rem]">
              {String(selectedIndex + 1).padStart(2, "0")}
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.article
                key={selectedCapability.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="relative flex h-full min-h-[390px] flex-col"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-neon-cyan/20 bg-neon-cyan/10 text-neon-cyan">
                      <SelectedIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-neon-cyan">
                        Active system
                      </p>
                      <p className="mt-1 text-xs font-semibold text-white/40">
                        Capability {String(selectedIndex + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/[0.08] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-neon-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
                    Selected
                  </span>
                </div>

                <h3 className="balanced mt-8 max-w-2xl text-3xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-4xl">
                  {selectedCapability.title}
                </h3>
                <p className="pretty mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  {selectedCapability.description}
                </p>

                <div className="mt-8 grid gap-7 border-t border-white/10 pt-7 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                      Typical outputs
                    </p>
                    <ul className="mt-4 space-y-3">
                      {selectedCapability.examples.map((example) => (
                        <li key={example} className="flex items-center gap-3 text-sm font-semibold text-white/75">
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-neon-cyan/10 text-neon-cyan">
                            <Check className="h-3 w-3" aria-hidden="true" />
                          </span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                      Build approach
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProfile.approach.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold text-white/65"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {relatedProject ? (
                  <a
                    href={relatedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-9 text-sm font-bold text-neon-cyan transition-colors hover:text-white"
                  >
                    See it applied in {relatedProject.title}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
