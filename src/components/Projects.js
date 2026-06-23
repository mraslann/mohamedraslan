import React from "react";
import { Building2, FolderGit2 } from "lucide-react";

const professionalWork = [
  {
    title: "AISOC — Cybersecurity Operations Platform",
    tags: ["Spring Boot", "Kafka", "Microservices", "JUnit", "Docker", "Async Processing"],
    problem:
      "Security operations teams needed real-time threat detection and incident correlation across high-volume event streams, with zero tolerance for missed signals or false-quiet periods.",
    architecture:
      "Built Spring Boot microservices communicating via Kafka topics for event-driven, loosely-coupled processing. Each service owns a bounded context — ingestion, correlation, alerting — with async processing pipelines that handle event bursts without backpressure propagation. Automated test coverage (JUnit/Mockito) across 20+ services maintains deployment confidence.",
    impact:
      "Supports real-time threat monitoring at scale with event-driven communication ensuring no single service failure cascades into system-wide blind spots.",
    flow: [
      "Event Sources",
      "Kafka Ingestion",
      "Correlation Engine",
      "Alert Service",
      "Dashboard",
    ],
  },
  {
    title: "The Space — Workspace Reservation Platform",
    tags: ["Spring Boot", "Hibernate", "PostgreSQL", "Redis", "RESTful APIs"],
    problem:
      "A smart workspace platform serving thousands of users needed booking APIs that stayed fast under peak morning check-in load, with complex availability logic that couldn't be computed naively on every request.",
    architecture:
      "Designed RESTful APIs with Spring Boot and Hibernate ORM, backed by PostgreSQL for relational booking data. Implemented Redis caching for availability queries — invalidated on booking mutations — bringing response times under 100ms even during peak concurrent access.",
    impact:
      "Sub-100ms booking queries during peak traffic. System handles thousands of concurrent users without degraded response times.",
    flow: [
      "Client",
      "Spring Boot API",
      "Redis Cache",
      "PostgreSQL",
      "Response",
    ],
  },
  {
    title: "Android Automotive Navigation System",
    tags: ["Android Automotive", "GraphHopper", "Traccar", "OSMDroid", "Java"],
    problem:
      "An enterprise client needed a custom in-vehicle navigation app with real-time fleet tracking and offline routing — no existing solution met their requirements, so it had to be built from scratch.",
    architecture:
      "Designed and built the entire application on Android Automotive from the ground up. Integrated OSMDroid for map rendering, GraphHopper for offline turn-by-turn routing, and Traccar for real-time fleet position updates. Architected the threading model to isolate GPS processing, network I/O, and UI rendering into separate execution contexts with bounded queues to meet automotive-grade performance constraints.",
    impact:
      "Delivered a complete production navigation system that directly secured a new enterprise client contract.",
    flow: [
      "GPS Sensor",
      "Location Service",
      "GraphHopper Router",
      "OSMDroid Renderer",
      "Traccar Sync",
    ],
  },
];

const selectedProjects = [
  {
    title: "RAG Knowledge Base Engine",
    tags: ["LangGraph", "Claude (AWS Bedrock)", "PostgreSQL", "pgvector", "Python"],
    problem:
      "Corporate teams had thousands of disconnected internal documents with no way to query relationships between entities or surface insights without days of manual reading.",
    architecture:
      "Retrieval-augmented generation pipeline with strategic document chunking to preserve semantic boundaries. Chose pgvector inside PostgreSQL over a standalone vector database — keeps embeddings relational, simplifies joins with structured metadata, eliminates operational overhead of a separate system. LangGraph orchestrates multi-step retrieval and generation with Claude via AWS Bedrock.",
    impact:
      "Reduced multi-day manual research to minutes. Human-in-the-loop verification on low-confidence extractions maintains trust.",
    flow: [
      "Unstructured Docs",
      "Chunking Pipeline",
      "AWS Bedrock Embeddings",
      "PostgreSQL + pgvector",
      "LangGraph → Claude",
    ],
  },
  {
    title: "Real-Time Object Detection API",
    tags: ["FastAPI", "Docker", "Redis", "YOLOv10", "PostgreSQL", "Async"],
    github: "https://github.com/mraslann/Object-detection",
    problem:
      "Media workflows needed low-latency automated video framing, but inference is expensive and synchronous processing would block under concurrent load.",
    architecture:
      "FastAPI gateway accepts requests and immediately enqueues into Redis, returning a job ID. Dedicated YOLOv10 worker processes consume from the queue independently — horizontally scalable behind Docker. Results write to PostgreSQL with a cache layer for repeated frame queries. Client polls or subscribes via WebSocket for completion.",
    impact:
      "50% improvement in subject-framing accuracy. 30% reduction in per-video processing time. Non-blocking architecture handles concurrent requests without degradation.",
    flow: [
      "Client Request",
      "FastAPI Gateway",
      "Redis Queue",
      "YOLOv10 Worker",
      "PostgreSQL / Cache",
    ],
  },
];

function FlowDiagram({ steps }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-md p-4 overflow-x-auto">
      <div className="flex items-center gap-0 min-w-max">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="bg-slate-800 border border-slate-600 rounded px-3 py-1.5 text-xs font-mono text-slate-300 whitespace-nowrap">
              {step}
            </div>
            {i < steps.length - 1 && (
              <div className="text-accent text-xs font-mono px-1.5 shrink-0">→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3 className="text-xl font-bold text-slate-50 mb-5">
        {project.title}
      </h3>

      <div className="space-y-5 mb-5">
        <div>
          <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1.5">
            Problem
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div>
          <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1.5">
            Architecture
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            {project.architecture}
          </p>
        </div>

        <div>
          <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1.5">
            System Flow
          </p>
          <FlowDiagram steps={project.flow} />
        </div>

        <div>
          <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1.5">
            Impact
          </p>
          <p className="text-slate-200 text-sm font-medium">
            {project.impact}
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
  );
}

function Projects() {
  return (
    <section id="work" className="section-container">
      <h2 className="section-title">
        <Building2 size={20} className="text-accent" />
        Featured Professional Work
      </h2>

      <div className="space-y-8 mb-16">
        {professionalWork.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      <h2 className="section-title">
        <FolderGit2 size={20} className="text-accent" />
        Selected Projects
      </h2>

      <div className="space-y-8">
        {selectedProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
