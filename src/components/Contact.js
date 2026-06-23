import React from "react";
import { Mail, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="card text-center max-w-2xl mx-auto py-12 px-8">
        <Send size={32} className="text-accent mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-50 mb-3">
          Let's Talk
        </h2>
        <p className="text-slate-400 text-base leading-relaxed mb-8">
          I'm always happy to chat about engineering challenges, new opportunities,
          or just interesting problems. If something here resonated — drop me a line.
        </p>
        <a
          href="mailto:raslanmohamed.mr@gmail.com"
          className="inline-flex items-center gap-2 bg-accent text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-400 transition-colors duration-200"
        >
          <Mail size={18} />
          raslanmohamed.mr@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
