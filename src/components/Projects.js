import React from "react";
import { FolderGit2, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    title: "Agentic AI Knowledge Graph System",
    context:
      "A consulting team was spending days per client manually reading corporate filings and assembling pitch materials. They asked if we could make it faster — turns out we could make it almost instant.",
    approach:
      "I designed a multi-agent pipeline using LangGraph where specialized agents each own a piece of the workflow: parsing documents, extracting entities, mapping relationships into a graph, and drafting decks from the structured data. Claude (AWS Bedrock) handles the reasoning, PostgreSQL stores the knowledge graph.",
    challenge:
      "Corporate documents are messy — annual reports look nothing like press releases. The system kept hallucinating connections between unrelated entities. I added a confidence-scoring layer that flags low-certainty extractions for human review instead of guessing, which made the output trustworthy enough for client-facing work.",
    outcome: "What took 3–5 days now takes minutes, with a human reviewer spending ~20 minutes on verification.",
    tags: ["LangGraph", "Claude (AWS Bedrock)", "Python", "PostgreSQL"],
  },
  {
    title: "KWIKMotion Video Processing",
    context:
      "Media companies needed to turn broadcast footage into short-form vertical video at scale. The existing tool worked, but it kept losing track of subjects during fast camera movements.",
    approach:
      "I rebuilt the cropping pipeline around a custom YOLO model for subject tracking, paired with a temporal smoothing algorithm — instead of making frame-by-frame crop decisions, the system follows a weighted moving average that respects scene boundaries. Added Whisper for multilingual subtitles since we were already processing every frame.",
    challenge:
      "Scene cuts were the tricky part. The smoothing algorithm would try to interpolate across a hard cut, producing a few frames of nonsense. I ended up detecting cuts via histogram difference and resetting the tracking state at boundaries.",
    outcome: "50% better framing, 30% faster. Enabled partnerships with Rotana, MBC, and AlArabiya.",
    tags: ["Python", "YOLO", "Whisper", "FastAPI", "FFmpeg"],
    link: "https://www.kwikmotion.com/",
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
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold text-slate-50">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-accent text-sm transition-colors duration-200 shrink-0"
                >
                  <ExternalLink size={14} />
                  Live
                </a>
              )}
            </div>

            <div className="space-y-4 mb-5">
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                  Context
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.context}
                </p>
              </div>
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                  What I Did
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.approach}
                </p>
              </div>
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                  The Interesting Problem
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                  Result
                </p>
                <p className="text-slate-200 text-sm font-medium">
                  {project.outcome}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
              {project.tags.map((tag, k) => (
                <span key={k} className="tag">
                  {tag}
                </span>
              ))}
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
