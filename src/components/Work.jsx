import "./styles/Work.css";
import WorkImage from "./WorkImage";
import ProjectModal from "./ProjectModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useRef } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const workSectionRef = useRef(null);
  const workFlexRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    // Desktop (>= 1025px): Horizontal pinning with dynamic scroll distance
    mm.add("(min-width: 1025px)", () => {
      const section = workSectionRef.current;
      const flex = workFlexRef.current;
      if (!section || !flex) return;

      const getScrollAmount = () => {
        return flex.scrollWidth - window.innerWidth + 120;
      };

      const tween = gsap.to(flex, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work-horizontal",
        },
      });

      ScrollTrigger.refresh();

      return () => {
        tween.kill();
      };
    });

    // Tablets & Mobile (<= 1024px): Natural vertical stack with 0 pinning
    mm.add("(max-width: 1024px)", () => {
      if (workFlexRef.current) {
        gsap.set(workFlexRef.current, { clearProps: "all" });
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="work-section" id="work" ref={workSectionRef}>
      <div className="work-container">
        <div className="work-header">
          <h2>
            Featured <span>Works</span>
          </h2>
          <p className="work-header-subtitle">
            A curated selection of distributed systems, real-time collaboration engines, and full-stack web platforms.
          </p>
        </div>

        <div className="work-flex" ref={workFlexRef}>
          {config.projects.slice(0, 5).map((project, index) => (
            <div
              className="work-box"
              key={project.id}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
            >
              <div className="work-info">
                <div className="work-title">
                  <span className="work-index">0{index + 1}</span>
                  <div className="work-title-text">
                    <h4>{project.title}</h4>
                    <span className="work-category">{project.category}</span>
                  </div>
                </div>

                <div className="work-tech-section">
                  <span className="work-tech-label">Technologies</span>
                  <p className="work-tech-p">{project.technologies}</p>
                </div>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
                onSelect={() => setSelectedProject(project)}
              />
            </div>
          ))}

          {/* See All Works CTA Box */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <span className="cta-icon">✦</span>
              <h3>Want to see more?</h3>
              <p>Explore all production deployments, repositories, and real-time systems.</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                <span>See All Works</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="see-all-arrow">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Work;
