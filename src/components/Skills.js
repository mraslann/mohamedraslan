import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">
        <Cpu size={20} className="text-accent" />
        Technical Skills
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === i
                ? "bg-accent text-slate-900"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="flex flex-wrap gap-3">
          {categories[activeTab].skills.map((skill, i) => (
            <span
              key={i}
              className="bg-slate-900 text-slate-200 px-4 py-2 rounded-md text-sm font-mono border border-slate-600 hover:border-accent transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50"
          >
            <p className="text-xs text-accent font-medium mb-2">{cat.name}</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              {cat.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
