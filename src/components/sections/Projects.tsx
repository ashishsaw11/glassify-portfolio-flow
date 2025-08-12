import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";

type Project = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

const projects: Project[] = [
  { title: "3D Brand Explorations", description: "Vibrant glassy shapes and motion.", href: "#", image: proj1, alt: "3D glass dashboard UI thumbnail in violet-cyan gradient" },
  { title: "Interactive UI Concepts", description: "Polished micro-interactions and flows.", href: "#", image: proj2, alt: "Mobile app mockup with glassmorphism components" },
  { title: "Data Viz in Motion", description: "Reactive charts with tasteful motion.", href: "#", image: proj3, alt: "Data visualization panels with glass surfaces on dark gradient" },
];

const ProjectCard = ({ p }: { p: Project }) => (
  <a href={p.href} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
    <article className="glass-panel glass-border p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glass-strong">
      <img src={p.image} alt={p.alt} className="mb-4 h-40 w-full rounded-md object-cover" width={512} height={320} loading="lazy" decoding="async" />
      <h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
      <p className="text-sm text-muted-foreground">{p.description}</p>
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
