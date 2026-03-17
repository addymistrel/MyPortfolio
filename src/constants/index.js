import {
  grabway,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  irrss,
  homeify,
  nextjs,
  net,
  python,
  sqlserver,
  db,
  llm,
  quantivo,
  mxcard,
} from "../assets";

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
    title: "Full Stack Web Developer (MERN)",
    icon: web,
  },
  {
    title: "Backend Developer (.NET)",
    icon: mobile,
  },
  {
    title: "Agentic AI & Automation Developer",
    icon: backend,
  },
  {
    title: "Database Optimization (SQL)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: ".NET Core (C#)",
    icon: net,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer (MERN)",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Experienced in Agile environments, delivering end-to-end solutions from concept to deployment and maintenance at Mindfire Solutions.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Backend Developer (.NET)",
    company_name: "",
    icon: net,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Delivered scalable, production-ready applications at Mindfire Solutions across the complete development lifecycle.",
      "Built and showcased multiple full-stack personal projects with real-world use cases and modern tech stacks.",
      "Engineered efficient RESTful APIs with optimized performance, structured architecture, and seamless integrations.",
    ],
  },
  {
    title: "Agentic AI & Automation Developer",
    company_name: "",
    icon: llm,
    iconBg: "#383E56",
    date: "",
    points: [
      "Integrated LLMs into applications for intelligent features, including contextual responses and automation workflows.",
      "Built a terminal-based AI agent enabling task automation and dynamic interactions using LLM-driven logic.",
    ],
  },
  {
    title: "Database Optimization (SQL)",
    company_name: "",
    icon: db,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Optimized SQL Server queries using indexing strategies (clustered/non-clustered) to improve performance and reduce execution time.",
      "Designed and implemented efficient stored procedures (SPs) for scalable data operations and business logic handling.",
      "Applied query tuning, normalization, and execution plan analysis to enhance database performance and ensure data integrity.",
    ],
  },
];

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
    name: "Quantivo",
    description:
      "Realtime Stock Market Price and News app with built in customized alert and watchlist features.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tradingview-apis",
        color: "green-text-gradient",
      },
      {
        name: "mongo-db",
        color: "pink-text-gradient",
      },
    ],
    image: quantivo,
    source_code_link: "https://github.com/addymistrel/quantivo.git",
  },
  {
    name: "MX-CARD Agent",
    description:
      "A terminal-based AI agent that automates tasks and provides dynamic interactions using LLM-driven logic.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "llm",
        color: "green-text-gradient",
      },
      {
        name: "agentic-ai",
        color: "pink-text-gradient",
      },
    ],
    image: mxcard,
    source_code_link: "https://github.com/addymistrel/quantivo.git",
  },
  {
    name: "Grabway",
    description:
      "Ride-sharing webapp connecting users and drivers with Google Maps integration, optimizing commuting for efficient travel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mongo-db",
        color: "pink-text-gradient",
      },
      {
        name: "maps",
        color: "blue-text-gradient",
      },
    ],
    image: grabway,
    source_code_link: "https://github.com/addymistrel/GrabWay.git",
  },
  {
    name: "Railway Rakes Scheduler",
    description:
      "Machine Learning based web app for efficient scheduling of railway rakes with minimal clicks",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
      {
        name: "mongo-db",
        color: "green-text-gradient",
      },
    ],
    image: irrss,
    source_code_link: "https://github.com/Abhinav-2004/SIH-React-Railways.git",
  },
  {
    name: "Homeify",
    description:
      "A new Era clone of Pepperfry.com website using tech like React JS and all other MERN techs.",
    tags: [
      {
        name: "React-JS",
        color: "blue-text-gradient",
      },
      {
        name: "Express-JS",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
    ],
    image: homeify,
    source_code_link: "https://github.com/addymistrel/Homeify.git",
  },
  {
    name: "i-Clean",
    description:
      "A Full Fleshed Backend embedded Web App for Efficient management and tracking of Garbages in cities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mapbox",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/addymistrel/i-Clean-Final",
  },
  {
    name: "Notes & Assignments",
    description:
      "A Full CSS Based Website to maintain all the notes and assignments at one place for easy access whenever required.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/addymistrel/NotesAndAssignments.github.io",
  },
  {
    name: "Volume Control",
    description:
      "A Python Based Program which enables the user to Control Volume of their System with the help of Hand Gestures.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "open-CV",
        color: "green-text-gradient",
      },
      {
        name: "mediapipe",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/addymistrel/Volume-Control",
  },
];

export { services, technologies, experiences, testimonials, projects };
