import { useState, useEffect } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { Link } from "react-router-dom";

const ROLES = [
  "Distributed Backend Systems",
  "Full-Stack Web Architecture",
  "Real-Time SFU & WebSockets",
  "High-Throughput Microservices",
];

const Landing = () => {
  const fullName = config.developer.fullName || "Vivek Kumar";
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 60);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2400);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        
        {/* Sleek Vercel / Linear status badge */}
        <div className="hero-status-tag">
          <span className="status-indicator">
            <span className="status-pulse"></span>
            <span className="status-solid"></span>
          </span>
          <span className="status-label">
            Software Development Engineer <span className="status-company">@ ConnectSphere</span>
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="hero-main-title">
          Engineering scalable systems, <br />
          <span className="hero-title-accent">crafted with precision.</span>
        </h1>

        {/* Dynamic Typewriter Specialty Identity */}
        <div className="hero-specialty-line">
          <span className="specialty-label">Specializing in</span>
          <span className="specialty-typed">
            {displayedText}
            <span className="specialty-caret"></span>
          </span>
        </div>

        {/* Focused, High-Signal Mission Pitch */}
        <p className="hero-description-text">
          I'm <strong className="hero-name-token">{fullName}</strong>. I design and build resilient backend microservices, real-time collaboration platforms, and immersive web experiences.
        </p>

        {/* Minimalist CTA Row */}
        <div className="hero-button-row">
          <Link to="/myworks" className="btn-hero-primary" data-cursor="disable">
            <span>Explore Projects</span>
            <svg className="btn-arrow-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor">
              <path d="M6 3.5L10.5 8L6 12.5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <a
            href="/resume.pdf"
            download="Vivek_Kumar_Resume.pdf"
            className="btn-hero-secondary"
            data-cursor="disable"
          >
            <span>Resume</span>
            <svg className="btn-sub-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3.5 12.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V12.5M8 2.5V10.5M8 10.5L5.5 8M8 10.5L10.5 8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <Link to="/play" className="btn-hero-ghost" data-cursor="disable">
            <span>Play Chess ♟️</span>
          </Link>
        </div>

        {/* Minimalist Scroll Cue */}
        <div 
          className="hero-minimal-scroll" 
          onClick={scrollToAbout} 
          role="button" 
          tabIndex="0" 
          aria-label="Scroll down to About section"
        >
          <span className="scroll-pill">
            <span className="scroll-pip"></span>
          </span>
          <span className="scroll-caption">EXPLORE</span>
        </div>

      </div>
    </div>
  );
};

export default Landing;
