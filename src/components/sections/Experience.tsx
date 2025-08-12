type Role = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

const roles: Role[] = [
  {
    company: "Aurora Labs",
    title: "Senior Front‑end Engineer",
    period: "2023 — Present",
    summary: "Led UI systems with glassmorphism patterns, optimized performance, and shipped animated design systems.",
  },
  {
    company: "Neon Studio",
    title: "Product Designer & Engineer",
    period: "2021 — 2023",
    summary: "Designed and built interactive dashboards, micro‑interactions, and data viz with Three.js.",
  },
  {
    company: "Freelance",
    title: "UI Engineer",
    period: "2019 — 2021",
    summary: "Delivered bespoke landing pages and component libraries for startups and creatives.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mx-auto w-[min(1100px,95%)] py-16">
      <header className="mb-8">
        <h2 className="text-2xl font-bold">Experience</h2>
        <p className="text-muted-foreground">A concise timeline of recent roles and impact.</p>
      </header>
      <div className="space-y-4">
        {roles.map((r) => (
          <article key={r.company} className="glass-panel glass-border p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{r.title} · {r.company}</h3>
              <span className="text-sm text-muted-foreground">{r.period}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{r.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
