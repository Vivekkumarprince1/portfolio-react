import { useState } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { Link } from "react-router-dom";

const Landing = () => {
  const fullName = config.developer.fullName || "Vivek Kumar";
  const [imgError, setImgError] = useState(false);

  return (
    <div className="landing-section" id="landingDiv">
      <div className="hero-clean-wrapper">
        
        {/* Top Header Row: Identity Left, Poetic Motto Right */}
        <div className="hero-top-row">
          <div className="hero-author-block">
            <h1 className="hero-clean-name">{fullName.toUpperCase()}</h1>
            <p className="hero-clean-sub">Software Development Engineer • ConnectSphere</p>
          </div>

          <div className="hero-motto-block">
            <span>Systems that scale.</span>
            <span>Craft that speaks.</span>
          </div>
        </div>

        {/* Centerpiece: Airy Depth Stage (Backdrop Word + Cutout Portrait + Side Callout) */}
        <div className="hero-depth-center">
          {/* Giant subtle background typography */}
          <div className="hero-giant-word" aria-hidden="true">
            ENGINEER
          </div>

          {/* Clean Foreground Portrait */}
          <div className="hero-portrait-wrap">
            {!imgError ? (
              <img
                src="/images/vivek_cutout.png"
                alt={fullName}
                className="hero-clean-cutout"
                onError={(e) => {
                  if (e.target.src.includes("vivek_cutout.png")) {
                    e.target.src = "/images/mypicnbg.png";
                  } else {
                    setImgError(true);
                  }
                }}
              />
            ) : (
              <div className="hero-fallback-initials">VK</div>
            )}
            <div className="hero-bottom-blend"></div>
          </div>

          {/* Minimalist Role Callout on Right */}
          <div className="hero-clean-callout">
            <span className="callout-tag">FULL-STACK</span>
            <span className="callout-title">SOFTWARE ENGINEER</span>
          </div>
        </div>

        {/* Bottom Baseline: Clean Metadata & Elegant 1-line Manifesto */}
        <div className="hero-bottom-baseline">
          <div className="hero-social-pills">
            <a
              href="https://github.com/Vivekkumarprince1"
              target="_blank"
              rel="noopener noreferrer"
              className="clean-pill"
              data-cursor="disable"
            >
              <span>⌥ GitHub</span>
            </a>
            <a
              href="/resume.pdf"
              download="Vivek_Kumar_Resume.pdf"
              className="clean-pill"
              data-cursor="disable"
            >
              <span>📄 Resume</span>
            </a>
            <Link to="/play" className="clean-pill" data-cursor="disable">
              <span>♟️ Play Chess</span>
            </Link>
          </div>

          <p className="hero-clean-manifesto">
            "Between system scalability and user-centric craft lies the software I engineer. Architecting high-throughput distributed microservices and real-time collaboration engines."
          </p>
        </div>

      </div>
    </div>
  );
};

export default Landing;
