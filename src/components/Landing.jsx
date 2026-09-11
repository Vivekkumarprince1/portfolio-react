import { useState, useEffect } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { Link } from "react-router-dom";

const ROLES = [
  "Software Development Engineer",
  "Full-Stack Web Architect",
  "MERN & Real-Time Specialist",
  "Distributed Systems Builder",
];

const Landing = () => {
  const fullName = config.developer.fullName || "VIVEK KUMAR";
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Typewriter effect for animated engineering roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
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
      <div className="hero-editorial-wrapper">
        {/* Main 2-Column Responsive Grid */}
        <div className="hero-editorial-grid">
          
          {/* LEFT COLUMN: Editorial Narrative, Typography & Actions */}
          <div className="hero-left-column">
            {/* Live Status Pill & Geo Tag */}
            <div className="hero-meta-strip">
              <div className="hero-status-pill">
                <span className="status-dot">
                  <span className="status-ping"></span>
                  <span className="status-core"></span>
                </span>
                <span className="status-text">SDE @ ConnectSphere • Available for Opportunities</span>
              </div>
              <div className="hero-geo-pill">
                <span>📍 INDIA • UTC+05:30</span>
              </div>
            </div>

            {/* Eyebrow Label */}
            <div className="hero-eyebrow-tag">
              <span className="eyebrow-code">// 01</span>
              <span className="eyebrow-divider"></span>
              <span className="eyebrow-label">FULL-STACK ENGINEER & ARCHITECT</span>
            </div>

            {/* Giant Architectural Headline */}
            <h1 className="hero-grand-name">
              {fullName.toUpperCase()}
            </h1>

            {/* Futuristic Terminal Role Switcher */}
            <div className="hero-terminal-role">
              <span className="terminal-prefix">&gt; specializing_in:</span>
              <span className="terminal-value">{displayedText}</span>
              <span className="terminal-cursor"></span>
            </div>

            {/* High-Impact Value Narrative */}
            <p className="hero-mission-pitch">
              Architecting high-throughput distributed backends, microservice pipelines, and immersive real-time digital experiences. Combining deep system design with pixel-perfect UI execution.
            </p>

            {/* Interactive Call-to-Action Group */}
            <div className="hero-cta-cluster">
              <Link to="/myworks" className="hero-btn-primary" data-cursor="disable">
                <span>Explore Projects</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              
              <Link to="/play" className="hero-btn-secondary" data-cursor="disable">
                <span>Play Chess ♟️</span>
              </Link>

              <a
                href="/resume.pdf"
                download="Vivek_Kumar_Resume.pdf"
                className="hero-btn-glass"
                data-cursor="disable"
                title="Download Resume"
              >
                <span>CV / Resume 📄</span>
              </a>
            </div>

            {/* Micro-Metrics Bar */}
            <div className="hero-metrics-deck">
              <div className="metric-box">
                <span className="metric-num">3+</span>
                <span className="metric-label">Years Exp</span>
              </div>
              <div className="metric-sep"></div>
              <div className="metric-box">
                <span className="metric-num">15+</span>
                <span className="metric-label">Production Apps</span>
              </div>
              <div className="metric-sep"></div>
              <div className="metric-box">
                <span className="metric-num">100%</span>
                <span className="metric-label">Code Craft</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Holographic Developer Console & Identity Card */}
          <div className="hero-right-column">
            <div className="developer-console-card">
              {/* Console Top Traffic Lights */}
              <div className="console-titlebar">
                <div className="console-dots">
                  <span className="console-dot dot-red"></span>
                  <span className="console-dot dot-yellow"></span>
                  <span className="console-dot dot-green"></span>
                </div>
                <span className="console-title">vivek@connectsphere:~$ whoami</span>
                <span className="console-live-tag">LIVE</span>
              </div>

              {/* Holographic Stage */}
              <div className="console-stage">
                <div className="stage-glow-aura"></div>
                <div className="stage-rotating-ring"></div>
                <div className="stage-dashed-orbit"></div>
                
                <div className="stage-satellite">
                  <span>✦</span>
                </div>

                {/* Main Glass Portrait Circle */}
                <div className="stage-portrait-frame">
                  {!imgError ? (
                    <img
                      src="/images/mypicnbg.png"
                      alt={fullName}
                      className="stage-portrait-img"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <span className="stage-portrait-text">VK</span>
                  )}
                  <div className="stage-glass-reflection"></div>
                </div>

                {/* Floating Micro-Widget 1: Core Stack (Top Right) */}
                <div className="stage-widget widget-stack">
                  <div className="widget-header">
                    <span className="widget-icon">⚡</span>
                    <span className="widget-label">Core Stack</span>
                  </div>
                  <div className="widget-chips">
                    <span>React</span>
                    <span>Node</span>
                    <span>MongoDB</span>
                    <span>WS</span>
                  </div>
                </div>

                {/* Floating Micro-Widget 2: Current Company (Bottom Left) */}
                <div className="stage-widget widget-role">
                  <span className="widget-icon">🚀</span>
                  <div className="widget-content">
                    <span className="widget-title">ConnectSphere</span>
                    <span className="widget-subtitle">Software Development Engineer</span>
                  </div>
                </div>

                {/* Floating Micro-Widget 3: Flagship Project (Bottom Right) */}
                <div className="stage-widget widget-project">
                  <span className="widget-icon">🏆</span>
                  <div className="widget-content">
                    <span className="widget-title">Vaani Platform</span>
                    <span className="widget-subtitle">Real-time SFU & Multilingual</span>
                  </div>
                </div>
              </div>

              {/* Console Status Footer */}
              <div className="console-footer">
                <div className="console-code-snippet">
                  <code>const dev = &#123; role: "Full-Stack SDE", passion: "Scalable Systems" &#125;;</code>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Minimalist Scroll Prompt */}
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
    </div>
  );
};

export default Landing;
