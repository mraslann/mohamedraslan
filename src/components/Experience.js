import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "eSpace",
    period: "Aug 2025 – Present",
    location: "Alexandria, Egypt",
    bullets: [
      "Own backend services across three production systems simultaneously: a reservation platform (Spring Boot + PostgreSQL + Redis), a cybersecurity event-correlation platform (Kafka-based microservices), and an agentic AI pipeline (LangGraph + AWS Bedrock).",
      "Designed and shipped AISOC's event-driven architecture — Spring Boot services integrated via Kafka topics, with async processing pipelines and automated test suites (JUnit/Mockito) maintaining deployment confidence across 20+ services.",
      "Built Redis caching strategy for The Space that brought booking query latency under 100ms during peak traffic for thousands of concurrent users.",
      "Built a custom Android Automotive navigation app from scratch — real-time fleet tracking (Traccar), offline routing (GraphHopper), and a threading architecture that meets automotive-grade performance constraints. Delivered system that directly secured a new enterprise client contract.",
    ],
    tags: ["Spring Boot", "Kafka", "PostgreSQL", "Redis", "AWS Bedrock", "Android Automotive"],
  },
  {
    title: "Software Engineer",
    company: "White Peaks Solutions",
    period: "Dec 2023 – Jul 2025",
    location: "Remote",
    bullets: [
      "Owned full delivery lifecycle of KWIKMotion's video processing systems — from architecture design through production deployment across a distributed team.",
      "Re-architected the video cropping pipeline: replaced synchronous frame-by-frame processing with an async worker model, improving accuracy by 50% and cutting processing time by 30%.",
      "Delivered multilingual transcription (OpenAI Whisper) that opened Arabic-language markets, directly enabling deals with Rotana, MBC, and AlArabiya.",
    ],
    tags: ["Python", "FastAPI", "YOLO", "Whisper", "Production Systems"],
  },
  {
    title: "Python & Algorithms Tutor",
    company: "Freelance",
    period: "Mar 2025 – Present",
    location: "Remote",
    bullets: [
      "Design structured curricula covering Python, OOP, and algorithmic problem-solving — students progress from fundamentals to independently solving LeetCode-style problems.",
    ],
    tags: ["Python", "DSA", "Mentorship"],
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
