import React from "react";
import profile from "./images/image2.jpg";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img src={profile} alt="Profile" className="profile-img" />
        <div className="profile-div">
          <h1>
            Hi, I'm <span className="highlight">Prudhvi Chalakanti</span>
          </h1>
          <h3>MERN-Stack Developer | CSE'28 | Tech Explorer</h3>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <h1>connect</h1>
      </div>
      <div className="socials">
        <a
          href="https://github.com/ChalakantiPrudhvi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "40px", color: "#fff", margin: "5px" }}
        >
          {" "}
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/prudhvi-chalakanti-0b92b533b"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "5px", color: "#0A66C2", fontSize: "40px" }}
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/___p_r_u_d_h_v_i__?igsh=MTBqOXJheDV2YTA4bQ=="
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "5px", color: "#C13584", fontSize: "40px" }}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="mailto:chalakantiprudhvi1234@gmail.com"
          style={{ margin: "5px", color: "#e03737ff", fontSize: "40px" }}
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://wa.me/919949816798"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "5px", color: "#25D366", fontSize: "40px" }}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
