"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/portfolio";

const previewMap: Record<string, string> = {
  "cruze-it": "/assets/cruz-it-preview.png",
  "paper-flowers": "/assets/paper-flowers-preview.png",
  amyt: "/assets/amyt-preview.png",
  wescomm: "/assets/wescoom-preview.png",
  "sellables-calc": "/assets/sellables-calculator-preveiw.png",
};

const featuredProject = projects.find((project) => project.id === "amyt") ?? projects[0];
const supportingProjects = projects.filter((project) => project.id !== featuredProject.id);

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-end gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-kicker">Selected work</span>
            <h2 className="balanced mt-5 max-w-xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
              Real tools for real workflows.
            </h2>
          </div>
          <p className="pretty max-w-2xl text-base leading-7 text-text-secondary lg:justify-self-end lg:text-lg">
            From focused utility tools to production client websites, each project starts with a
            clear problem and ends with something people can actually use.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 overflow-hidden rounded-[2rem] bg-ink text-white shadow-[0_30px_80px_rgba(8,42,47,0.18)]"
        >
          <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
            <a
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block min-h-[280px] overflow-hidden bg-[#111827] sm:min-h-[420px]"
              aria-label={`Open ${featuredProject.title} live site`}
            >
              <Image
                src={previewMap[featuredProject.id]}
                alt={`${featuredProject.title} website preview`}
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              <span className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-white text-ink transition-transform group-hover:rotate-6 group-hover:scale-105">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/70">
                    {featuredProject.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neon-cyan">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Live build
                  </span>
                </div>
                <h3 className="mt-7 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-3 text-lg font-semibold text-neon-cyan">
                  {featuredProject.tagline}
                </p>
                <p className="pretty mt-6 text-base leading-7 text-white/65">
                  {featuredProject.description}
                </p>
              </div>

              <div className="mt-10">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-neon-cyan"
                >
                  Visit the live product
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group flex min-h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-border-bright hover:shadow-card"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[1.69/1] overflow-hidden bg-[#f7f9f8]"
                aria-label={`Open ${project.title} live site`}
              >
                <Image
                  src={previewMap[project.id]}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
                  className="object-contain object-top transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-neon-green">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-ink">
                  {project.title}
                </h3>
                <p className="pretty mt-3 text-sm leading-6 text-text-secondary">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={item} className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold text-text-secondary">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 border-t border-border pt-5 text-sm font-bold text-ink transition-colors hover:text-neon-green"
                >
                  Visit live site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
