import React from "react";

function Header({ onToggleDarkMode }) {
  return (
    <header className="header">
      <h1>Mohamed Raslan</h1>
      <p>Software Engineer</p>
      <p>Email: raslanmohamed.mr@gmail.com | Phone: +201062419132</p>
      <div className="links">
        <a href="https://www.linkedin.com/in/mohamed-raslan1/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://github.com/mraslann" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <button onClick={onToggleDarkMode} className="dark-mode-toggle">
        Toggle Dark Mode
      </button>
    </header>
  );
}

export default Header;
