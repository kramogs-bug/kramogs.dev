"use client";

import { motion } from "framer-motion";
import {
  Zap, GitBranch, Repeat, Shield, BarChart2, Settings2,
  ArrowUpRight, ExternalLink, Terminal
} from "lucide-react";
import { amytFeatures } from "@/data/portfolio";

const iconMap = {
  Zap, GitBranch, Repeat, Shield, BarChart2, Settings2,
} as Record<string, React.ElementType>;

export default function AmytSection() {
  return (
    <section id="amyt" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial-glow-blue blur-3xl opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <div className="h-px flex-1 max-w-24 bg-neon-cyan/20" />
          <span className="px-3 py-1 text-xs font-semibold text-neon-cyan border border-border bg-surface-2 rounded-full">
            Featured product
          </span>
          <div className="h-px flex-1 max-w-24 bg-neon-cyan/20" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-neon-blue/10 border border-neon-blue/15 flex items-center justify-center">
                <Terminal className="w-7 h-7 text-neon-blue" />
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold text-neon-cyan tracking-wider">
                  AMYT
                </h2>
                  <p className="text-sm text-text-muted">
                  Automation Made for You - Tool
                </p>
              </div>
            </div>

            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              AMYT isn&apos;t just another project in my portfolio - it&apos;s my flagship product,
              built from scratch to solve a real problem I experienced every day.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg bg-surface/60 border border-border">
                <div className="text-xs font-semibold text-neon-cyan mb-1">The problem</div>
                <p className="text-sm text-text-secondary">
                  Repetitive workflows were consuming hours I didn&apos;t have. Existing tools
                  were either too complex, too generic, or not built for the way I actually worked.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface/60 border border-border">
                <div className="text-xs font-semibold text-neon-green mb-1">The solution</div>
                <p className="text-sm text-text-secondary">
                  I engineered AMYT to handle my exact workflow patterns - a purpose-built
                  automation system with macro execution, logic branching, and run analytics.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://amyt.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-neon-green text-background text-sm font-semibold rounded hover:bg-neon-green-dim transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Try AMYT Live
              </a>
              <a
                href="#systems"
                className="flex items-center gap-2 px-5 py-2.5 bg-surface border border-border text-text-secondary text-sm font-semibold rounded hover:border-border-bright hover:text-text-primary transition-all"
              >
                <ArrowUpRight className="w-4 h-4" />
                Full Breakdown
              </a>
            </div>
          </motion.div>

          {/* Right - Feature grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {amytFeatures.map((feature, i) => {
                const Icon = iconMap[feature.icon] ?? Zap;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-4 rounded-xl bg-surface border border-border hover:border-border-bright hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mb-3 group-hover:bg-neon-cyan/15 transition-colors">
                      <Icon className="w-4 h-4 text-neon-cyan" />
                    </div>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom stat row */}
            <div className="mt-4 p-4 rounded-xl bg-surface border border-border flex items-center justify-between shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-neon-cyan">340+</div>
                <div className="text-xs text-text-muted">Runs this week</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-neon-green">0</div>
                <div className="text-xs text-text-muted">Critical errors</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-display font-bold text-neon-blue">v2.4</div>
                <div className="text-xs text-text-muted">Current version</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
