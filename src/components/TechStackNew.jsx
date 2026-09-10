import "./styles/TechStackNew.css";

// Inverted pyramid: 10 -> 8 -> 6 -> 4 -> 2
const techStack = [
  // Row 1 - 10 items (Frontend & UI Architecture)
  [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#F7DF1E", textColor: "#000000", filter: "brightness(0)" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org", color: "#3178C6", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev", color: "#61DAFB", textColor: "#000000", filter: "brightness(0)" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org", color: "#FFFFFF", textColor: "#000000", filter: "brightness(0)" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "#E34F26", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "#1572B6", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com", color: "#06B6D4", textColor: "#000000", filter: "brightness(0)" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com", color: "#7952B3", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", url: "https://redux.js.org", color: "#764ABC", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", url: "https://sass-lang.com", color: "#CC6699", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
  ],
  // Row 2 - 8 items (Backend, Databases & APIs)
  [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org", color: "#5FA04E", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com", color: "#EEEEEE", textColor: "#000000", filter: "brightness(0)" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com", color: "#47A248", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org", color: "#4169E1", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com", color: "#4479A1", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", url: "https://redis.io", color: "#DC382D", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", url: "https://firebase.google.com", color: "#FFCA28", textColor: "#000000", filter: "brightness(0)" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", url: "https://graphql.org", color: "#E10098", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
  ],
  // Row 3 - 6 items (DevOps, Cloud & Infrastructure)
  [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com", color: "#2496ED", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", url: "https://aws.amazon.com", color: "#FF9900", textColor: "#000000", filter: "brightness(0)" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", url: "https://azure.microsoft.com", color: "#0078D4", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org", color: "#FCC624", textColor: "#000000", filter: "brightness(0)" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com", color: "#F05032", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com", color: "#FFFFFF", textColor: "#000000", filter: "brightness(0)" },
  ],
  // Row 4 - 4 items (Tools & Platforms)
  [
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com", color: "#FFFFFF", textColor: "#000000", filter: "brightness(0)" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com", color: "#FF6C37", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com", color: "#007ACC", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com", color: "#A259FF", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
  ],
  // Row 5 - 2 items (Core Languages)
  [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c", color: "#00599C", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org", color: "#004482", textColor: "#ffffff", filter: "brightness(0) invert(1)" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>

        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                  style={{
                    "--brand-color": tech.color,
                    "--brand-text": tech.textColor,
                    "--logo-filter": tech.filter,
                  }}
                >
                  <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;

