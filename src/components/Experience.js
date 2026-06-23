import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "eSpace",
    period: "Aug 2025 – Present",
    location: "Alexandria, Egypt",
    bullets: [
      "Architected an end-to-end agentic AI system with LangGraph and Claude (AWS Bedrock) that parses corporate documents into a structured knowledge graph, automatically surfaces business opportunities, and generates tailored pitch decks — reducing a multi-day manual process to minutes.",
      "Delivered production features for The Space, a smart workspace reservation platform serving thousands of users, building RESTful APIs and data models with Java Spring Boot, Hibernate, PostgreSQL, and Redis-based caching in an Agile/Scrum environment.",
      "Built a custom Android Automotive navigation app with real-time fleet tracking (Traccar) and offline routing (GraphHopper), resolving background concurrency bottlenecks that directly secured a new enterprise client contract.",
      "Contributed to AISOC, a cybersecurity operations platform built on a microservices architecture, implementing Spring Boot services integrated via Kafka for event-driven communication, alongside async processing pipelines and automated testing (JUnit/Mockito).",
    ],
    tags: ["Java", "Spring Boot", "LangGraph", "AWS Bedrock", "PostgreSQL", "Kafka", "Android Automotive"],
  },
  {
    title: "Software Engineer",
    company: "White Peaks Solutions",
    period: "Dec 2023 – Jul 2025",
    location: "Remote",
    bullets: [
      "Engineered an AI highlight detection pipeline for KWIKMotion that automatically identifies and clips key moments from long-form video, cutting manual editing time significantly and enabling a new short-form content product line.",
      "Built automated multilingual transcription and translation using OpenAI Whisper, enabling KWIKMotion to expand into Arabic-language markets and establish partnerships with Rotana and MBC.",
      "Re-architected KWIKMotion's AI video cropping system for AlArabiya using YOLO, improving subject-framing accuracy by 50% and cutting per-video processing time by 30%.",
    ],
    tags: ["Python", "FastAPI", "YOLO", "Whisper", "Redis"],
  },
  {
    title: "Python & Algorithms Tutor",
    company: "Freelance",
    period: "Mar 2025 – Present",
    location: "Remote",
    bullets: [
      "Mentor beginner developers in Python fundamentals, OOP, and algorithmic problem-solving; designed structured curricula that accelerated students from zero to independently solving LeetCode-style problems.",
    ],
    tags: ["Python", "DSA", "OOP", "Teaching"],
  },
];

function Experience() {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">
        <Briefcase size={20} className="text-accent" />
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="card">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  {exp.title}
                </h3>
                <p className="text-accent font-medium text-sm">{exp.company}</p>
              </div>
              <div className="text-sm text-slate-400 sm:text-right shrink-0">
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {exp.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-slate-300 text-sm leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-accent before:text-xs"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, k) => (
                <span key={k} className="tag">
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

export default Experience;
