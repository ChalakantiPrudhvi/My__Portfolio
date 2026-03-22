import React from "react";
import "./css/Project.css";
import pic from "./images/caluc.jpg";
import flipkart from "./images/flipkart.jpg";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-section">
        <div className="title">💻 My Projects</div>

        <div className="projects">
          <div className="project-row">
            <div className="project-left">
              <img src={pic} alt="Calculator" />
            </div>

            <div className="project-right">
              <h3>
                <i className="fa-solid fa-calculator"></i> Simple Calculator
              </h3>

              <p className="desc">
                A responsive calculator web application that performs basic
                arithmetic operations with a clean UI and smooth user
                experience.
              </p>

              <div className="lang">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="btn">
                <a
                  href="https://github.com/ChalakantiPrudhvi/Calculator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="code-btn">
                    <i className="fab fa-github"></i> View Code
                  </button>
                </a>

                <a
                  href="https://68ec9e59292fdc0008e7afef--calculator-554.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="live-btn">📍 Live Demo</button>
                </a>
              </div>
            </div>
          </div>

          <div className="project-row">
            <div className="project-left">
              <img src={flipkart} alt="Flipkart" />
            </div>

            <div className="project-right">
              <h3>
                <i className="fa-solid fa-cart-shopping"></i> Flipkart Clone
              </h3>
              <p className="desc">
                A Flipkart-inspired e-commerce frontend built using React,
                featuring product listings, navigation, and a modern UI similar
                to the original platform.
              </p>
              <div className="lang">
                <span>React</span>
                <span>JavaScript</span>
                <span>Frontend</span>
              </div>

              <div className="btn">
                <a
                  href="https://github.com/ChalakantiPrudhvi/Flipkart-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="code-btn">
                    <i className="fab fa-github"></i> View Code
                  </button>
                </a>

                <a
                  href="https://chalakantiprudhvi.github.io/Flipkart-Clone/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="live-btn">📍 Live Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
