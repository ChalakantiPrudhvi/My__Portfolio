import React from "react";
import "./css/Certifications.css";
import ji from "./images/java.jpg";
import jp from "./images/java.pdf";
import pi from "./images/prajwal.jpg";
import pp from "./images/prajwal.pdf";
import ti from "./images/tcs.jpg";
import tp from "./images/tcs.pdf";

const certifications = [
  {
    name: "Hackathon Participation",
    organization: "Prajwal2K26",
    date: "2026",
    thumbnail:pi,
    pdf: pp,
  },
  {
    name: "TCS iON Certification",
    organization: "TCS iON",
    date: "15 jul 2025",
    thumbnail: ti,
    pdf: tp,
  },
  {
    name: "Java completion Certificate",
    organization: "Java Workshop",
    date: "10 Jul 2025",
    thumbnail: ji,
    pdf: jp,
  },
];

export default function Certifications() {
  return (
    <section className="certification-section">
      <h2 className="certification-title">📃Certifications</h2>
      <div className="certification-container">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-thumbnail">
              <img src={cert.thumbnail} alt={cert.name} />
              <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="view-button">
                View PDF
              </a>
            </div>
            <div className="cert-details">
              <h3>{cert.name}</h3>
              <p>{cert.organization}</p>
              <p>Issued: {cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}