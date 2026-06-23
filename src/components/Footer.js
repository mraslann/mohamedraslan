import React from "react";

function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="section-container py-8">
        <p className="text-slate-500 text-sm text-center mb-2">
          &copy; 2026 Mohamed Raslan
        </p>
        <p className="text-slate-600 text-xs text-center">
          Under the hood: React &amp; Tailwind CSS. Hosted on GitHub Pages.
          Codebase is{" "}
          <a
            href="https://github.com/mraslann/mohamedraslan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent underline transition-colors duration-200"
          >
            open-source
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
