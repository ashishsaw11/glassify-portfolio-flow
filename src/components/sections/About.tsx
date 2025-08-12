import profile from "@/assets/profile-portrait.jpg";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Three.js",
  "Figma",
];

const About = () => {
  return (
    <section id="about" className="mx-auto w-[min(1100px,95%)] py-16">
      <div className="grid items-center gap-10 md:grid-cols-[320px,1fr]">
        <div className="relative">
          <div className="glass-panel glass-border absolute -inset-3 -z-10" aria-hidden="true" />
          <img
            src={profile}
            alt="Portfolio owner headshot with glassmorphism gradient background"
            className="rounded-xl shadow-glass hover-scale"
            width={512}
            height={512}
            loading="lazy"
            decoding="async"
          />
        </div>
        <article>
          <h2 className="text-2xl font-bold mb-3">About Me</h2>
          <p className="text-muted-foreground max-w-prose">
            I’m a front‑end engineer crafting premium experiences with glassmorphism, reactive gradients, and tasteful motion. I translate complex ideas into delightful, performant interfaces.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
