import { certificates, skillGroups } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-space bg-ink text-white">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <span className="section-kicker !text-neon-cyan">Technical toolkit</span>
            <h2 className="balanced mt-5 text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl">Skills I can bring to an engineering team.</h2>
            <p className="pretty mt-6 text-base leading-7 text-white/60">A practical stack shaped by building and deploying real web applications, automation tools, and school systems.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
                <h3 className="text-sm font-extrabold text-neon-cyan">{group.label}</h3>
                <div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/70">{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-neon-cyan">Cisco Networking Academy</p><h3 className="mt-2 text-2xl font-black tracking-[-0.03em]">Course certificates</h3></div><p className="text-sm text-white/45">2024–2025</p></div>
          <div className="mt-7 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {certificates.map(([name, date]) => <div key={name} className="flex items-start justify-between gap-4 border-b border-white/10 py-4"><span className="text-sm font-semibold text-white/75">{name}</span><span className="shrink-0 text-xs text-white/40">{date}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
