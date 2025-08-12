import GlassNavbar from "@/components/GlassNavbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Portfolio Owner",
    url: "/",
    sameAs: [],
    description: "Modern glassmorphism portfolio with gradients and 3D visuals.",
  };

  return (
    <>
      <GlassNavbar />
      <main>
        <Hero />
        <section id="about" className="mx-auto w-[min(1100px,95%)] py-16">
          <h2 className="text-2xl font-bold mb-3">About</h2>
          <p className="text-muted-foreground max-w-2xl">
            I build ambitious, animated, and accessible interfaces blending glassmorphism, gradients, and motion for premium feel.
          </p>
        </section>
        <Projects />
        <section id="contact" className="mx-auto w-[min(1100px,95%)] py-16">
          <h2 className="text-2xl font-bold mb-3">Contact</h2>
          <p className="text-muted-foreground">Reach out at your@email.com</p>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
