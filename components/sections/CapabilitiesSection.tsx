"use client";

import { useState, type ElementType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Database,
  GitMerge,
  Globe,
  LockKeyhole,
  MousePointer2,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";
import { automationQuests } from "@/data/automationQuest";
import { capabilities, personalInfo, projects } from "@/data/portfolio";
import { getGmailComposeUrl } from "@/lib/utils";

const iconMap: Record<string, ElementType> = {
  Database,
  Code2,
  GitMerge,
  TrendingUp,
  Wrench,
  Globe,
};

const projectsById = new Map(projects.map((project) => [project.id, project]));

export default function CapabilitiesSection() {
  const [selectedId, setSelectedId] = useState(capabilities[0].id);
  const [completedSteps, setCompletedSteps] = useState(0);

  const selectedIndex = capabilities.findIndex((capability) => capability.id === selectedId);
  const selectedCapability = capabilities[selectedIndex] ?? capabilities[0];
  const quest = automationQuests[selectedCapability.id] ?? automationQuests[capabilities[0].id];
  const relatedProject = projectsById.get(quest.projectId);
  const SelectedIcon = iconMap[selectedCapability.icon] ?? Code2;
  const totalSteps = quest.steps.length;
  const isComplete = completedSteps === totalSteps;
  const nextStep = quest.steps[completedSteps];
  const progress = Math.round((completedSteps / totalSteps) * 100);
  const latestLog = completedSteps > 0 ? quest.steps[completedSteps - 1].log : "Mission loaded";
  const systemStatus = isComplete
    ? "System online"
    : completedSteps > 0
      ? "Flow in progress"
      : "Awaiting first step";
  const contactUrl = getGmailComposeUrl({
    to: personalInfo.email,
    subject: `${selectedCapability.title} project inquiry`,
    body: `Hi John Mark,\n\nI tried the ${quest.codename} automation mission on your portfolio. I would like to discuss a similar workflow.\n\n`,
  });

  function selectMission(id: string) {
    setSelectedId(id);
    setCompletedSteps(0);
  }

  function runNextStep() {
    setCompletedSteps((current) => Math.min(current + 1, totalSteps));
  }

  function resetMission() {
    setCompletedSteps(0);
  }

  return (
    <section id="skills" className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.035]" />
      <div className="absolute right-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full border border-white/10" />
      <div className="absolute right-[-8rem] top-[-8rem] h-[26rem] w-[26rem] rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <span className="section-kicker !text-neon-cyan">Automation quest</span>
            <h2 className="balanced mt-5 max-w-xl text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
              Don&apos;t just read about automation. Run one.
            </h2>
          </div>
          <div className="max-w-2xl self-end lg:justify-self-end">
            <p className="pretty text-base leading-7 text-white/60 lg:text-lg">
              Pick a mission, activate the workflow one step at a time, and watch repetitive
              work turn into a reliable system.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.12em]">
              <span className="rounded-full border border-neon-cyan/20 bg-neon-cyan/[0.08] px-3 py-1.5 text-neon-cyan">
                Guided mode
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-white/45">
                No signup
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-white/45">
                About 30 seconds
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:p-4">
          <div className="grid gap-2 sm:grid-cols-3">
            {[
              {
                number: "01",
                label: "Select a mission",
                state: "complete",
              },
              {
                number: "02",
                label: "Activate the flow",
                state: isComplete ? "complete" : "active",
              },
              {
                number: "03",
                label: "Review the result",
                state: isComplete ? "complete" : "locked",
              },
            ].map((phase) => {
              const isActive = phase.state === "active";
              const isDone = phase.state === "complete";

              return (
                <div
                  key={phase.number}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                    isActive
                      ? "border-signal/40 bg-signal/10"
                      : isDone
                        ? "border-neon-cyan/20 bg-neon-cyan/[0.07]"
                        : "border-white/[0.07] bg-black/10"
                  }`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono text-[10px] font-black ${
                      isActive
                        ? "bg-signal text-ink"
                        : isDone
                          ? "bg-neon-cyan text-ink"
                          : "bg-white/[0.05] text-white/25"
                    }`}
                  >
                    {isDone ? <Check className="h-4 w-4" aria-hidden="true" /> : phase.number}
                  </span>
                  <span>
                    <span
                      className={`block font-mono text-[8px] font-bold uppercase tracking-[0.15em] ${
                        isActive ? "text-signal" : isDone ? "text-neon-cyan" : "text-white/25"
                      }`}
                    >
                      {isActive ? "Current objective" : isDone ? "Complete" : "Locked"}
                    </span>
                    <span
                      className={`mt-0.5 block text-xs font-bold ${
                        phase.state === "locked" ? "text-white/30" : "text-white/75"
                      }`}
                    >
                      {phase.label}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 grid items-start gap-5 xl:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between px-2 py-1">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                <MousePointer2 className="h-3.5 w-3.5 text-neon-cyan" aria-hidden="true" />
                Mission select
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(capabilities.length).padStart(2, "0")}
              </span>
            </div>

            <div
              className="grid grid-cols-2 gap-2.5"
              role="group"
              aria-label="Choose an automation mission"
            >
              {capabilities.map((capability, index) => {
                const Icon = iconMap[capability.icon] ?? Code2;
                const isSelected = capability.id === selectedCapability.id;

                return (
                  <motion.button
                    key={capability.id}
                    type="button"
                    onClick={() => selectMission(capability.id)}
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
                        layoutId="selected-mission"
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
                          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                        </span>
                        <span
                          className={`font-mono text-[9px] font-bold tracking-[0.12em] ${
                            isSelected ? "text-ink/45" : "text-white/25"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span>
                        <span
                          className={`mb-1 block font-mono text-[8px] font-bold uppercase tracking-[0.13em] ${
                            isSelected ? "text-ink/50" : "text-neon-cyan/55"
                          }`}
                        >
                          {automationQuests[capability.id].codename}
                        </span>
                        <span className="block text-sm font-extrabold leading-tight tracking-[-0.015em]">
                          {capability.title}
                        </span>
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </aside>

          <div
            id="automation-quest-panel"
            className="relative min-h-[680px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b3338] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10"
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
                className="relative"
              >
                <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-neon-cyan/20 bg-neon-cyan/10 text-neon-cyan">
                      <SelectedIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-neon-cyan">
                        Mission {String(selectedIndex + 1).padStart(2, "0")} / {quest.codename}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl">
                        {selectedCapability.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] ${
                      isComplete
                        ? "border-neon-cyan/30 bg-neon-cyan/[0.12] text-neon-cyan"
                        : "border-signal/30 bg-signal/10 text-signal"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isComplete ? "bg-neon-cyan" : "animate-pulse bg-signal"
                      }`}
                    />
                    {systemStatus}
                  </span>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                    <p className="inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                      <Sparkles className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
                      Mission briefing
                    </p>
                    <p className="pretty mt-4 text-sm leading-6 text-white/65">
                      {quest.briefing}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neon-cyan/15 bg-neon-cyan/[0.055] p-5">
                    <p className="inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-neon-cyan">
                      <Target className="h-3.5 w-3.5" aria-hidden="true" />
                      Objective
                    </p>
                    <p className="pretty mt-4 text-sm font-semibold leading-6 text-white/75">
                      {quest.objective}
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
                        Workflow map
                      </p>
                      <p className="mt-1 text-xs text-white/45">
                        Activate the highlighted node to unlock the next step.
                      </p>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-neon-cyan">
                      {String(completedSteps).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
                    </span>
                  </div>

                  <div
                    className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.07]"
                    role="progressbar"
                    aria-label="Automation mission progress"
                    aria-valuemin={0}
                    aria-valuemax={totalSteps}
                    aria-valuenow={completedSteps}
                  >
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-signal"
                      animate={{ width: `${progress}%` }}
                      transition={{ type: "spring", stiffness: 160, damping: 24 }}
                    />
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {quest.steps.map((step, index) => {
                      const isDone = index < completedSteps;
                      const isReady = index === completedSteps && !isComplete;

                      return (
                        <motion.button
                          key={step.title}
                          type="button"
                          onClick={isReady ? runNextStep : undefined}
                          disabled={!isReady}
                          className={`group flex min-h-[118px] items-start gap-4 rounded-2xl border p-4 text-left transition-colors ${
                            isDone
                              ? "border-neon-cyan/25 bg-neon-cyan/[0.08]"
                              : isReady
                                ? "border-signal/50 bg-signal/[0.09] shadow-[0_0_0_1px_rgba(239,131,84,0.08),0_14px_34px_rgba(0,0,0,0.14)]"
                                : "cursor-not-allowed border-white/[0.07] bg-black/10 opacity-50"
                          }`}
                          whileTap={isReady ? { scale: 0.985 } : undefined}
                          aria-label={
                            isDone
                              ? `${step.title}, completed`
                              : isReady
                                ? `Activate ${step.title}`
                                : `${step.title}, locked`
                          }
                        >
                          <span
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                              isDone
                                ? "bg-neon-cyan text-ink"
                                : isReady
                                  ? "bg-signal text-ink"
                                  : "bg-white/[0.06] text-white/30"
                            }`}
                          >
                            {isDone ? (
                              <Check className="h-4 w-4" aria-hidden="true" />
                            ) : isReady ? (
                              <Zap className="h-4 w-4" aria-hidden="true" />
                            ) : (
                              <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                            )}
                          </span>
                          <span>
                            <span
                              className={`font-mono text-[8px] font-bold uppercase tracking-[0.14em] ${
                                isDone
                                  ? "text-neon-cyan"
                                  : isReady
                                    ? "text-signal"
                                    : "text-white/25"
                              }`}
                            >
                              Step {String(index + 1).padStart(2, "0")} /{" "}
                              {isDone ? "Complete" : isReady ? "Ready" : "Locked"}
                            </span>
                            <span className="mt-1.5 block text-sm font-extrabold text-white/85">
                              {step.title}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-white/45">
                              {step.description}
                            </span>
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-[#082a2f] p-4 font-mono">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/30">
                      System log
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-neon-cyan">
                      {progress}% complete
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${selectedCapability.id}-${completedSteps}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="mt-3 flex items-center gap-2 text-xs text-white/60"
                      aria-live="polite"
                    >
                      <span className="text-neon-cyan">&gt;</span>
                      {isComplete ? "Workflow completed. Result unlocked." : latestLog}
                      <span className="animate-pulse text-signal">_</span>
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="mt-6 grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <p className="font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-white/30">
                      Before / {quest.before.label}
                    </p>
                    <p className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white/70">
                      {quest.before.value}
                    </p>
                  </div>

                  <span className="grid place-items-center text-white/25" aria-hidden="true">
                    <ArrowRight className="h-5 w-5 rotate-90 sm:rotate-0" />
                  </span>

                  <div
                    className={`relative overflow-hidden rounded-2xl border p-5 transition-colors ${
                      isComplete
                        ? "border-neon-cyan/30 bg-neon-cyan/[0.09]"
                        : "border-white/[0.07] bg-black/10"
                    }`}
                    aria-live="polite"
                  >
                    {isComplete ? (
                      <>
                        <p className="font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-neon-cyan">
                          After / {quest.after.label}
                        </p>
                        <p className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-white">
                          {quest.after.value}
                        </p>
                      </>
                    ) : (
                      <div className="grid min-h-[56px] place-items-center">
                        <span className="inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.13em] text-white/35">
                          <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
                          Complete the flow
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {isComplete ? (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="mt-4 rounded-2xl border border-neon-cyan/25 bg-neon-cyan/[0.08] p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-neon-cyan text-ink">
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-sm font-extrabold text-white">Mission complete</p>
                          <p className="mt-1 text-xs leading-5 text-white/55">{quest.impact}</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/30">
                      Build approach
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {quest.approach.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[11px] font-semibold text-white/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    {completedSteps > 0 ? (
                      <button
                        type="button"
                        onClick={resetMission}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-xs font-bold text-white/55 transition-colors hover:border-white/25 hover:text-white"
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                        Reset
                      </button>
                    ) : null}

                    {!isComplete && nextStep ? (
                      <button
                        type="button"
                        onClick={runNextStep}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-5 py-3 text-xs font-extrabold text-ink shadow-[0_12px_28px_rgba(239,131,84,0.18)] transition-transform hover:-translate-y-0.5"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                        Run {nextStep.title}
                      </button>
                    ) : (
                      <a
                        href={contactUrl}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-neon-cyan px-5 py-3 text-xs font-extrabold text-ink shadow-[0_12px_28px_rgba(113,210,192,0.16)] transition-transform hover:-translate-y-0.5"
                      >
                        Build this for my workflow
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {isComplete && relatedProject ? (
                  <a
                    href={relatedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-neon-cyan transition-colors hover:text-white"
                  >
                    See this thinking applied in {relatedProject.title}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
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
