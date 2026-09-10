import { useEffect } from "react";
import "./styles/ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const techList = Array.isArray(project.technologies)
    ? project.technologies
    : typeof project.technologies === "string"
      ? project.technologies.split(",").map((t) => t.trim())
      : [];

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close modal"
          data-cursor="disable"
        >
          ✕
        </button>

        {/* Modal Header / Media Preview */}
        <div className="project-modal-media">
          <img
            src={project.image}
            alt={project.title}
            className="project-modal-image"
            loading="lazy"
          />
          <div className="project-modal-media-overlay">
            <span className="project-modal-category-badge">{project.category}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="project-modal-content">
          <div className="project-modal-title-row">
            <h3 className="project-modal-title">{project.title}</h3>
          </div>

          {/* Short Project Summary */}
          <div className="project-modal-section">
            <h4 className="project-modal-heading">About the Project</h4>
            <p className="project-modal-description">
              {project.shortDescription || project.description}
            </p>
          </div>

          {/* Key Highlights / Features if available */}
          {project.features && project.features.length > 0 && (
            <div className="project-modal-section">
              <h4 className="project-modal-heading">Key Features & Architecture</h4>
              <ul className="project-modal-features">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="project-modal-feature-item">
                    <span className="feature-bullet">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          {techList.length > 0 && (
            <div className="project-modal-section">
              <h4 className="project-modal-heading">Technologies Used</h4>
              <div className="project-modal-tags">
                {techList.map((tech, idx) => (
                  <span key={idx} className="project-modal-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="project-modal-actions">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal-btn primary"
                data-cursor="disable"
              >
                Live Demo ↗
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal-btn secondary"
                data-cursor="disable"
              >
                View on GitHub ↗
              </a>
            )}
            <button
              onClick={onClose}
              className="project-modal-btn ghost"
              data-cursor="disable"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
