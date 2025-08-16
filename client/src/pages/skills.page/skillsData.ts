

interface skills {
  title: string;
  short: string;
  long: string;
  tools: string[];
  level: string;
}

const skillsData: Record<string, skills> = {
  frontend: {
    title: "Frontend",
    short: "Building intuitive interfaces.",
    long: "I create modern, responsive, and user-friendly interfaces using React, Tailwind CSS, and Framer Motion. I focus on accessibility, performance, and clean component architecture.",
    tools: ["React", "Framer Motion", "CSS Modules", "TS", "Next.js"],
    level: "Junior"
  },
  backend: {
    title: "Backend",
    short: "Designing robust server logic.",
    long: "I build secure and scalable server-side applications using Node.js and Express. I structure APIs clearly, handle authentication with JWT, and connect apps to MongoDB for dynamic data.",
    tools: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "TS"],
    level: "Junior"
  },
  deployment: {
    title: "Deployment",
    short: "Running apps on servers.",
    long: "I deploy fullstack applications on virtual private servers. I use basic Linux, nginx, and PM2 to host apps and ensure they run reliably with minimal setup.",
    tools: ["nginx", "PM2", "Ubuntu", "SSH"],
    level: "Basic–Intermediate"
  },
  "soft skills": {
    title: "Soft Skills",
    short: "Communication, focus, and learning.",
    long: "I stay curious and adaptable. I keep improving how I work, communicate clearly in teams or solo, and stay focused when solving complex problems.",
    tools: ["Problem-solving", "Discipline", "Curiosity", "Clear thinking"],
    level: ""
  }
};

export default skillsData