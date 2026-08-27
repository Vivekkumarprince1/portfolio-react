import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import { certificates } from "../constants";
import "./MyWorks.css";

const MyWorks = () => {
  const [filter, setFilter] = useState("all"); // 'all' | 'projects' | 'certificates'

  const displayedItems = [];

  if (filter === "all" || filter === "projects") {
    config.projects.forEach((project, idx) => {
      displayedItems.push({
        id: `project-${project.id}`,
        type: "project",
        title: project.title,
        category: project.category,
        description: project.description,
        technologies: project.technologies,
        image: project.image,
        link: project.link,
      });
    });
  }

  if (filter === "all" || filter === "certificates") {
    certificates.forEach((cert, idx) => {
      displayedItems.push({
        id: `cert-${idx}`,
        type: "certificate",
        title: cert.title,
        category: `Certificate - ${cert.issuer}`,
        description: `Earned on ${cert.date}. This credential verifies core capabilities and technical excellence.`,
        technologies: `Issuer: ${cert.issuer}`,
        // Use devicon/fallback links since old images might not exist
        image: cert.title.toLowerCase().includes("react")
          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          : cert.title.toLowerCase().includes("javascript")
            ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            : cert.title.toLowerCase().includes("node")
              ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        link: cert.credential_link,
      });
    });
  }

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          My <span>Creations</span>
        </h1>
        <p>A collection of my projects and academic achievements</p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setFilter("all")}
            className={`py-2 px-6 rounded-full border transition-all duration-300 ${filter === "all"
                ? "bg-[#c2a4ff] text-[#0b080c] border-[#c2a4ff]"
                : "bg-transparent text-white border-white/20 hover:border-[#c2a4ff]/50"
              }`}
            data-cursor="disable"
          >
            All
          </button>
          <button
            onClick={() => setFilter("projects")}
            className={`py-2 px-6 rounded-full border transition-all duration-300 ${filter === "projects"
                ? "bg-[#c2a4ff] text-[#0b080c] border-[#c2a4ff]"
                : "bg-transparent text-white border-white/20 hover:border-[#c2a4ff]/50"
              }`}
            data-cursor="disable"
          >
            Projects
          </button>
          <button
            onClick={() => setFilter("certificates")}
            className={`py-2 px-6 rounded-full border transition-all duration-300 ${filter === "certificates"
                ? "bg-[#c2a4ff] text-[#0b080c] border-[#c2a4ff]"
                : "bg-transparent text-white border-white/20 hover:border-[#c2a4ff]/50"
              }`}
            data-cursor="disable"
          >
            Certificates
          </button>
        </div>
      </div>

      <div className="myworks-grid">
        {displayedItems.map((item, index) => {
          const isInternalLink = Boolean(item.link?.startsWith("/"));
          const cardContent = (
            <>
              <div className="myworks-card-number">0{index + 1}</div>
              <div className="myworks-card-image p-6 flex items-center justify-center bg-black/20">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className={item.type === "certificate" ? "w-32 h-32 object-contain" : "w-full h-full object-cover"}
                />
              </div>
              <div className="myworks-card-info">
                <h3>{item.title}</h3>
                <p className="myworks-card-category">{item.category}</p>
                <p className="myworks-card-description">{item.description}</p>
                <p className="myworks-card-tech">{item.technologies}</p>
              </div>
            </>
          );

          if (isInternalLink) {
            return (
              <Link
                className="myworks-card"
                key={item.id}
                data-cursor="disable"
                to={item.link}
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <a
              className="myworks-card"
              key={item.id}
              data-cursor="disable"
              href={item.link || undefined}
              target={item.link ? "_blank" : undefined}
              rel={item.link ? "noopener noreferrer" : undefined}
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;

