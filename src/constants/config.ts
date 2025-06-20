export const config: TConfig = {
  html: {
    title: "Amira Choubani — VR & Game Developer Portfolio",
    fullName: "Amira Choubani",
    email: "chouamira10@gmail.com",
  },
  hero: {
    name: "Amira Choubani",
    p: [
      "🎮VR & Gaming Engineer passionate about immersive and interactive 3D experiences",
      "I build 3D environments, interactive games with Unity",
    ],
  },
  contact: {
    p: "Let's connect",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What would you like to share?",
      },
    },
  },

  // 🆕 Nouvelle section pour les liens
  links: {
    github: "https://github.com/amira-choubani",
    linkedin: "https://www.linkedin.com/in/amira-choubani",
    resume: "/Amira_Choubani_CV.pdf", // chemin relatif vers ton fichier dans /public
  },

  sections: {
    about: {
      p: "Who I am",
      h2: "About Me.",
      content: `I'm a VR & Gaming Engineer with a deep interest in immersive experiences,
      interactive storytelling, and real-time 3D applications. I work with Unity and Three.js
      to build engaging environments for web and VR platforms. My goal is to combine creativity and
      technology to make digital spaces more alive and meaningful.`,
    },
    experience: {
      p: "My background",
      h2: "Work Experience.",
    },
    works: {
      p: "My creations",
      h2: "Projects.",
      content: `These projects showcase my skills in game development and virtual reality engineering.
      Each project is built with care to reflect problem-solving, creativity, and technical integration.
      You'll find interactive demos and open-source code highlighting my approach to immersive design.`,
    },
  },
};
