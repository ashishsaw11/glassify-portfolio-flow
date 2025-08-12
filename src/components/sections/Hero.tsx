import heroImg from "@/assets/hero-3d-glass.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative mx-auto w-[min(1100px,95%)] pt-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <article className="animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
            Modern Glassmorphism Portfolio
          </h1>
          <p className="mb-6 text-muted-foreground">
            A polished, gradient-driven, glassy experience with subtle motion and 3D visuals to make your work stand out.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects"><Button variant="hero">View Projects</Button></a>
            <a href="#about"><Button variant="glass">Learn More</Button></a>
          </div>
        </article>
        <div className="relative">
          <div className="glass-panel glass-border absolute -inset-3 -z-10" aria-hidden="true" />
          <img
            src={heroImg}
            alt="Abstract 3D gradient glass shapes"
            className="rounded-xl shadow-glass-strong hover-scale"
            width={768}
            height={432}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
