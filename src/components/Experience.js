import React from "react";

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="job">
        <h3>Software Engineer - White Peaks Solutions</h3>
        <p>Dec 2023 – Present | Remote</p>
        <ul>
          <li>
            Elevated KWIKMotion’s adoption by introducing AI-powered transcription and translation features, leading to
            partnerships with Rotana and MBC.
          </li>
          <li>Enhanced the AI cropping tool’s accuracy by 50% and reduced processing time by 30%.</li>
          <li>Developed an automated solution for extracting video highlights.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Data Engineer Intern - Bibliotheca Alexandrina</h3>
        <p>Jul 2022 – Aug 2022 | Alexandria, Egypt</p>
        <ul>
          <li>Built a multithreaded web crawler to harvest an Arabic text corpus.</li>
          <li>Developed a service API for payload delivery from WARC files.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
