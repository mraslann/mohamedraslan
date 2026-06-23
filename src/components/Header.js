import React from "react";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

function Header() {
  return (
    <header className="section-container min-h-[85vh] flex flex-col justify-center">
      <div className="max-w-3xl">
        <p className="text-accent font-mono text-sm mb-4 tracking-wide">
          Hello, I'm
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-50 leading-tight mb-6">
          Mohamed Raslan
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-6 leading-relaxed">
          Software engineer who likes making{" "}
          <span className="text-accent">complex things work well</span>.
        </p>
        <p className="text-slate-400 text-base max-w-2xl mb-4 leading-relaxed">
          I've spent the last 3+ years building backend systems, AI pipelines, and
          mobile apps — the kind of work where you have to care equally about the
          architecture and the edge cases. I enjoy the moment when a tangled
          problem clicks into a clean solution.
        </p>
        <p className="text-slate-400 text-base max-w-2xl mb-8 leading-relaxed">
          Based in Alexandria, Egypt. Currently at eSpace, where I work across
          Spring Boot microservices, LLM-powered tools, and Android systems —
          sometimes all in the same week.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/mraslann"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-accent transition-colors duration-200"
          >
            <GithubIcon size={20} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-raslan1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-accent transition-colors duration-200"
          >
            <LinkedinIcon size={20} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:raslanmohamed.mr@gmail.com"
            className="flex items-center gap-2 text-slate-300 hover:text-accent transition-colors duration-200"
          >
            <Mail size={20} />
            <span className="text-sm font-medium">Email</span>
          </a>
          <a
            href="#projects"
            className="ml-auto flex items-center gap-1.5 text-accent font-medium text-sm hover:underline"
          >
            See what I've built <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
