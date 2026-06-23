import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2026 Mohamed Raslan. Engineered for reliability.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/mraslann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-raslan1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:raslanmohamed.mr@gmail.com"
              className="text-slate-500 hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
