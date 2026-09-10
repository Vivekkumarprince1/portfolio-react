import { getAssetUrl } from '../utils/assetUtils';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: getAssetUrl('web'),
  },
  {
    title: "React Developer",
    icon: getAssetUrl('react'),
  },
  {
    title: "Backend Developer",
    icon: getAssetUrl('backend'),
  },
  {
    title: "Server Side Developer",
    icon: getAssetUrl('creator'),
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: getAssetUrl('html'),
  },
  {
    name: "CSS 3",
    icon: getAssetUrl('css'),
  },
  {
    name: "JavaScript",
    icon: getAssetUrl('javascript'),
  },
  // {
  //   name: "TypeScript",
  //   icon: getAssetUrl('typescript'),
  // },
  {
    name: "React JS",
    icon: getAssetUrl('react'),
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: getAssetUrl('redux'),
  // },
  {
    name: "Tailwind CSS",
    icon: getAssetUrl('tailwind'),
  },
  {
    name: "Node JS",
    icon: getAssetUrl('nodejs'),
  },
  {
    name: "MongoDB",
    icon: getAssetUrl('mongodb'),
  },
  // {
  //   name: "Three JS",
  //   icon: getAssetUrl('threejs'),
  // },
  {
    name: "git",
    icon: getAssetUrl('git'),
  },
  {
    name: "github",
    icon: getAssetUrl('github'),
  },
  {
    name: "figma",
    icon: getAssetUrl('figma'),
  },
  // {
  //   name: "docker",
  //   icon: getAssetUrl('docker'),
  // },
];

const experiences = [
  {
    "title": "Software Development Engineer (SDE)",
    "icon": getAssetUrl('web'),
    "company_name": "ConnectSphere",
    "date": "2026 - Present",
    "points": [
      "Architect and develop scalable full-stack web applications and distributed backend microservices.",
      "Implement real-time messaging, audio/video synchronization, and WebSocket communication protocols.",
      "Optimize database queries, indexing, and data models to significantly improve latency and system throughput.",
      "Lead end-to-end feature implementations from technical design through continuous deployment."
    ]
  },
  {
    "title": "React Developer",
    "icon": getAssetUrl('react'),
    "company_name": "OM Software",
    "date": "2025",
    "points": [
      "Developed modular, accessible, and high-performance user interfaces using React.js and modern state managers.",
      "Engineered reusable component design systems and integrated complex RESTful API endpoints.",
      "Enhanced web performance, responsiveness, and Core Web Vitals across diverse mobile and desktop devices.",
      "Collaborated closely with UI/UX designers to translate Figma wireframes into pixel-perfect experiences."
    ]
  },
  {
    "title": "Founder & CEO",
    "icon": getAssetUrl('fmpg'),
    "company_name": "FMPG",
    "date": "2024",
    "points": [
      "Led business strategy, operations, and growth initiatives.",
      "Managed product development, technical architecture, and client acquisition processes.",
      "Drove revenue, operational efficiency, and scalability through strategic execution."
    ]
  },
  {
    "title": "Web Developer & Campus Ambassador",
    "icon": getAssetUrl('codingbits'),
    "company_name": "Coding Bits",
    "date": "2024",
    "points": [
      "Developed and maintained responsive web interfaces using HTML5, CSS3, JavaScript, and Node.js.",
      "Organized tech events, developer workshops, and guided students to drive platform adoption.",
      "Improved website performance, user experience (UX), and cross-browser consistency."
    ]
  },
  {
    "title": "Campus Ambassador",
    "icon": getAssetUrl('codingbits'),
    "company_name": "Pregard, Coding Bits & Placify",
    "date": "2023",
    "points": [
      "Promoted brand awareness through targeted tech marketing initiatives.",
      "Organized events, hackathons, and built strategic networks to support brand growth.",
      "Gathered insights to refine and enhance community and marketing strategies."
    ]
  }
]

const certificates = [
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "June 2023",
    image: "/react.png",
    credential_link: "https://example.com/credential1",
  },
  {
    title: "JavaScript Advanced",
    issuer: "Coursera",
    date: "March 2023",
    image: "/javascript.png",
    credential_link: "https://example.com/credential2",
  },
  {
    title: "Full Stack Development",
    issuer: "Udemy",
    date: "January 2023",
    image: "/nodejs.png",
    credential_link: "https://example.com/credential3",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "November 2022",
    image: "/tailwind.png",
    credential_link: "https://example.com/credential4",
  },
];


const projects = [
  {
    "name": "Vaani",
    "description": "An end-to-end real-time communication platform featuring video conferencing, instant messaging, and live multilingual speech-to-speech audio & text translation powered by LiveKit SFU and Azure Cognitive Services.",
    "tags": [
      {
        "name": "React.js",
        "color": "blue-text-gradient"
      },
      {
        "name": "LiveKit SFU",
        "color": "green-text-gradient"
      },
      {
        "name": "Azure AI",
        "color": "pink-text-gradient"
      },
      {
        "name": "Socket.io",
        "color": "blue-text-gradient"
      },
      {
        "name": "Redis",
        "color": "green-text-gradient"
      },
      {
        "name": "MongoDB",
        "color": "pink-text-gradient"
      }
    ],
    "image": getAssetUrl('vaani'),
    "source_code_link": "https://github.com/Vivekkumarprince1/vaani.git"
  },
  {
    "name": "Room Booking Service Website",
    "description": "A responsive web platform for seamless room booking and management with user authentication, real-time availability tracking, and dynamic backend integration.",
    "tags": [
      {
        "name": "EJS",
        "color": "blue-text-gradient"
      },
      {
        "name": "Node.js",
        "color": "green-text-gradient"
      },
      {
        "name": "MongoDB",
        "color": "pink-text-gradient"
      }
    ],
    "image": getAssetUrl('fmpg'),
    "source_code_link": "https://github.com/Vivekkumarprince1/fmpg1.git"
  },
  {
    "name": "ChitChat",
    "description": "A real-time group chat platform featuring frontend UI design and WebSocket integration for instant messaging capabilities.",
    "tags": [
      {
        "name": "EJS",
        "color": "blue-text-gradient"
      },
      {
        "name": "JavaScript",
        "color": "green-text-gradient"
      },
      {
        "name": "CSS",
        "color": "pink-text-gradient"
      },
      {
        "name": "Node.js",
        "color": "green-text-gradient"
      },
      {
        "name": "Socket.io",
        "color": "pink-text-gradient"
      }
    ],
    "image": getAssetUrl('chitchat'),
    "source_code_link": "https://github.com/Vivekkumarprince1/chitchat.git/"
  },
  {
    "name": "KC Collection E-Commerce Website",
    "description": "A full-featured e-commerce platform with secure payment integration, product catalog management, and an intuitive user experience.",
    "tags": [
      {
        "name": "EJS",
        "color": "blue-text-gradient"
      },
      {
        "name": "Express.js",
        "color": "green-text-gradient"
      },
      {
        "name": "Azure",
        "color": "pink-text-gradient"
      }
    ],
    "image": getAssetUrl('kccollections'),
    "source_code_link": "https://github.com/Vivekkumarprince1/kc-collection.git"
  }
]

const sections = {
  projects: {
    id: "projects",
    title: "Projects",
    subtitle: "My work",
    description: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos.",
    content: "projects",
    buttonTitle: "Projects",
  },
  certificates: {
    id: "certificates",
    title: "Certificates",
    subtitle: "My achievements",
    description: "These certificates represent my dedication to continuous learning and skill development.",
    content: "certificates",
    buttonTitle: "Certificates",
  },
  experience: {
    id: "experience",
    title: "Experience",
    subtitle: "What I have done",
    description: "My professional journey and work experience in various roles.",
    content: "experience",
    buttonTitle: "Experience",
  },
  tech: {
    id: "tech",
    title: "Tech Stack",
    subtitle: "What I work with",
    description: "Technologies and tools I use to bring ideas to life.",
    content: "tech",
    buttonTitle: "Tech Stack",
  },
};

export const siteConfig = {
  title: 'Portfolio',
  name: 'vivek kumar',
  email: 'vivekkumarprince@email.com',
  subtitle: 'Portfolio',
  role: {
    title: 'Fullstack',
    subtitle: 'Developer'
  },
  description: 'To leverage my skills in software development, problem-solving, and collaboration to contribute to innovative projects in a dynamic tech environment.',
  longDescription: '',
};

export const skills = [
  'React', 
  'Javascript', 
  'Node.js', 
  'Tailwind'
];

export const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/Vivekkumarprince1',
    icon: getAssetUrl('github'),
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/vivek-kumar-2055211a6/',
    icon: getAssetUrl('linkedin'),
  },
  {
    name: 'instagram',
    url: '',
    icon: getAssetUrl('instagram'),
  }
];

export { services, technologies, experiences, certificates, projects, sections };