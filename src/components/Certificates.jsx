import { useState } from "react";
import { certificates } from "../constants";
import "./styles/Certificates.css";
import { FiExternalLink } from "react-icons/fi";

const getIconForCert = (title) => {
  const lowercaseTitle = title.toLowerCase();
  if (lowercaseTitle.includes("react")) {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
  }
  if (lowercaseTitle.includes("javascript") || lowercaseTitle.includes("js")) {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
  }
  if (lowercaseTitle.includes("node")) {
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
  }
  return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg";
};

const Certificates = () => {
  return (
    <div className="certificates-section section-container" id="certificates">
      <h2>
        My <span>Certifications</span>
      </h2>
      <p className="certificates-subtitle">
        Credentials verifying core capabilities, advanced frameworks, and technical excellence
      </p>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-icon-wrapper">
              <img 
                src={getIconForCert(cert.title)} 
                alt={cert.title} 
                className="certificate-icon"
                loading="lazy"
              />
            </div>
            
            <div className="certificate-info">
              <span className="certificate-date">{cert.date}</span>
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">Issuer: <span>{cert.issuer}</span></p>
            </div>

            <a 
              href={cert.credential_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="certificate-verify-btn"
              data-cursor="disable"
            >
              Verify Credential <FiExternalLink />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
