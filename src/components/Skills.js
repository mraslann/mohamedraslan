import React from "react";
import { Cpu } from "lucide-react";

const categories = [
  {
    name: "Backend Frameworks",
    skills: ["Spring Boot", "Hibernate", "FastAPI", "Flask", "Node.js", "NestJS"],
  },
  {
    name: "Infrastructure & Databases",
    skills: ["AWS", "Docker", "PostgreSQL", "Redis", "MySQL", "Git", "Linux"],
  },
  {
    name: "Mobile, Embedded & Maps",
    skills: ["Android SDK", "Android Automotive", "OSMDroid", "GraphHopper", "Traccar"],
  },
  {
    name: "Languages",
    skills: ["Python", "Java", "SQL", "C", "JavaScript", "TypeScript"],
  },
  {
    name: "Specialized / AI",
    skills: ["LangGraph", "YOLOv10", "OpenAI Whisper", "TensorFlow", "PyTorch"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">
        <Cpu size={20} className="text-accent" />
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-slate-800/60 rounded-lg p-5 border border-slate-700/50"
          >
            <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-3">
              {cat.name}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span
                  key={j}
                  className="bg-slate-900 text-slate-300 px-2.5 py-1 rounded text-xs font-mono border border-slate-700 hover:border-accent transition-colors duration-200 whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
