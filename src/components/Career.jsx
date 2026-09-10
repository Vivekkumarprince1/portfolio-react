import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Career.css";
import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);

const getDisplayYear = (period, index) => {
  if (index === 0 && period.includes("Present")) return "NOW";
  if (period.includes(" - ")) {
    return period.split(" - ")[0]; // Show start year for ranges
  }
  return period;
};

const Career = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".career-timeline",
        { maxHeight: "0%" },
        {
          maxHeight: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".career-info",
            start: "top 65%",
            end: "bottom 65%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>
                    {exp.company}{" "}
                    <span className="career-period-text">({exp.period})</span>
                  </h5>
                </div>
                <h3>{getDisplayYear(exp.period, index)}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

