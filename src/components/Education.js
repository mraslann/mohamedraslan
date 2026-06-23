import React from "react";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "AWS Academy Cloud Foundations",
  "AWS Academy Machine Learning Foundations",
  "Huawei HCCDP-GaussDB Developer",
];

function Education() {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">
        <GraduationCap size={20} className="text-accent" />
        Education & Certifications
      </h2>
      <div className="space-y-6">
        <div className="card">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-100">
                Alexandria University
              </h3>
              <p className="text-slate-300 text-sm">
                Bachelor of Science in Computer Engineering
              </p>
            </div>
            <div className="text-sm text-slate-400 sm:text-right shrink-0">
              <p>Sep 2018 – Jun 2023</p>
              <p className="font-mono text-accent">GPA: 3.38</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-accent" />
            <h3 className="text-base font-semibold text-slate-100">
              Certifications
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, i) => (
              <span key={i} className="tag">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
