import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";


import {
   mobile,
  web,
  html,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";


export const navLinks: TNavLink[] = [
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
   {
    id: "resume",
    title: "Resume",
  },
];

const services: TService[] = [
  {
    title: " Virtual Reality (VR) Developer",
    icon: web,
  },
  {
    title: "2D / 3D Game Developer",
    icon: mobile,
  },
  {
    title: "Augmented & Mixed Reality Developer",
    icon: web,
  },
   {
    title: " Mobile App Developer",
    icon: mobile,
  },
];


const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];const experiences: TExperience[] = [
  {
    title: "VR Developer – Final Year Project (Xfolio)",
    companyName: "EPI Digital School",
    icon: web,
    iconBg: "#383E56",
    date: "Feb 2025 – Jun 2025",
    points: [
      "Designed and developed a fully immersive VR portfolio experience in Unity.",
      "Implemented navigation systems, animated guides, and 3D room transitions.",
      "Focused on accessibility, interaction design, and immersive storytelling."
    ]
  },
  {
    title: "Unity Game Developer – Chemistry Lab VR",
    companyName: "EPI Digital School",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Mar 2025 – May 2025",
    points: [
      "Created an educational VR game simulating a chemistry lab using Unity and C#.",
      "Designed molecule interaction mechanics and guided tutorials in VR.",
      "Led team coordination as Scrum Master using ClickUp and sprint planning."
    ]
  },
  {
    title: "Frontend Developer – Internship Project",
    companyName: "Prodigy Infotech",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jul 2024 – Aug 2024",
    points: [
      "Built a responsive landing page and interactive components with React and CSS.",
      "Integrated UI animations and improved mobile responsiveness.",
      "Contributed to design adaptation from Figma mockups to functional code."
    ]
  },
  {
    title: "Mobile App Developer – My To-Do List App",
    companyName: "Personal Project",
    icon: reactjs,
    iconBg: "#F0E6FA",
    date: "Jun 2025",
    points: [
      "Created a task management mobile app using React Native (Expo) and MongoDB.",
      "Implemented user authentication and task CRUD functionalities.",
      "Designed UI for mobile with responsive layouts and smooth navigation."
    ]
  },
  {
    title: "Game Developer – Critter Match Quest (Challenge)",
    companyName: "Recruitment Challenge",
    icon: web,
    iconBg: "#E6F4FF",
    date: "Jun 2025",
    points: [
      "Designed and developed an educational matching game using Unity.",
      "Implemented level progression, scoring, and visual feedback for children.",
      "Created custom UI and game logic based on challenge specifications."
    ]
  },
  {
    title: "VR Designer – Bourguiba Museum Virtual Tour",
    companyName: "Freelance Project",
    icon: web,
    iconBg: "#DDEAFB",
    date: "Dec 2024 – Jan 2025",
    points: [
      "Developed a virtual reality museum experience with interactive artwork displays.",
      "Integrated narration, scene transitions, and spatial audio in Unity.",
      "Focused on cultural accessibility and visual immersion for public engagement."
    ]
  },
  {
    title: "VR Developer – Sousse Virtual Experience",
    companyName: "Freelance Project",
    icon: web,
    iconBg: "#FFF3DC",
    date: "Feb 2025",
    points: [
      "Created a virtual experience simulating cultural and historical spaces in Sousse using Unity.",
      "Implemented immersive scenes, teleportation navigation, and guided voice instructions.",
      "Worked closely with local stakeholders to ensure authenticity and educational impact."
    ]
  },
  {
    title: "Frontend Developer – Responsive Coffee Website",
    companyName: "Prodigy Tech",
    icon: web,
    iconBg: "#FCE4EC",
    date: "Aug 2024",
    points: [
      "Modified and enhanced a ready-made template into a custom responsive coffee website.",
      "Added animations and visual components using HTML, CSS, and JavaScript.",
      "Improved UI/UX consistency for a smooth user experience across devices."
    ]
  },
  {
    title: "Web Developer – E-commerce Angular Project",
    companyName: "Academic Project",
    icon: web,
    iconBg: "#D7F5DC",
    date: "Jan 2025",
    points: [
      "Built a full Angular e-commerce application with separate admin and client sides.",
      "Implemented product management (CRUD), cart functionality, and route protection.",
      "Styled the UI with a pink/girly theme and made it responsive for mobile."
    ]
  }
];


const testimonials: TTestimonial[] = [
];

const projects: TProject[] = [
  
];

export { services, technologies, experiences, testimonials, projects };
