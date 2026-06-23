import React from "react";
import { Layers } from "lucide-react";

const domains = [
  {
    name: "Backend & Distributed Systems",
    items: ["Microservices", "Event-Driven Architecture", "Async Processing", "RESTful APIs", "Spring Boot"],
  },
  {
    name: "Data & Messaging",
    items: ["Kafka", "Redis Caching", "PostgreSQL", "pgvector", "Message Queues"],
  },
  {
    name: "AI & LLM Systems",
    items: ["RAG Pipelines", "Agentic Workflows", "LangGraph", "AWS Bedrock", "Computer Vision"],
  },
  {
    name: "Platform & Runtime",
    items: ["Docker", "AWS", "Android Automotive", "CI/CD", "Linux"],
  },
];

function SystemsExpertise() {
  return (
    <section id="systems" className="section-container">
      <h2 className="section-title">
        <Layers size={20} className="text-accent" />
        Systems Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {domains.map((domain, i) => (
          <div
            key={i}
            className="bg-slate-800/60 rounded-lg p-5 border border-slate-700/50"
          >
            <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-3">
              {domain.name}
            </p>
            <div className="flex flex-wrap gap-2">
              {domain.items.map((item, j) => (
                <span
                  key={j}
                  className="bg-slate-900 text-slate-300 px-2.5 py-1 rounded text-xs font-mono border border-slate-700 whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SystemsExpertise;
