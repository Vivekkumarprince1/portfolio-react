import { useState, useEffect } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCopy,
  FiCheck,
  FiTerminal,
  FiCpu,
  FiActivity,
  FiZap,
  FiChevronDown
} from "react-icons/fi";

const KINETIC_ROLES = [
  "SOFTWARE DEVELOPMENT ENGINEER",
  "DISTRIBUTED SYSTEMS ARCHITECT",
  "REAL-TIME WEBSOCKET ENGINEER",
  "CREATIVE FULL-STACK CRAFTSMAN"
];

const TELEMETRY_MODES = {
  stack: {
    label: "TECH ARCHITECTURE",
    items: [
      { name: "LiveKit SFU & WebSockets", tag: "Audio / Video / Real-time Pub-Sub", status: "Active" },
      { name: "Node.js & Express Microservices", tag: "Distributed REST & Low Latency", status: "Active" },
      { name: "React 18 Concurrent & WebGL", tag: "Interactive 60fps Client", status: "Active" },
      { name: "MongoDB & Redis Pub/Sub", tag: "Optimized High-Throughput Caching", status: "Active" }
    ]
  },
  perf: {
    label: "SYSTEM BENCHMARKS",
    items: [
      { name: "WebSocket Message Latency", tag: "< 35ms Global Target", status: "Optimal" },
      { name: "Client Frame Rate", tag: "60 FPS Constant V-Sync", status: "Smooth" },
      { name: "Microservice Uptime", tag: "99.9% Resilient Fault-Tolerance", status: "Verified" },
      { name: "Audio-Speech Translation", tag: "Azure Cognitive SFU Stream", status: "Online" }
    ]
  },
  focus: {
    label: "ENGINEERING FOCUS",
    items: [
      { name: "High-Throughput Distributed Microservices", tag: "Horizontal Scale & Resilient APIs", status: "Core" },
      { name: "Bi-directional Real-Time Systems", tag: "Socket.IO & WebRTC SFU Audio/Video", status: "Core" },
      { name: "Database Schema Optimization", tag: "Indexing, Caching, and Query Tuning", status: "Core" },
      { name: "Aesthetic UI & Motion Engineering", tag: "GSAP, WebGL Fluid, Canvas Physics", status: "Core" }
    ]
  }
};

const Landing = () => {
  const fullName = config.developer.fullName || "Vivek Kumar";
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [telemetryKey, setTelemetryKey] = useState("stack");
  const [ping, setPing] = useState(14);

  // Cycle kinetic roles smoothly
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % KINETIC_ROLES.length);
    }, 3200);
    return () => clearInterval(roleTimer);
  }, []);

  // Subtle real-time ping simulation
  useEffect(() => {
    const pingTimer = setInterval(() => {
      setPing(Math.floor(12 + Math.random() * 6));
    }, 2800);
    return () => clearInterval(pingTimer);
  }, []);

  // Smooth scroll
  const handleScrollToWork = (e) => {
    e.preventDefault();
    const workElem = document.getElementById("work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Instant 1-click clipboard copy
  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(config.contact.email || "vivekkumarprince@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const activeTelemetry = TELEMETRY_MODES[telemetryKey];

  return (
    <section className="landing-section" id="landingDiv">
      <div className="awwwards-hero-container">
        
        {/* ========================================================
            1. TOP HORIZON TRACKER & TELEMETRY RIBBON
            ======================================================== */}
        <div className="hero-horizon-ribbon">
          <div className="horizon-left">
            <span className="horizon-beacon">
              <span className="beacon-ping"></span>
              <span className="beacon-core"></span>
            </span>
            <span className="horizon-mono-text">
              SYS_STATUS: <span className="text-emerald">OPERATIONAL</span> // SDE @ CONNECTSPHERE
            </span>
          </div>

          <div className="horizon-right">
            <span className="horizon-mono-coord">
              28°36&apos;N 77°12&apos;E // INDIA // <span className="text-lavender">AVAILABLE GLOBALLY</span>
            </span>
          </div>
        </div>

        {/* ========================================================
            2. OVERSIZED ARCHITECTURAL TYPOGRAPHIC CENTERPIECE
            ======================================================== */}
        <div className="hero-typographic-stage">
          
          {/* Monospace Discipline Pill */}
          <div className="hero-discipline-pill">
            <span className="discipline-index">// 01</span>
            <span className="discipline-label">DISTRIBUTED SYSTEMS & REAL-TIME DIGITAL CRAFT</span>
          </div>

          {/* Massive Display Title */}
          <h1 className="hero-display-title">
            <span className="title-block title-block-1">ARCHITECTING</span>
            <span className="title-block title-block-2">
              <span className="gradient-glow-word">DISTRIBUTED</span>
            </span>
            <span className="title-block title-block-3">& REAL-TIME SYSTEMS.</span>
          </h1>

          {/* Kinetic Dynamic Role Cycler */}
          <div className="hero-kinetic-cycler">
            <span className="cycler-prefix">SPECIALIZATION:</span>
            <div className="cycler-slot">
              <span key={roleIndex} className="cycler-text">
                {KINETIC_ROLES[roleIndex]}
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================
            3. LAYERED GLASS TELEMETRY CONSOLE (Mid Stage)
            ======================================================== */}
        <div className="hero-telemetry-stage">
          {/* Ambient Cyber-Violet Aura */}
          <div className="hero-aura-glow"></div>

          <div className="telemetry-glass-console">
            {/* Console Control Bar */}
            <div className="console-header-bar">
              <div className="console-title-wrap">
                <FiTerminal className="console-icon text-lavender" />
                <span className="console-title">SYSTEM_TELEMETRY.V3</span>
                <span className="console-ping-pill">
                  <span className="ping-dot"></span>
                  <span>{ping}ms PING</span>
                </span>
              </div>

              {/* Mode Toggles */}
              <div className="console-mode-toggles">
                <button
                  type="button"
                  onClick={() => setTelemetryKey("stack")}
                  className={`toggle-tab ${telemetryKey === "stack" ? "active-tab" : ""}`}
                  data-cursor="disable"
                >
                  <FiCpu className="tab-icon" />
                  <span>Architecture</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTelemetryKey("perf")}
                  className={`toggle-tab ${telemetryKey === "perf" ? "active-tab" : ""}`}
                  data-cursor="disable"
                >
                  <FiZap className="tab-icon" />
                  <span>Benchmarks</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTelemetryKey("focus")}
                  className={`toggle-tab ${telemetryKey === "focus" ? "active-tab" : ""}`}
                  data-cursor="disable"
                >
                  <FiActivity className="tab-icon" />
                  <span>Discipline</span>
                </button>
              </div>
            </div>

            {/* Console Architecture Matrix Grid */}
            <div className="console-matrix-grid">
              {activeTelemetry.items.map((item, idx) => (
                <div className="matrix-card" key={idx}>
                  <div className="matrix-card-header">
                    <span className="matrix-index">0{idx + 1}</span>
                    <span className="matrix-badge">{item.status}</span>
                  </div>
                  <h4 className="matrix-name">{item.name}</h4>
                  <p className="matrix-tag">{item.tag}</p>
                </div>
              ))}
            </div>

            {/* Console Bottom Telemetry Status Strip */}
            <div className="console-footer-strip">
              <span className="footer-chip">ENGINEER: <strong className="text-white">{fullName.toUpperCase()}</strong></span>
              <span className="footer-chip">CORE: <strong className="text-lavender">REACT 18 • NODE • WEBSOCKETS • SFU</strong></span>
              <span className="footer-chip">SECURITY: <strong className="text-emerald">JWT & HTTPS</strong></span>
            </div>
          </div>
        </div>

        {/* ========================================================
            4. BOTTOM EDITORIAL ACTION DECK & MANIFESTO
            ======================================================== */}
        <div className="hero-bottom-deck">
          {/* Left: Manifesto Statement */}
          <div className="deck-manifesto-block">
            <p className="deck-manifesto-text">
              &ldquo;Between distributed backend scalability and intuitive frontend craft lies the software
              I engineer. Focused on <span className="highlight-text">high-throughput microservices</span>,{" "}
              <span className="highlight-text">real-time collaboration platforms</span>, and resilient digital architectures.&rdquo;
            </p>
          </div>

          {/* Right: Action Buttons */}
          <div className="deck-actions-block">
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="action-btn-primary"
              data-cursor="disable"
            >
              <span>Explore Selected Works</span>
              <FiArrowUpRight className="btn-arrow-diag" />
            </a>

            <button
              onClick={handleCopyEmail}
              className={`action-btn-secondary ${copied ? "btn-copied" : ""}`}
              data-cursor="disable"
              type="button"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <FiCheck className="text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy />
                  <span>Copy Contact</span>
                </>
              )}
            </button>

            <Link to="/play" className="action-btn-chess" data-cursor="disable">
              <span>♟ Play Chess</span>
            </Link>
          </div>
        </div>

        {/* Subtle Bottom Scroll Indicator */}
        <div className="hero-scroll-beacon">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="scroll-beacon-link"
            data-cursor="disable"
            aria-label="Scroll to About section"
          >
            <span className="beacon-line"></span>
            <FiChevronDown className="beacon-arrow" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Landing;

