import { useEffect, useRef } from "react";
import "./styles/Landing.css";
import { config } from "../config";
import { Link } from "react-router-dom";
import FluidAnimation from "react-fluid-animation/dist/index.js";

const hslToRgb = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return [f(0), f(8), f(4)];
};

const Landing = () => {
  const fullName = config.developer.fullName || "VIVEK KUMAR";
  const fluidRef = useRef(null);
  const hueRef = useRef(0);

  const handleMouseMove = (e) => {
    if (!fluidRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate movement velocity
    const dx = e.movementX * 12;
    const dy = e.movementY * 12;

    // Cycle hue value to generate rainbow colors
    hueRef.current = (hueRef.current + 2.5) % 360;
    const color = hslToRgb(hueRef.current, 100, 50);

    fluidRef.current.addSplat({ x, y, dx, dy, color });
  };

  const handleMouseDown = (e) => {
    if (!fluidRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Radial burst of 12 multi-colored fluid splats to create a rainbow ring
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const velocity = 800 + Math.random() * 400;
      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity;
      
      const hue = (i * 30) % 360;
      const color = hslToRgb(hue, 100, 50);
      
      fluidRef.current.addSplat({ x, y, dx, dy, color });
    }
  };

  return (
    <div 
      className="landing-section" 
      id="landingDiv"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
    >
      {/* React Fluid Animation background */}
      <div className="absolute inset-0 z-0 opacity-85 pointer-events-none">
        <FluidAnimation
          style={{ width: "100%", height: "100%" }}
          config={{
            textureDownsample: 1,
            densityDissipation: 0.98,
            velocityDissipation: 0.98,
            pressureDissipation: 0.8,
            pressureIterations: 25,
            curl: 30,
            splatRadius: 0.008
          }}
          animationRef={(ref) => {
            fluidRef.current = ref;
            window.fluidAnimationRef = ref;
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
