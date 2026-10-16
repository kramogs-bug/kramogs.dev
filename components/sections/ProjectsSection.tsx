import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { personalInfo, projects } from "@/data/portfolio";

const featured = projects.find((project) => project.featured) ?? projects[0];
const supporting = projects.filter((project) => project.id !== featured.id);

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-space border-y border-border">
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="section-kicker">Selected projects</span>
            <h2 className="balanced mt-5 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-ink sm:text-5xl">Work that shows how I think and build.</h2>
          </div>
          <p className="pretty max-w-2xl text-base leading-7 text-text-secondary lg:justify-self-end lg:text-lg">Four projects across campus systems, client work, academic development, and desktop automation.</p>
        </div>

        <article className="mt-14 overflow-hidden rounded-[2rem] bg-ink text-white shadow-[0_28px_75px_rgba(17,35,31,0.14)]">
          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer" className="group relative block min-h-[290px] overflow-hidden bg-white sm:min-h-[440px]" aria-label={`Open ${featured.title} live site`}>
              <Image src={featured.image} alt={`${featured.title} project preview`} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]" />
            </a>
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="flex items-center justify-between gap-4"><span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65">{featured.type}</span><span className="text-xs font-bold text-neon-cyan">{featured.year}</span></div>
                <h3 className="mt-8 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{featured.title}</h3>
                <p className="mt-3 text-base font-bold text-neon-cyan">{featured.tagline}</p>
                <p className="pretty mt-6 text-base leading-7 text-white/65">{featured.description}</p>
                <p className="pretty mt-4 border-l-2 border-signal pl-4 text-sm leading-6 text-white/75">{featured.contribution}</p>
              </div>
              <div className="mt-9">
                <div className="flex flex-wrap gap-2">{featured.stack.map((item) => <span key={item} className="rounded-full bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-white/70">{item}</span>)}</div>
                <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-neon-cyan">View live project <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {supporting.map((project) => (
            <article key={project.id} className="group flex min-h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-border-bright hover:shadow-card">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="relative block aspect-[1.55/1] overflow-hidden border-b border-border bg-[#f7f9f8]" aria-label={`Open ${project.title} live site`}>
                <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(min-width: 1024px) 31vw, 100vw" className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.025]" />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3"><p className="text-[10px] font-black uppercase tracking-[0.14em] text-neon-green">{project.type}</p><p className="text-xs font-bold text-text-muted">{project.year}</p></div>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.035em] text-ink">{project.title}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-text-primary">{project.tagline}</p>
                <p className="pretty mt-3 text-sm leading-6 text-text-secondary">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((item) => <span key={item} className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold text-text-secondary">{item}</span>)}</div>
                <div className="mt-auto flex flex-wrap gap-4 border-t border-border pt-5 text-sm font-bold text-ink">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-neon-green">Live site <ArrowUpRight className="h-4 w-4" /></a>
                  {project.repoUrl ? <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-neon-green"><Github className="h-4 w-4" />Source</a> : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-white p-6 sm:flex-row sm:items-center">
          <div><p className="font-extrabold text-ink">Want to see more of the code?</p><p className="mt-1 text-sm text-text-secondary">My GitHub includes this portfolio and additional public projects.</p></div>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border-bright px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-neon-green hover:text-neon-green"><Github className="h-4 w-4" />github.com/kramogs-bug</a>
        </div>
      </div>
    </section>
  );
}
