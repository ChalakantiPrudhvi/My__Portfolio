import React from "react";
import "./css/Contact.css";
import profile from "./images/image2.jpg";
const Contact = () => {
  return (
    <div className="container">
      <h2>GET IN TOUCH</h2>

      <div className="contact-wrapper">
        {/* Profile Card */}
        <div className="card profile">
          <img src={profile} alt="profile" />
          <h3>Chalakanti Prudhvi</h3>
          <p>Web Developer</p>
          <p>📍 Kakinada, India</p>
        </div>
        <div className="card info">
          <p>
            <i className="fas fa-envelope icon email"></i>
            <a href="mailto:chalakantiprudhvi1234@gmail.com">
              chalakantiprudhvi1234@gmail.com
            </a>
          </p>

          <p>
            <i className="fas fa-phone icon phone"></i>
            <a href="tel:+919949816798">+91 9949816798</a>
          </p>

          <p>
            <i className="fab fa-instagram icon instagram"></i>
            <a
              href="https://www.instagram.com/___p_r_u_d_h_v_i__?igsh=MTBqOXJheDV2YTA4bQ=="
              target="_blank"
              rel="noreferrer"
            >
              instagram.com/___p_r_u_d_h_v_i__
            </a>
          </p>

          <p>
            <i className="fab fa-linkedin icon linkedin"></i>
            <a
              href="https://www.linkedin.com/in/prudhvi-chalakanti-0b92b533b"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/prudhvi-chalakanti-0b92b533b
            </a>
          </p>

          <p>
            <i className="fab fa-github icon github"></i>
            <a
              href="https://github.com/ChalakantiPrudhvi"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ChalakantiPrudhvi
            </a>
          </p>

          <p>
            <i className="fas fa-code icon leetcode"></i>
            <a
              href="https://leetcode.com/u/Prudhvi_1234/"
              target="_blank"
              rel="noreferrer"
            >
              leetcode.com/u/Prudhvi_1234
            </a>
          </p>

          <p>
            <i className="fab fa-whatsapp icon whatsapp"></i>
            <a
              href="https://wa.me/919949816798"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
