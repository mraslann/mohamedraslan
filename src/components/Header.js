import React from "react";
import { Mail, ExternalLink, FileText } from "lucide-react";
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
          Software engineer building{" "}
          <span className="text-accent">production backend systems</span> and{" "}
          <span className="text-accent">AI infrastructure</span>.
        </p>
        <p className="text-slate-400 text-base max-w-2xl mb-4 leading-relaxed">
          I work on distributed systems, event-driven architectures, and
          LLM-powered platforms. Day to day that means Spring Boot microservices,
          Kafka pipelines, and agentic AI systems — built to run reliably under
          real production load.
        </p>
        <p className="text-slate-400 text-base max-w-2xl mb-8 leading-relaxed">
          Currently at eSpace in Alexandria, Egypt, where I build across the
          full stack of modern backend engineering: from reservation platforms
          handling thousands of concurrent users, to cybersecurity event
          correlation, to LangGraph agents that replace multi-day manual workflows.
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
            href="/mohamedraslan/Mohamed_Raslan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800 border border-slate-700 hover:border-accent text-slate-200 text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200"
          >
            <FileText size={16} />
            Resume
          </a>
          <a
            href="#work"
            className="ml-auto flex items-center gap-1.5 text-accent font-medium text-sm hover:underline"
          >
            See my work <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
