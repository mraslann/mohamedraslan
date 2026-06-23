import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "eSpace",
    period: "Aug 2025 – Present",
    location: "Alexandria, Egypt",
    bullets: [
      "Shipped an end-to-end agentic AI product from design to production in under 8 weeks, collaborating across product, data, and frontend teams in a fast-paced Agile/Scrum environment.",
      "Delivered scalable RESTful APIs and data models for The Space reservation platform, implementing Redis-based caching that brought booking query latency under 100ms during peak traffic for thousands of concurrent users.",
      "Diagnosed and resolved background concurrency bottlenecks in an Android Automotive navigation app — the fix directly unblocked a stalled enterprise client contract worth a new revenue stream.",
      "Contributed to AISOC, a cybersecurity operations platform, owning Spring Boot microservices with Kafka-based event-driven communication, writing automated test suites (JUnit/Mockito) to maintain deployment confidence across 20+ services.",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Android Automotive", "Agile"],
  },
  {
    title: "Software Engineer",
    company: "White Peaks Solutions",
    period: "Dec 2023 – Jul 2025",
    location: "Remote",
    bullets: [
      "Owned the full lifecycle of KWIKMotion's video processing features — scoping, implementation, testing, and production deployment — across a distributed remote team.",
      "Delivered multilingual transcription capabilities that opened Arabic-language markets, directly enabling partnership deals with Rotana and MBC.",
      "Led a performance optimization initiative on the video cropping pipeline that improved accuracy by 50% and cut processing costs by 30%, increasing platform retention metrics.",
    ],
    tags: ["Python", "FastAPI", "Production Delivery", "Performance Optimization"],
  },
  {
    title: "Python & Algorithms Tutor",
    company: "Freelance",
    period: "Mar 2025 – Present",
    location: "Remote",
    bullets: [
      "Designed structured curricula for beginner developers covering Python fundamentals, OOP, and algorithmic problem-solving — accelerating students from zero to independently solving LeetCode-style problems.",
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
