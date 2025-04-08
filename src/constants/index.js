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
    "title": "Founder & CEO",
    "company_name": "FMPG",
    "date": "", // Date not specified in the resume
    "points": [
      "Led business strategy, operations, and growth initiatives.",
      "Managed team, product development, and client acquisition processes.",
      "Drove revenue and scalability through strategic planning and execution."
    ]
  },
  {
    "title": "Program Manager Intern",
    "company_name": "Coding Bits",
    "date": "", // Date not specified in the resume
    "points": [
      "Contributed to the main website by overseeing project execution and development workflows.",
      "Improved website performance, user experience (UX), and functionality."
    ]
  },
  {
    "title": "Campus Ambassador",
    "company_name": "Pregard, Coding Bits & Placify",
    "date": "", // Date not specified in the resume
    "points": [
      "Promoted brand awareness through targeted marketing initiatives.",
      "Organized events and built strategic networks to support brand growth.",
      "Gathered insights to refine and enhance marketing strategies."
    ]
  }
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
    "image": "getAssetUrl('roombooking')",
    "source_code_link": "https://fmpg.in"
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
    "image": "getAssetUrl('chitchat')",
    "source_code_link": "https://github.com/"
  },
  {
    "name": "ShikshaSetu",
    "description": "An educational support platform with a learning management system, user authentication, and scalable content delivery features.",
    "tags": [
      {
        "name": "React.js",
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
    "image": "getAssetUrl('shikshasetu')",
    "source_code_link": "https://github.com/"
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
    "image": "getAssetUrl('ecommerce')",
    "source_code_link": "https://kc-collection.azurewebsites.net"
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

export { services, technologies, experiences, testimonials, projects, sections };