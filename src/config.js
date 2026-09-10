export const config = {
    developer: {
        name: "Vivek",
        fullName: "Vivek Kumar",
        title: "Full-Stack Developer",
        description: "Full-Stack Developer with a passion for building robust, scalable web applications. I specialize in EJS, React, Node.js, and modern web solutions, combining technical expertise with business-driven problem-solving."
    },
    social: {
        github: "Vivekkumarprince1",
        email: "vivekkumarprince@email.com",
        location: "India"
    },
    about: {
        title: "About Me",
        description: "I'm a Full-Stack Developer with a passion for building robust, scalable web applications. I specialize in EJS, React, Node.js, and modern web solutions, combining technical expertise with business-driven problem-solving."
    },
    experiences: [
        {
            position: "Software Development Engineer (SDE)",
            company: "ConnectSphere",
            period: "2026 - Present",
            location: "India",
            description: "Architecting and developing scalable full-stack web platforms, microservices, and real-time collaboration engines. Designing low-latency RESTful APIs, optimizing MongoDB schemas, and implementing WebSocket systems.",
            responsibilities: [
                "Architect and develop scalable full-stack web applications and distributed backend microservices.",
                "Implement real-time messaging, audio/video synchronization, and WebSocket communication protocols.",
                "Optimize database queries, indexing, and data models to significantly improve latency and system throughput.",
                "Lead end-to-end feature implementations from technical design through continuous deployment."
            ],
            technologies: ["React.js", "Node.js", "Express", "MongoDB", "WebSockets", "REST APIs", "System Design"]
        },
        {
            position: "React Developer",
            company: "OM Software",
            period: "2025",
            location: "India",
            description: "Engineered modern, responsive web interfaces using React.js, Redux, and modern CSS architecture. Built modular reusable UI component libraries, integrated backend REST APIs, and optimized client rendering speed.",
            responsibilities: [
                "Developed modular, accessible, and high-performance user interfaces using React.js and modern state managers.",
                "Engineered reusable component design systems and integrated complex RESTful API endpoints.",
                "Enhanced web performance, responsiveness, and Core Web Vitals across diverse mobile and desktop devices.",
                "Collaborated closely with UI/UX designers to translate Figma wireframes into pixel-perfect experiences."
            ],
            technologies: ["React.js", "Redux", "JavaScript", "Tailwind CSS", "REST APIs", "Git", "HTML5/CSS3"]
        },
        {
            position: "Founder & CEO",
            company: "FMPG",
            period: "2024",
            location: "India",
            description: "Led business strategy, operations, and growth initiatives. Managed cross-functional product development, client acquisition pipelines, and scalable technical infrastructure.",
            responsibilities: [
                "Led business strategy, operations, and growth initiatives.",
                "Managed product development, technical architecture, and client acquisition processes.",
                "Drove revenue, operational efficiency, and scalability through strategic execution."
            ],
            technologies: ["Management", "Strategy", "Operations", "Full-Stack Development", "Growth"]
        },
        {
            position: "Web Developer & Campus Ambassador",
            company: "Coding Bits",
            period: "2024",
            location: "India",
            description: "Developed and maintained responsive web interfaces and core platform features while driving developer community engagement, technical workshops, and developer outreach as Campus Ambassador.",
            responsibilities: [
                "Developed and maintained responsive web interfaces using HTML5, CSS3, JavaScript, and Node.js.",
                "Organized tech events, developer workshops, and guided students to drive platform adoption.",
                "Improved website performance, user experience (UX), and cross-browser consistency."
            ],
            technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Node.js", "Web Development", "Community Building"]
        },
        {
            position: "Campus Ambassador",
            company: "Pregard, Coding Bits & Placify",
            period: "2023",
            location: "India",
            description: "Promoted brand awareness through targeted tech marketing initiatives. Organized developer hackathons and workshops, built student developer networks, and gathered community insights to refine engagement.",
            responsibilities: [
                "Promoted brand awareness through targeted marketing initiatives.",
                "Organized events, hackathons, and built strategic networks to support brand growth.",
                "Gathered insights to refine and enhance community and marketing strategies."
            ],
            technologies: ["Community Building", "Event Organizing", "Networking", "Leadership"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Vaani",
            category: "AI & Real-Time Communication",
            technologies: "React 18, LiveKit SFU, Azure AI Speech, Socket.IO, Redis, MongoDB",
            image: "/assets/VAANI.png",
            description: "An end-to-end real-time communication platform featuring video conferencing, instant messaging, and live multilingual speech-to-speech audio & text translation powered by LiveKit SFU and Azure Cognitive Services.",
            shortDescription: "A modern video conferencing platform featuring live speech-to-speech multilingual translation, instant chat, and ultra-low latency audio/video streaming powered by LiveKit SFU, Azure Cognitive Services, and Redis pub/sub.",
            features: [
                "Real-time multilingual speech-to-speech audio & subtitle translation using Azure Cognitive Services",
                "High-performance video and audio conferencing via LiveKit SFU (Selective Forwarding Unit)",
                "Instant messaging and room channels with WebSockets (Socket.IO) and Redis pub/sub sync",
                "JWT authentication, offline caching with IndexedDB, and Cloudinary media handling"
            ],
            link: "https://github.com/Vivekkumarprince1/vaani.git",
            liveDemo: "https://react-vaani-frontend.vercel.app"
        },
        {
            id: 2,
            title: "Room Booking Service",
            category: "Full-Stack Web Application",
            technologies: "EJS, Node.js, MongoDB, Express, Bootstrap",
            image: "/assets/FMPG.png",
            description: "A responsive web platform for seamless room booking and management with user authentication, real-time availability tracking, and dynamic backend integration.",
            shortDescription: "A comprehensive room booking and property management platform with user authentication, live room availability calendars, and automated reservation workflows.",
            features: [
                "Secure user authentication, role-based access, and session management",
                "Real-time room availability scheduling and dynamic reservation processing",
                "Administrative portal for property listings, booking approvals, and inventory control",
                "Mobile-first responsive interface built with Bootstrap and modern EJS templates"
            ],
            link: "https://github.com/Vivekkumarprince1/fmpg1.git"
        },
        {
            id: 3,
            title: "ChitChat",
            category: "Real-Time Communication",
            technologies: "Socket.io, Node.js, Express, JavaScript, CSS3",
            image: "/assets/CHITCHAT.png",
            description: "A real-time group chat platform featuring frontend UI design and WebSocket integration for instant messaging capabilities.",
            shortDescription: "A lightweight, instant messaging platform featuring dynamic chat rooms, live typing indicators, and WebSocket-driven real-time synchronization.",
            features: [
                "Bi-directional real-time communication powered by WebSockets (Socket.io)",
                "Instant custom room creation and seamless multi-user group chat",
                "Live user connection tracking, activity indicators, and typing status",
                "Sleek and responsive chat interface optimized for mobile and desktop"
            ],
            link: "https://github.com/Vivekkumarprince1/chitchat.git/"
        },
        {
            id: 4,
            title: "KC Collection E-Commerce",
            category: "E-Commerce & Cloud Deployment",
            technologies: "Node.js, Express.js, MongoDB, Azure, EJS",
            image: "/assets/KC-COLLECTIONS.png",
            description: "A full-featured e-commerce platform with secure payment integration, product catalog management, and an intuitive user experience.",
            shortDescription: "A scalable e-commerce store with dynamic product filtering, cart state management, checkout pipelines, and cloud hosting on Microsoft Azure.",
            features: [
                "Dynamic product catalog with category filtering, search, and inventory tracking",
                "Interactive cart system with real-time price calculations and quantity updates",
                "Secure customer authentication, order records, and checkout flows",
                "Cloud infrastructure deployment and scalability on Microsoft Azure"
            ],
            link: "https://github.com/Vivekkumarprince1/kc-collection.git"
        }
    ],
    contact: {
        email: "vivekkumarprince@email.com",
        github: "https://github.com/Vivekkumarprince1",
        linkedin: "https://www.linkedin.com/in/vivek-kumar-2055211a6/",
        twitter: "https://x.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com"
    },
    skills: {
        develop: {
            title: "FULL-STACK DEVELOPER",
            description: "Building robust & scalable web solutions",
            details: "Developing responsive user interfaces and backend RESTful APIs. Specializing in JavaScript, React.js, Node.js, Express, and EJS templates.",
            tools: ["JavaScript", "React.js", "Node.js", "Express", "EJS", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"]
        },
        design: {
            title: "DEV & TOOLS",
            description: "Database management, deployment, & visual design",
            details: "Managing databases with MongoDB and SQL. Deploying applications to cloud environments (Azure, Vercel) and creating clean UI wireframes in Figma.",
            tools: ["MongoDB", "Azure", "Vercel", "Git", "GitHub", "Figma", "REST APIs", "Socket.io"]
        }
    }
};

