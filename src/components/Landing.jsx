import "./styles/Landing.css";
import { config } from "../config";
import { Link } from "react-router-dom";

const Landing = () => {
  const fullName = config.developer.fullName || "VIVEK KUMAR";

  return (
    <div className="landing-section" id="landingDiv">
      {/* React Fluid Animation background */}
      <div className="absolute inset-0 z-0 opacity-85">
        <FluidAnimation
          style={{ width: "100%", height: "100%" }}
          config={{
            textureDownsample: 1,
            densityDissipation: 0.98,
            velocityDissipation: 0.98,
            pressureDissipation: 0.8,
            pressureIterations: 25,
            curl: 30,
            splatRadius: 0.005
          }}
        />
      </div>

      {/* Background ambient glowing spheres */}
      <div className="landing-bg-glow-1"></div>
      <div className="landing-bg-glow-2"></div>

      <div className="landing-hero-container">
        {/* Glowing 2D Initials Avatar */}
        <div className="hero-avatar-container">
          <div className="hero-avatar-glow"></div>
          <div className="hero-avatar-circle">
            <span className="hero-avatar-text">VK</span>
          </div>
          <div className="hero-avatar-subcircle"></div>
        </div>

        {/* Hero Typography */}
        <div className="hero-content">
          <h3 className="hero-greeting">HELLO! I'M</h3>
          <h1 className="hero-name">{fullName.toUpperCase()}</h1>
          <h2 className="hero-title">
            <span>Full-Stack Developer</span>
            <span className="title-separator">|</span>
            <span>Software Engineer</span>
          </h2>
          <p className="hero-description">
            I craft robust, scalable web applications, automation pipelines, and high-performance interactive experiences.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="hero-ctas">
          <Link to="/myworks" className="cta-btn primary-cta" data-cursor="disable">
            Explore My Work
          </Link>
          <Link to="/play" className="cta-btn secondary-cta" data-cursor="disable">
            Play Chess ♟️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
