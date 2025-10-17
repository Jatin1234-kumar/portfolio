import React from "react";
import projects from "../data/projects";

const Projects = () => (
  <section id="projects" className="section projects-section">
    <h2>Projects</h2>
    <div className="project-grid">
      {projects.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <div className="project-stack">
            {proj.stack.map((tech, i) => (
              <span className="stack-tag" key={i}>
                {tech}
              </span>
            ))}
          </div>
          {proj.link && (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;