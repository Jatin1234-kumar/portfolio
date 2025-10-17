import React from "react";
import skills from "../data/skills";
const Skills = () => (
  <section id="skills" className="section skills-section">
    <h2>Skills</h2>
    <div className="skills-list">
      {skills.map((skill, idx) => (
        <div className="skill-bar-container" key={idx}>
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar-bg">
            <div
              className="skill-bar-fill"
              style={{
                width: `${skill.level}%`,
              }}
            ></div>
          </div>
          <span className="skill-level">{skill.level}%</span>
        </div>
      ))}
    </div>
  </section>
);
export default Skills;
