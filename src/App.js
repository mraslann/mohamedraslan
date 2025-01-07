import React, { useState } from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header onToggleDarkMode={toggleDarkMode} />
      <main>
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
