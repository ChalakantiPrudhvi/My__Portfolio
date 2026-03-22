import React from "react";
import "./css/Skills.css";

const skills = [
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React", icon: "fab fa-react" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Java", icon: "fab fa-java" },
  { name: "C", icon: "fas fa-code" },
  { name: "Git", icon: "fab fa-git-alt" },
];

export default function SkillBubbles() {
  return (
    <section className="skill-section">
      <h2 className="skill-title">
        {" "}
        <i className="fa-solid fa-screwdriver-wrench"></i> Skills & Tools
      </h2>

      {/* Skill Bubbles */}
      <div className="skill-container">
        {skills.map(({ name, icon }) => (
          <div key={name} className="skill-bubble">
            <i className={`${icon} skill-icon`} />
            <span className="skill-name">{name}</span>
          </div>
        ))}
      </div>

      {/* Detailed Skill Categories */}
      <div className="skill-categories">
        <div className="category">
          <h3>Programming Languages</h3>
          <ul>
            <li>C</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="category">
          <h3>Web Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="category">
          <h3>Core Concepts</h3>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>OOP</li>
          </ul>
        </div>

        <div className="category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Creativity</li>
            <li>Communication</li>
          </ul>
        </div>

        <div className="category">
          <h3>Databases & Tools</h3>
          <ul>
            <li>Git</li>
            <li>MongoDB</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
      <h2 className="skill-title">📈My Progress</h2>

      <div className="profiles">
        <a
          href="https://github.com/ChalakantiPrudhvi"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link github"
        >
          <i className="fab fa-github"></i> GitHub
        </a>

        <a
          href="https://leetcode.com/u/Prudhvi_1234/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link leetcode"
        >
          <i className="fas fa-code"></i> LeetCode
        </a>
      </div>
    </section>
  );
}
