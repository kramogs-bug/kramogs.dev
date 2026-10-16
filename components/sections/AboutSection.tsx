import { education, focusAreas, personalInfo } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section className="section-space bg-white">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <span className="section-kicker">Profile</span>
            <h2 className="balanced mt-5 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-ink sm:text-5xl">Engineering with a practical point of view.</h2>
          </div>
          <div>
            <p className="pretty text-lg leading-8 text-text-secondary">{personalInfo.objective}</p>
            <div className="mt-8 rounded-2xl border border-border bg-background p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div>
                <p className="text-sm font-extrabold text-ink">{education.degree}</p>
                <p className="mt-1 text-sm text-text-secondary">{education.school} · {education.location}</p>
              </div>
              <p className="mt-3 shrink-0 text-sm font-bold text-neon-green sm:mt-0">{education.graduation}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border md:grid-cols-3">
          {focusAreas.map((item) => (
            <article key={item.number} className="bg-white p-7 sm:p-8">
              <p className="font-mono text-xs font-bold tracking-[0.14em] text-neon-green">{item.number}</p>
              <h3 className="mt-7 text-xl font-extrabold tracking-[-0.02em] text-ink">{item.title}</h3>
              <p className="pretty mt-3 text-sm leading-6 text-text-secondary">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
