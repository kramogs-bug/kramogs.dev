"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, PenTool, Search } from "lucide-react";
import { processSteps } from "@/data/portfolio";

const icons = [Search, PenTool, Code2, CheckCircle2];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <span className="section-kicker">How I work</span>
          <h2 className="balanced mt-5 text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] text-ink sm:text-5xl">
            Clear thinking before the first click.
          </h2>
          <p className="pretty mt-5 text-base leading-7 text-text-secondary sm:text-lg">
            A simple, transparent process keeps the build tied to the outcome you actually need.
          </p>
        </div>

        <div className="relative mt-14 grid gap-4 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden border-t border-dashed border-border-bright lg:block" />
          {processSteps.map((step, index) => {
            const Icon = icons[index] ?? Search;
            return (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="relative rounded-[1.5rem] border border-border bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-neon-green">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-bold tracking-[0.12em] text-text-muted">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-7 text-lg font-extrabold tracking-[-0.02em] text-ink">
                  {step.title}
                </h3>
                <p className="pretty mt-3 text-sm leading-6 text-text-secondary">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
