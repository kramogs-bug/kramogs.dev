"use client";

import { useState, type ElementType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  GitMerge,
  Globe,
  LockKeyhole,
  Play,
  RotateCcw,
  Target,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";
import EmailAppLauncher from "@/components/ui/EmailAppLauncher";
import { automationQuests } from "@/data/automationQuest";
import { capabilities, projects } from "@/data/portfolio";

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

  const selectedCapability =
    capabilities.find((capability) => capability.id === selectedId) ?? capabilities[0];
  const selectedIndex = capabilities.findIndex(
    (capability) => capability.id === selectedCapability.id,
  );
  const quest = automationQuests[selectedCapability.id];
  const relatedProject = projectsById.get(quest.projectId);
  const SelectedIcon = iconMap[selectedCapability.icon] ?? Code2;
  const totalSteps = quest.steps.length;
  const isComplete = completedSteps === totalSteps;
  const nextStep = quest.steps[completedSteps];
  const progress = Math.round((completedSteps / totalSteps) * 100);
  const latestLog =
    completedSteps > 0 ? quest.steps[completedSteps - 1].log : "Select the active node to begin";

  function selectMission(id: string) {
    setSelectedId(id);
    setCompletedSteps(0);
  }

  function runNextStep() {
    setCompletedSteps((current) => Math.min(current + 1, totalSteps));
  }

  return (
    <section id="skills" className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="pointer-events-none absolute -right-56 -top-56 h-[34rem] w-[34rem] rounded-full border border-white/[0.07]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="section-kicker !text-neon-cyan">Interactive demo</span>
            <h2 className="balanced mt-5 max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl">
              See one workflow come alive.
            </h2>
          </div>
          <p className="pretty max-w-2xl text-base leading-7 text-white/60 lg:justify-self-end lg:text-lg">
            Choose a common task, run its four automation steps, and reveal the kind of
            result a focused system can create.
          </p>
        </div>

        <div
          className="mt-10 grid grid-cols-2 gap-2.5 md:grid-cols-3 xl:grid-cols-6"
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
                className={`relative min-h-[108px] overflow-hidden rounded-2xl border p-4 text-left transition-colors ${
                  isSelected
                    ? "border-neon-cyan bg-neon-cyan text-ink"
                    : "border-white/10 bg-white/[0.035] text-white hover:border-neon-cyan/35 hover:bg-white/[0.06]"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex h-full flex-col justify-between gap-4">
                  <span className="flex items-center justify-between">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-xl ${
                        isSelected
                          ? "bg-ink text-neon-cyan"
                          : "bg-neon-cyan/10 text-neon-cyan"
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span
                      className={`font-mono text-[8px] font-bold tracking-[0.14em] ${
                        isSelected ? "text-ink/45" : "text-white/25"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="text-xs font-extrabold leading-tight sm:text-sm">
                    {capability.title}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-4 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b3338] shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
          <div className="flex flex-col gap-5 border-b border-white/10 px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-neon-cyan/20 bg-neon-cyan/10 text-neon-cyan">
                <SelectedIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-neon-cyan">
                  Mission {String(selectedIndex + 1).padStart(2, "0")} / {quest.codename}
                </p>
                <h3 className="mt-1 text-xl font-extrabold tracking-[-0.025em] sm:text-2xl">
                  {selectedCapability.title}
                </h3>
              </div>
            </div>

            <div className="w-full max-w-sm">
              <div className="flex items-center justify-between font-mono text-[9px] font-bold uppercase tracking-[0.12em]">
                <span className={isComplete ? "text-neon-cyan" : "text-white/40"}>
                  {isComplete ? "System online" : "Workflow progress"}
                </span>
                <span className="text-white/55">
                  {completedSteps} / {totalSteps}
                </span>
              </div>
              <div
                className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]"
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
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCapability.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[0.72fr_1.28fr]"
            >
              <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <p className="font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-white/35">
                  The repetitive work
                </p>
                <p className="pretty mt-3 text-sm leading-6 text-white/60">
                  {quest.briefing}
                </p>

                <div className="mt-5 rounded-2xl border border-neon-cyan/15 bg-neon-cyan/[0.055] p-4">
                  <p className="inline-flex items-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-neon-cyan">
                    <Target className="h-3.5 w-3.5" aria-hidden="true" />
                    Goal
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/75">
                    {quest.objective}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-white/35">
                    Illustrative outcome
                  </p>
                  <div className="mt-3 grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr]">
                    <div className="rounded-xl bg-black/10 p-4">
                      <p className="text-[10px] text-white/35">{quest.before.label}</p>
                      <p className="mt-1 text-lg font-extrabold text-white/70">
                        {quest.before.value}
                      </p>
                    </div>
                    <ArrowRight
                      className="mx-auto h-4 w-4 rotate-90 text-white/25 sm:rotate-0"
                      aria-hidden="true"
                    />
                    <div
                      className={`rounded-xl p-4 ${
                        isComplete
                          ? "border border-neon-cyan/20 bg-neon-cyan/[0.08]"
                          : "bg-black/10"
                      }`}
                      aria-live="polite"
                    >
                      {isComplete ? (
                        <>
                          <p className="text-[10px] text-neon-cyan">{quest.after.label}</p>
                          <p className="mt-1 text-lg font-extrabold text-white">
                            {quest.after.value}
                          </p>
                        </>
                      ) : (
                        <span className="flex min-h-[42px] items-center justify-center gap-2 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-white/30">
                          <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
                          Run the flow
                        </span>
                      )}
                    </div>
                  </div>
                  {isComplete ? (
                    <p className="mt-3 text-xs leading-5 text-neon-cyan/70">{quest.impact}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-white/35">
                      Automation flow
                    </p>
                    <p className="mt-1 text-xs text-white/45">
                      Run the highlighted step to unlock the next.
                    </p>
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.12em] ${
                      isComplete
                        ? "border-neon-cyan/25 bg-neon-cyan/[0.08] text-neon-cyan"
                        : "border-signal/25 bg-signal/[0.07] text-signal"
                    }`}
                  >
                    {isComplete ? "Complete" : "Guided"}
                  </span>
                </div>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {quest.steps.map((step, index) => {
                    const isDone = index < completedSteps;
                    const isReady = index === completedSteps && !isComplete;

                    return (
                      <motion.button
                        key={step.title}
                        type="button"
                        onClick={isReady ? runNextStep : undefined}
                        disabled={!isReady}
                        whileTap={isReady ? { scale: 0.985 } : undefined}
                        aria-label={
                          isDone
                            ? `${step.title}, completed`
                            : isReady
                              ? `Activate ${step.title}`
                              : `${step.title}, locked`
                        }
                        className={`flex min-h-[104px] items-start gap-3 rounded-2xl border p-4 text-left transition-colors ${
                          isDone
                            ? "border-neon-cyan/20 bg-neon-cyan/[0.06]"
                            : isReady
                              ? "border-signal/45 bg-signal/[0.08]"
                              : "cursor-not-allowed border-white/[0.07] bg-black/10 opacity-45"
                        }`}
                      >
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
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
                            <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
                          )}
                        </span>
                        <span>
                          <span
                            className={`font-mono text-[8px] font-bold uppercase tracking-[0.13em] ${
                              isDone
                                ? "text-neon-cyan"
                                : isReady
                                  ? "text-signal"
                                  : "text-white/25"
                            }`}
                          >
                            Step {index + 1}
                          </span>
                          <span className="mt-1 block text-sm font-extrabold text-white/85">
                            {step.title}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-white/40">
                            {step.description}
                          </span>
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#082a2f] px-4 py-3 font-mono text-[10px] text-white/50">
                  <span className="text-neon-cyan">&gt;</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${selectedCapability.id}-${completedSteps}`}
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      aria-live="polite"
                    >
                      {isComplete ? "Workflow complete. Result unlocked." : latestLog}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-2">
                    {completedSteps > 0 ? (
                      <button
                        type="button"
                        onClick={() => setCompletedSteps(0)}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-xs font-bold text-white/55 transition-colors hover:border-white/25 hover:text-white"
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                        Reset
                      </button>
                    ) : null}
                    {isComplete && relatedProject ? (
                      <a
                        href={relatedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-xs font-bold text-neon-cyan transition-colors hover:border-neon-cyan/30 hover:text-white"
                      >
                        Live example
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>

                  {!isComplete && nextStep ? (
                    <button
                      type="button"
                      onClick={runNextStep}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-5 py-3 text-xs font-extrabold text-ink transition-transform hover:-translate-y-0.5"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      Run {nextStep.title}
                    </button>
                  ) : (
                    <EmailAppLauncher
                      subject={`${selectedCapability.title} project inquiry`}
                      body={`Hi John Mark,\n\nI tried the ${quest.codename} automation demo on your portfolio. I would like to discuss a similar workflow.\n\n`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-neon-cyan px-5 py-3 text-xs font-extrabold text-ink transition-transform hover:-translate-y-0.5"
                    >
                      Discuss this workflow
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </EmailAppLauncher>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
