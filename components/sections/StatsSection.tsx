"use client";

import { motion } from "framer-motion";
import { Activity, Clock3, Code2, Users } from "lucide-react";
import { stats } from "@/data/portfolio";

const iconMap = {
  Cpu: Code2,
  Clock: Clock3,
  Activity,
  Users,
} as Record<string, React.ElementType>;

export default function StatsSection() {
  return (
    <section className="bg-ink text-white" aria-label="Selected project outcomes">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 px-5 sm:px-8 lg:grid-cols-4 lg:divide-y-0 lg:px-10">
        {stats.map((stat, index) => {
          const Icon = iconMap[stat.icon] ?? Code2;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="min-w-0 px-4 py-7 first:pl-0 sm:px-7 lg:py-9"
            >
              <div className="mb-4 flex items-center gap-2 text-neon-cyan">
                <Icon className="h-4 w-4" />
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">{stat.value}</div>
              <p className="mt-1 text-xs leading-5 text-white/60 sm:text-sm">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
