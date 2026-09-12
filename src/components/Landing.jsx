import { useState, useRef } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { FiCopy, FiCheck, FiArrowRight, FiActivity, FiLayers, FiCpu } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const Landing = () => {
  const fullName = config.developer.fullName || "Vivek Kumar";
  const [copied, setCopied] = useState(false);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Handle smooth scroll
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Copy email with feedback
  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(config.contact.email || "vivekkumarprince@email.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  // 3D Perspective Tilt on Mouse Move
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section className="landing-section" id="landingDiv">
      <div className="hero-split-container">
        
        {/* ========================================================
            LEFT COLUMN: Narrative, Command Bar, Typography & Stats
            ======================================================== */}
        <div className="hero-left-col">
          
          {/* Status & Availability Pill */}
          <div className="hero-status-ribbon">
            <div className="status-pill-badge">
              <span className="status-beacon">
                <span className="beacon-ping"></span>
                <span className="beacon-core"></span>
              </span>
              <span className="status-text-company">SDE @ ConnectSphere</span>
              <span className="status-divider">•</span>
              <span className="status-text-avail">Available for High-Impact Roles</span>
            </div>
          </div>

          {/* Kinetic Display Headline */}
          <div className="hero-headline-wrap">
            <div className="hero-badge-architect">
              <HiSparkles className="badge-sparkle-icon" />
              <span>Full-Stack & Systems Engineer</span>
            </div>
            
            <h1 className="hero-main-title">
              <span className="title-row title-row-1">Engineering Scalable</span>
              <span className="title-row title-row-2">
                <span className="gradient-highlight">Distributed Systems</span>
              </span>
              <span className="title-row title-row-3">& Real-Time Craft.</span>
            </h1>
          </div>

          {/* Value Narrative Manifesto */}
          <p className="hero-lead-narrative">
            Hi, I&apos;m <span className="text-bold-white">{fullName}</span>. I architect high-throughput
            microservices, low-latency WebSocket communication engines, and intuitive full-stack web platforms
            that balance distributed system reliability with uncompromising frontend performance.
          </p>

          {/* Tech Specialization Tags */}
          <div className="hero-specialization-tags">
            <span className="spec-tag"><FiLayers className="spec-icon" /> Distributed Microservices</span>
            <span className="spec-tag"><FiActivity className="spec-icon" /> WebSockets & SFU (LiveKit)</span>
            <span className="spec-tag"><FiCpu className="spec-icon" /> React 18 & Node.js</span>
          </div>

          {/* Action Row */}
          <div className="hero-action-row">
            <a
              href="#work"
              onClick={(e) => handleScrollTo(e, "work")}
              className="hero-btn-primary"
              data-cursor="disable"
            >
              <span>Explore Selected Works</span>
              <FiArrowRight className="btn-arrow-icon" />
            </a>

            <button
              onClick={handleCopyEmail}
              className={`hero-btn-secondary ${copied ? "btn-copied" : ""}`}
              data-cursor="disable"
              type="button"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <FiCheck className="btn-check-icon text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy className="btn-copy-icon" />
                  <span>Copy Contact</span>
                </>
              )}
            </button>
          </div>

          {/* Engineering Metrics Strip */}
          <div className="hero-metrics-strip">
            <div className="metric-item">
              <span className="metric-number">99.9<span className="metric-unit">%</span></span>
              <span className="metric-label">System Reliability</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">&lt;50<span className="metric-unit">ms</span></span>
              <span className="metric-label">WebSocket Latency</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">4<span className="metric-unit">+</span></span>
              <span className="metric-label">Production Platforms</span>
            </div>
          </div>

        </div>

        {/* ========================================================
            RIGHT COLUMN: 3D Perspective Glass Card & Tech Satellites
            ======================================================== */}
        <div className="hero-right-col">
          <div
            className="hero-card-stage"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
          >
            {/* Ambient Background Aura behind the card */}
            <div className="card-stage-glow"></div>

            {/* Satellite Badge 1: Top-Right (WebSockets / SFU) */}
            <div className="floating-satellite satellite-top-right">
              <div className="satellite-dot pulse-amber"></div>
              <div className="satellite-content">
                <span className="satellite-title">LiveKit SFU</span>
                <span className="satellite-sub">Real-Time Video/Audio</span>
              </div>
            </div>

            {/* Satellite Badge 2: Bottom-Left (Microservices) */}
            <div className="floating-satellite satellite-bottom-left">
              <div className="satellite-dot pulse-emerald"></div>
              <div className="satellite-content">
                <span className="satellite-title">Node & Express</span>
                <span className="satellite-sub">Distributed APIs</span>
              </div>
            </div>

            {/* Satellite Badge 3: Center-Left (React / Client) */}
            <div className="floating-satellite satellite-center-left">
              <div className="satellite-dot pulse-cyan"></div>
              <div className="satellite-content">
                <span className="satellite-title">React 18</span>
                <span className="satellite-sub">Concurrent UI</span>
              </div>
            </div>

            {/* Main Holographic Glass Card */}
            <div className="hero-hologram-card">
              {/* Card Header Bar */}
              <div className="card-header-bar">
                <div className="card-window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="card-window-title">engineer.profile.tsx</div>
                <div className="card-window-status">LIVE</div>
              </div>

              {/* Portrait Image Frame */}
              <div className="card-portrait-wrapper">
                <img
                  src="/images/vivek_suit_portrait.jpg"
                  alt={fullName}
                  className="card-portrait-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/vivek_profile.jpg";
                  }}
                />
                <div className="card-portrait-overlay"></div>
              </div>

              {/* Card Footer Readout / Telemetry */}
              <div className="card-telemetry-footer">
                <div className="telemetry-info">
                  <span className="telemetry-name">{fullName}</span>
                  <span className="telemetry-role">Software Development Engineer</span>
                </div>
                <div className="telemetry-tags">
                  <span className="telemetry-pill">Cloud / Microservices</span>
                  <span className="telemetry-pill">India (UTC+5:30)</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Landing;
