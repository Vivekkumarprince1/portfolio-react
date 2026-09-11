import { useState, useEffect } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { Link } from "react-router-dom";

const ROLES = [
  "Software Development Engineer",
  "Full-Stack Web Architect",
  "MERN & Real-Time Specialist",
  "Creative Technologist",
];

const Landing = () => {
  const fullName = config.developer.fullName || "VIVEK KUMAR";
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Typewriter effect for animated roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 70);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 35);
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
      <div className="landing-hero-container">
        {/* Availability Badge */}
        <div className="hero-status-pill">
          <span className="status-dot">
            <span className="status-ping"></span>
            <span className="status-core"></span>
          </span>
          <span className="status-text">Available for Opportunities</span>
          <span className="status-sparkle">✦</span>
        </div>

        {/* Central Futuristic Holographic Avatar */}
        <div className="hero-avatar-container">
          <div className="hero-avatar-glow"></div>
          <div className="hero-avatar-ring"></div>
          <div className="hero-avatar-subcircle"></div>
          
          <div className="hero-orbit-satellite">
            <span className="satellite-sparkle">✦</span>
          </div>

          <div className="hero-avatar-circle">
            {!imgError ? (
              <img
                src="/images/mypicnbg.png"
                alt={fullName}
                className="hero-avatar-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="hero-avatar-text">VK</span>
            )}
            <div className="avatar-glass-glare"></div>
          </div>

          {/* Floating Micro-Badges */}
          <div className="hero-floating-badge badge-left">
            <span className="badge-icon">⚡</span>
            <span className="badge-text">Full-Stack SDE</span>
          </div>
          <div className="hero-floating-badge badge-right">
            <span className="badge-icon">🚀</span>
            <span className="badge-text">ConnectSphere</span>
          </div>
        </div>

        {/* Hero Content & Typography */}
        <div className="hero-content">
          <div className="hero-greeting-wrapper">
            <span className="greeting-line"></span>
            <h3 className="hero-greeting">HELLO WORLD, I'M</h3>
            <span className="greeting-line"></span>
          </div>

          <h1 className="hero-name">{fullName.toUpperCase()}</h1>

          {/* Dynamic Typewriter Role */}
          <div className="hero-typewriter-container">
            <span className="typewriter-prefix">Crafting as </span>
            <span className="typewriter-text">{displayedText}</span>
            <span className="typewriter-cursor"></span>
          </div>

          <p className="hero-description">
            Architecting robust, scalable web platforms, distributed microservices, and ultra-responsive interactive experiences with modern software engineering.
          </p>
        </div>

        {/* Micro-Stats Glass Row */}
        <div className="hero-stats-row">
          <div className="hero-stat-card">
            <span className="stat-value">3+</span>
            <span className="stat-label">Years Exp</span>
          </div>
          <div className="stat-divider"></div>
          <div className="hero-stat-card">
            <span className="stat-value">15+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider"></div>
          <div className="hero-stat-card">
            <span className="stat-value">SDE</span>
            <span className="stat-label">ConnectSphere</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="hero-ctas">
          <Link to="/myworks" className="cta-btn primary-cta" data-cursor="disable">
            <span>Explore My Work</span>
            <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link to="/play" className="cta-btn secondary-cta" data-cursor="disable">
            <span>Play Chess ♟️</span>
          </Link>
        </div>
      </div>

      {/* Modern Scroll Down Indicator */}
      <div className="hero-scroll-indicator" onClick={scrollToAbout} role="button" tabIndex="0">
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <svg className="scroll-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  );
};

export default Landing;
