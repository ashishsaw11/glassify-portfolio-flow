type EduItem = {
  school: string;
  degree: string;
  period: string;
  summary: string;
};

const education: EduItem[] = [
  {
    school: "Tech University",
    degree: "B.Sc. in Computer Science",
    period: "2015 — 2019",
    summary: "Focused on human‑computer interaction, graphics, and web engineering.",
  },
  {
    school: "Design Institute",
    degree: "Certificate in Product Design",
    period: "2020",
    summary: "Learned visual hierarchy, motion principles, and systems thinking.",
  },
];

const Education = () => {
  return (
    <section id="education" className="mx-auto w-[min(1100px,95%)] py-16">
      <header className="mb-8">
        <h2 className="text-2xl font-bold">Education</h2>
        <p className="text-muted-foreground">Relevant studies that shaped my craft.</p>
      </header>
      <div className="space-y-4">
        {education.map((e) => (
          <article key={e.school} className="glass-panel glass-border p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{e.degree} · {e.school}</h3>
              <span className="text-sm text-muted-foreground">{e.period}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{e.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
