import { useState, useEffect, useRef } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { Link } from "react-router-dom";

const ROLES = [
  "Software Development Engineer",
  "Full-Stack Web Architect",
  "Real-Time SFU & WebSockets",
  "Distributed Systems Builder",
];

const Landing = () => {
  const fullName = config.developer.fullName || "Vivek Kumar";
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Typewriter effect
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

  // Smooth 3D tilt on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-stage-wrapper">
        <div className="hero-cinematic-grid">
          
          {/* Left: Editorial Content & Hierarchy */}
          <div className="hero-editorial-col">
            <div className="hero-pill-badge">
              <span className="pill-dot">
                <span className="pill-dot-ping"></span>
                <span className="pill-dot-core"></span>
              </span>
              <span className="pill-label">Available for Select Opportunities</span>
              <span className="pill-divider">•</span>
              <span className="pill-sublabel">SDE @ ConnectSphere</span>
            </div>

            <div className="hero-eyebrow-line">
              <span className="eyebrow-accent">//</span>
              <span className="eyebrow-text">FULL-STACK ENGINEER & ARCHITECT</span>
            </div>

            <h1 className="hero-cinema-title">
              {fullName.toUpperCase()}
            </h1>

            <div className="hero-typewriter-strip">
              <span className="typewriter-tag">&gt; specializing_in:</span>
              <span className="typewriter-output">{displayedText}</span>
              <span className="typewriter-cursor"></span>
            </div>

            <p className="hero-pitch-paragraph">
              Architecting high-throughput distributed microservices, real-time collaboration platforms, and immersive digital web experiences with relentless focus on craft and performance.
            </p>

            {/* Core Tech Stack Cloud */}
            <div className="hero-tech-cloud">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">WebSockets</span>
              <span className="tech-tag">System Design</span>
            </div>

            {/* Action CTAs */}
            <div className="hero-cta-group">
              <Link to="/myworks" className="btn-cinema-primary" data-cursor="disable">
                <span>Explore Projects</span>
                <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>

              <a
                href="/resume.pdf"
                download="Vivek_Kumar_Resume.pdf"
                className="btn-cinema-secondary"
                data-cursor="disable"
              >
                <span>CV / Resume 📄</span>
              </a>

              <Link to="/play" className="btn-cinema-ghost" data-cursor="disable">
                <span>Play Chess ♟️</span>
              </Link>
            </div>
          </div>

          {/* Right: Modern 3D Glass Portrait Portal */}
          <div className="hero-portrait-col">
            <div 
              className="portrait-portal-card"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              }}
            >
              {/* Ambient Radiant Glow Aura */}
              <div className="portal-glow-aura"></div>
              
              {/* Glass Arch Portal */}
              <div className="portal-frame">
                <div className="portal-backdrop-glow"></div>
                
                {/* Vivek's Real Transparent Cutout */}
                {!imgError ? (
                  <img
                    src="/images/mypicnbg.png"
                    alt={fullName}
                    className="portal-cutout-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="portal-fallback-monogram">VK</div>
                )}

                {/* Subtle bottom fade to blend with card */}
                <div className="portal-bottom-fade"></div>
                
                {/* Floating Glass Chips */}
                <div className="portal-floating-tag tag-top">
                  <span className="tag-icon">🚀</span>
                  <span className="tag-text">ConnectSphere SDE</span>
                </div>

                <div className="portal-floating-tag tag-bottom">
                  <span className="tag-icon">⚡</span>
                  <span className="tag-text">3+ Yrs Exp • 15+ Apps</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Minimalist Scroll Cue */}
        <div 
          className="hero-scroll-cue" 
          onClick={scrollToAbout} 
          role="button" 
          tabIndex="0" 
          aria-label="Scroll to About section"
        >
          <span className="cue-pill">
            <span className="cue-dot"></span>
          </span>
          <span className="cue-text">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
