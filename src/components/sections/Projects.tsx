type Project = {
  title: string;
  description: string;
  href: string;
};

const projects: Project[] = [
  { title: "3D Brand Explorations", description: "Vibrant glassy shapes and motion.", href: "#" },
  { title: "Interactive UI Concepts", description: "Polished micro-interactions and flows.", href: "#" },
  { title: "Data Viz in Motion", description: "Reactive charts with tasteful motion.", href: "#" },
];

const ProjectCard = ({ p }: { p: Project }) => (
  <a href={p.href} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
    <article className="glass-panel glass-border p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glass-strong">
      <h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
      <p className="text-sm text-muted-foreground">{p.description}</p>
      <div className="mt-4 h-40 w-full rounded-md bg-gradient-primary opacity-80 transition-opacity group-hover:opacity-100" aria-hidden="true" />
    </article>
  </a>
);

const Projects = () => {
  return (
    <section id="projects" className="mx-auto w-[min(1100px,95%)] py-16">
      <header className="mb-8">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <p className="text-muted-foreground">Crafted with precision, animation, and a love for glass.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
