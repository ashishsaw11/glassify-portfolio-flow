import GlassNavbar from "@/components/GlassNavbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Footer from "@/components/Footer";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Portfolio Owner",
    url: "/",
    sameAs: [
      "https://github.com/yourhandle",
      "https://www.linkedin.com/in/yourhandle",
      "https://twitter.com/yourhandle",
      "mailto:you@example.com"
    ],
    description: "Modern glassmorphism portfolio with gradients and 3D visuals.",
  };

  return (
    <>
      <GlassNavbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Experience />
        <section id="contact" className="mx-auto w-[min(1100px,95%)] py-16">
          <h2 className="text-2xl font-bold mb-3">Contact</h2>
          <p className="text-muted-foreground">Reach out at your@email.com</p>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
