import { Link } from "react-router-dom";
import { FaGithub, FaChessKnight, FaDownload } from "react-icons/fa6";
import { HiArrowDown } from "react-icons/hi2";
import { config } from "../config";
import "./styles/Landing.css";

const Landing = () => {
  const fullName = config.developer?.fullName || "Vivek Kumar";

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const workElem = document.getElementById("work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="landing-section" id="landingDiv">
      <div className="hero-clean-container">

        {/* Availability Badge */}

        {/* Minimal Hero Header */}
        <div className="hero-content-wrap">
          <h1 className="hero-main-name">{fullName}</h1>
          <p className="hero-role-title">Software Development Engineer</p>
          <p className="hero-tagline">
            Architecting high-performance microservices & real-time web platforms.
          </p>
        </div>

        {/* Clean Action Buttons */}
        <div className="hero-cta-group">
          <a
            href="#work"
            onClick={handleScrollToWork}
            className="btn-primary-hero"
            data-cursor="disable"
          >
            <span>Explore Work</span>
            <HiArrowDown className="btn-icon-svg" />
          </a>

          <Link
            to="/play"
            className="btn-secondary-hero"
            data-cursor="disable"
          >
            <FaChessKnight className="btn-icon-svg text-purple-300" />
            <span>Play Chess</span>
          </Link>

          <a
            href={config.contact?.github || "https://github.com/Vivekkumarprince1"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-hero"
            data-cursor="disable"
          >
            <FaGithub className="btn-icon-svg" />
            <span>GitHub</span>
          </a>

          <a
            href="/resume.pdf"
            download="Vivek_Kumar_Resume.pdf"
            className="btn-secondary-hero"
            data-cursor="disable"
          >
            <FaDownload className="btn-icon-svg" />
            <span>Resume</span>
          </a>
        </div>

        {/* Minimal Scroll Cue */}
        <div className="hero-clean-scroll" onClick={handleScrollToWork} role="button" tabIndex={0}>
          <span className="scroll-text">SCROLL</span>
          <div className="scroll-line"></div>
        </div>

      </div>
    </section>
  );
};

export default Landing;
