import { useEffect, useRef } from "react";
import FluidAnimation from "react-fluid-animation/dist/index.js";
import "./styles/FluidBackground.css";

const hslToRgb = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return [f(0), f(8), f(4)];
};

const FluidBackground = () => {
  const fluidRef = useRef(null);
  const hueRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!fluidRef.current) return;
      const x = e.clientX;
      const y = e.clientY;

      // Calculate movement velocity
      const dx = (e.movementX || 0) * 12;
      const dy = (e.movementY || 0) * 12;

      // Cycle hue value to generate rainbow colors
      hueRef.current = (hueRef.current + 2.5) % 360;
      const color = hslToRgb(hueRef.current, 100, 50);

      fluidRef.current.addSplat({ x, y, dx, dy, color });
    };

    const handleMouseDown = (e) => {
      if (!fluidRef.current) return;
      const x = e.clientX;
      const y = e.clientY;

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

    const handleTouchMove = (e) => {
      if (!fluidRef.current || !e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;

      hueRef.current = (hueRef.current + 3) % 360;
      const color = hslToRgb(hueRef.current, 100, 50);

      fluidRef.current.addSplat({ x, y, dx: 0, dy: 0, color });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="fluid-global-background">
      {/* Ambient background glows */}
      <div className="fluid-bg-glow-1"></div>
      <div className="fluid-bg-glow-2"></div>
      <div className="fluid-grid-overlay"></div>

      {/* Full-viewport Fluid Canvas */}
      <div className="fluid-canvas-container">
        <FluidAnimation
          style={{ width: "100%", height: "100%" }}
          config={{
            textureDownsample: 1,
            densityDissipation: 0.98,
            velocityDissipation: 0.98,
            pressureDissipation: 0.8,
            pressureIterations: 25,
            curl: 30,
            splatRadius: 0.008,
          }}
          animationRef={(ref) => {
            fluidRef.current = ref;
            window.fluidAnimationRef = ref;
          }}
        />
      </div>
    </div>
  );
};

export default FluidBackground;
