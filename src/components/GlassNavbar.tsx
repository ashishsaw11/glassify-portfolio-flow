import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const GlassNavbar = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="glass-panel glass-border mx-auto mt-4 w-[min(1100px,95%)] px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight story-link">Glassfolio</a>

          {isMobile ? (
            <div className="relative flex items-center gap-2">
              <ThemeToggle />
              <Button variant="glass" size="icon" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
              </Button>
              {open && (
                <div className="animate-enter absolute right-0 mt-3 w-48 glass-panel glass-border p-2">
                  <ul className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          className="block rounded-md px-3 py-2 hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          href={item.href}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                    <li className="pt-1">
                      <a href="#contact">
                        <Button variant="hero" className="w-full">Contact</Button>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <ul className="flex items-center gap-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a className="opacity-90 hover:opacity-100 story-link" href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <ThemeToggle />
              <a href="#contact" className="hidden sm:block">
                <Button variant="hero">Contact</Button>
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default GlassNavbar;
