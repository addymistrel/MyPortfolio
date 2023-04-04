import {
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participated in various Hacakathons Including Nirmaan & Smart Odisha Hackathon.",
    ],
  },
  {
    title: "Competitive Programmer",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Solved Various Tricky and Heart Breathing Programming Questions.",
      "Good Knowledge on Data Structures.",
      "Secured global rank of #294 in contest Starters 80 Division 2 (Rated) on CODECHEF.",
      "5-star Gold Badge in Problem Solving on Hackerrank.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing Backend for websites using Firebase.",
      "Implemented Backend along with Google Map",
    ],
  },
  {
    title: "Python Programmer",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Completed Internships on Python based Course in Syllogestik Systems.",
      "Developed Open CV projects to control Sound Volumes Through Hand Gestures.",
      "Developed a ML Prediction Model using Python.",
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
    source_code_link: "https://github.com/addymistrel/NotesAndAssignments.github.io",
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
