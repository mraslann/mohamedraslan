import React from "react";

function Projects() {
  const projects = [
    {
      title: "Graduation Project - Hierarchical Violence Detection",
      link: "https://github.com/moharamfatema/graduation-project",
      description: "Achieved 65% accuracy using ViViT.",
    },
    {
      title: "Fruit Ninja Clone",
      link: "https://github.com/mraslann/Fruit-Ninja",
      description: "Developed using Java and OOP principles.",
    },
    {
      title: "Object Detection Comparison",
      link: "https://github.com/mraslann/Object-detection",
      description: "Analyzed models on COCO and Pascal datasets.",
    },
    {
      title: "Sentiment Analysis",
      link: "https://github.com/mraslann/IMDB-Movie-Review-Sentiment-Analysis",
      description: "Achieved 90% accuracy using BERT.",
    },
    {
      title: "Connect Four Game",
      link: "https://github.com/mraslann/Connect4",
      description: "Implemented optimal AI moves using Minimax algorithm.",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
            : {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
