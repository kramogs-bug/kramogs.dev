import { education, experience } from "@/data/portfolio";

export default function BackgroundSection() {
  return (
    <section id="background" className="section-space bg-white">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <span className="section-kicker">Background</span>
            <h2 className="balanced mt-5 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-ink sm:text-5xl">Learning in school. Building beyond it.</h2>
          </div>
          <div className="space-y-4">
            <article className="rounded-2xl border border-border bg-background p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.14em] text-neon-green">Education</p><h3 className="mt-3 text-xl font-black text-ink">{education.degree}</h3><p className="mt-2 text-sm text-text-secondary">{education.school} · {education.location}</p></div><span className="mt-2 shrink-0 text-sm font-bold text-text-muted sm:mt-0">{education.graduation}</span></div>
            </article>
            {experience.map((item) => (
              <article key={item.role} className="rounded-2xl border border-border bg-white p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.14em] text-text-muted">Work experience</p><h3 className="mt-3 text-xl font-black text-ink">{item.role}</h3><p className="mt-1 text-sm font-bold text-neon-green">{item.company}</p></div><span className="mt-2 shrink-0 text-sm font-bold text-text-muted sm:mt-0">{item.period}</span></div>
                <p className="pretty mt-5 text-sm leading-6 text-text-secondary">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
