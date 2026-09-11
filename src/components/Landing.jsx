import { useState } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { Link } from "react-router-dom";

const PORTRAITS = [
  {
    id: "suit-portrait",
    label: "Executive",
    src: "/images/vivek_suit_portrait.jpg",
    type: "framed",
  },
  {
    id: "suit-medium",
    label: "Navy Suit",
    src: "/images/vivek_suit_medium.jpg",
    type: "framed",
  },
  {
    id: "cutout",
    label: "Cutout",
    src: "/images/mypicnbg.png",
    type: "cutout",
  },
  {
    id: "suit-full",
    label: "Full Body",
    src: "/images/vivek_suit_full.jpg",
    type: "framed",
  },
];

const Landing = () => {
  const fullName = config.developer.fullName || "Vivek Kumar";
  const [activePhoto, setActivePhoto] = useState(PORTRAITS[0]);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="landing-section" id="landingDiv">
      <div className="hero-reference-container">
        
        {/* Top Capsule Ticker Bar */}
        <div className="hero-top-capsule">
          <span>FULL-STACK ARCHITECTURE</span>
          <span className="capsule-dot">•</span>
          <span>DISTRIBUTED SYSTEMS</span>
          <span className="capsule-dot">•</span>
          <span>REAL-TIME ENGINES</span>
          <span className="capsule-dot">•</span>
          <span>CLOUD MICROSERVICES</span>
          <span className="capsule-dot">•</span>
          <span>SYSTEM DESIGN</span>
        </div>

        {/* Top Header Row: Name on Left, Motto on Right */}
        <div className="hero-header-row">
          <div className="hero-identity-box">
            <h2 className="hero-author-name">{fullName.toUpperCase()}</h2>
            <p className="hero-author-sub">Software Development Engineer • ConnectSphere</p>
          </div>

          <div className="hero-motto-box">
            <p className="motto-line">Systems that scale.</p>
            <p className="motto-line">Craft that speaks.</p>
          </div>
        </div>

        {/* Centerpiece: Depth Stage (Backdrop Word + Foreground Portrait + Callout) */}
        <div className="hero-depth-stage">
          {/* Layer 1: Giant Architectural Backdrop Word */}
          <div className="hero-backdrop-word" aria-hidden="true">
            ENGINEER
          </div>

          {/* Layer 2: Center Portrait (Framed Arch or Cutout) */}
          <div className={`hero-portrait-frame ${activePhoto.type === "framed" ? "frame-arched" : "frame-cutout"}`}>
            {!imgError ? (
              <img
                src={activePhoto.src}
                alt={fullName}
                className={activePhoto.type === "framed" ? "hero-framed-img" : "hero-natural-cutout"}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="hero-fallback-monogram">VK</div>
            )}
            <div className="hero-portrait-fade"></div>
          </div>

          {/* Layer 3: Bold Role Callout Accent (Right Side) */}
          <div className="hero-role-callout">
            <span className="callout-sub">FULL-STACK</span>
            <span className="callout-main">SOFTWARE ENGINEER</span>
          </div>

          {/* Interactive Photo Switcher Pills */}
          <div className="hero-photo-switcher">
            {PORTRAITS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`photo-switch-btn ${activePhoto.id === p.id ? "active-photo" : ""}`}
                onClick={() => {
                  setImgError(false);
                  setActivePhoto(p);
                }}
                data-cursor="disable"
              >
                <span className="switch-dot"></span>
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Editorial Strip */}
        <div className="hero-bottom-deck">
          {/* Social Badges */}
          <div className="hero-meta-links">
            <a
              href="https://github.com/Vivekkumarprince1"
              target="_blank"
              rel="noopener noreferrer"
              className="meta-badge"
              data-cursor="disable"
            >
              <span className="badge-icon">⌥</span>
              <span className="badge-text">GitHub</span>
            </a>

            <span className="meta-badge">
              <span className="badge-icon">🚀</span>
              <span className="badge-text">ConnectSphere SDE</span>
            </span>

            <Link to="/play" className="meta-badge chess-badge" data-cursor="disable">
              <span className="badge-icon">♟️</span>
              <span className="badge-text">Play Chess</span>
            </Link>
          </div>

          {/* Editorial Manifesto Quote */}
          <p className="hero-manifesto-text">
            "Between system scalability and user-centric craft lies the software I engineer. From designing distributed microservices to deploying ultra-low latency real-time platforms, my focus is on performance, resilient architecture, and relentless engineering execution."
          </p>

          {/* Action CTAs */}
          <div className="hero-editorial-actions">
            <Link to="/myworks" className="btn-editorial-primary" data-cursor="disable">
              <span>Explore Projects</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="btn-arrow">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>

            <a
              href="/resume.pdf"
              download="Vivek_Kumar_Resume.pdf"
              className="btn-editorial-secondary"
              data-cursor="disable"
            >
              <span>CV / Resume 📄</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landing;
