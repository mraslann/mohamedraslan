import React from "react";
import { FolderGit2 } from "lucide-react";
import { GithubIcon } from "./icons";

const featuredProjects = [
  {
    title: "Real-Time Object Detection API",
    tags: ["FastAPI", "Docker", "Redis", "YOLOv10", "PostgreSQL"],
    github: "https://github.com/mraslann/Object-detection",
    problem:
      "High-volume media workflows required automated, low-latency video framing to eliminate manual editing hours.",
    architecture:
      "Implemented an asynchronous job queue to handle concurrent video processing requests without blocking the main thread. The FastAPI gateway accepts requests and enqueues them into Redis, where dedicated YOLOv10 worker processes pick up jobs independently and write results back to PostgreSQL with a cache layer for repeated queries.",
    flow: "[Client Request] ──> [FastAPI Gateway] ──> [Redis Queue] ──> [YOLOv10 Worker] ──> [PostgreSQL / Cache]",
    impact:
      "Boosted subject-framing accuracy by 50% and slashed per-video processing times by 30%.",
  },
  {
    title: "RAG Knowledge Base Engine",
    tags: ["LangGraph", "Claude (AWS Bedrock)", "PostgreSQL", "pgvector", "Python"],
    problem:
      "Parsing massive, disconnected internal corporate documents into an instantly searchable, stateful knowledge network.",
    architecture:
      "Developed a retrieval-augmented generation pipeline utilizing strategic document chunking strategies. Leveraged pgvector directly inside PostgreSQL to keep data relational and architecture simple, avoiding the operational overhead of a standalone vector database. LangGraph orchestrates the multi-step retrieval and generation flow with Claude via AWS Bedrock.",
    flow: "[Unstructured Docs] ──> [Chunking Pipeline] ──> [AWS Bedrock Embeddings] ──> [PostgreSQL + pgvector]",
    impact:
      "Reduced a multi-day manual research process to minutes with human-in-the-loop verification on low-confidence extractions.",
  },
];

const otherProjects = [
  {
    title: "AISOC — Cybersecurity Platform",
    description:
      "Real-time threat monitoring built on Spring Boot microservices talking over Kafka. I worked on the event correlation pipeline — the part that decides whether a cluster of signals is actually an incident worth alerting on.",
    tags: ["Spring Boot", "Kafka", "Docker"],
  },
  {
    title: "Android Automotive Navigation",
    description:
      "A navigation app for in-vehicle use with fleet tracking and offline routing. The fun challenge was making GPS processing, map rendering, and network calls not fight each other for the main thread.",
    tags: ["Android Automotive", "GraphHopper", "Traccar"],
  },
  {
    title: "The Space — Workspace Platform",
    description:
      "Booking API for a smart workspace platform. Spring Boot + Hibernate + Redis caching. The goal was sub-100ms on booking queries even during peak morning check-in rushes.",
    tags: ["Spring Boot", "PostgreSQL", "Redis"],
  },
];

function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        <FolderGit2 size={20} className="text-accent" />
        What I've Built
      </h2>

      <div className="space-y-8 mb-12">
        {featuredProjects.map((project, i) => (
          <div key={i} className="card">
            <h3 className="text-xl font-bold text-slate-50 mb-5">
              {project.title}
            </h3>

            <div className="space-y-5 mb-5">
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1.5">
                  The Problem
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1.5">
                  The Architecture
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1.5">
                  System Flow
                </p>
                <div className="bg-slate-900 border border-slate-700 rounded-md p-4 overflow-x-auto">
                  <code className="text-accent font-mono text-sm whitespace-nowrap">
                    {project.flow}
                  </code>
                </div>
              </div>

              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1.5">
                  The Impact
                </p>
                <p className="text-slate-200 text-sm font-medium">
                  {project.impact}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag, k) => (
                <span key={k} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-700">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200"
                >
                  <GithubIcon size={16} />
                  View GitHub Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-slate-200 mb-5">
        Other Notable Work
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {otherProjects.map((project, i) => (
          <div key={i} className="card flex flex-col">
            <h4 className="text-base font-semibold text-slate-100 mb-2">
              {project.title}
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, k) => (
                <span key={k} className="tag text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
