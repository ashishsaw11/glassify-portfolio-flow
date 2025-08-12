import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="glass-panel glass-border mx-auto mb-8 w-[min(1100px,95%)] px-6 py-5">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Glassfolio · All rights reserved</p>
          <nav aria-label="Social links">
            <ul className="flex items-center gap-3">
              <li>
                <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="story-link">
                  <Github className="size-5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="story-link">
                  <Linkedin className="size-5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="story-link">
                  <Twitter className="size-5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="mailto:you@example.com" aria-label="Email" className="story-link">
                  <Mail className="size-5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
