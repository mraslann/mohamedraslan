import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import SystemsExpertise from "./components/SystemsExpertise";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Projects />
        <Experience />
        <SystemsExpertise />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
