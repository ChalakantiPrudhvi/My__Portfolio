import React from "react";
import "./css/About.css";
import profile from "./images/image2.jpg";
import resume from "./images/Prudhvi'sResume.pdf"

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={profile} alt="Profile" />
               <div className="resume-buttons">
            <a 
              href={resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn view-btn"
            >
              View Resume
            </a>

            <a 
              href={resume} 
              download 
              className="btn download-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          <h2>About Me</h2>
          
          <p>
            Hi, I’m <strong> Chalakanti Prudhvi</strong>, a passionate 
            <strong> Web Developer </strong> who enjoys creating clean, modern, 
            and user-friendly digital experiences.
          </p>

          <p>
            My journey into tech started with curiosity — exploring how websites 
            work — and quickly turned into a strong interest in building them myself. 
            Since then, I’ve been continuously learning and improving my skills in 
            <strong> MERN stack </strong>.
          </p>

          <h3>What Drives Me</h3>
          <p>
            I love solving problems and turning ideas into real-world projects. 
            Every project is an opportunity to learn and grow.
          </p>

          <h3>My Goal</h3>
          <p>
            To grow as a developer and build impactful projects that make people’s 
            lives easier.
          </p>

          <h3>Let’s Connect</h3>
          <p>
            I’m always open to opportunities and collaborations. Let’s build something amazing!
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;