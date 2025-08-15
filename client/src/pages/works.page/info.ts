
interface skills {
  title: string;
  category: string;
  shortname: string;
  link: string;
  description: string;
  technologies: string[];
}

export const projects: skills[] = [
  {
    title: "Landing Page",
    category: "frontend",
    shortname: "",
    link: "",
    description: "Адаптивний лендинг з анімацією, побудований на React з використанням TailwindCSS та Framer Motion.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "API for Blog",
    category: "backend",
    shortname: "blog",
    link: "",
    description: "Backend API для блогу з авторизацією, CRUD-операціями та зберіганням в MongoDB.",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Partfolio",
    shortname: "partfolio",
    category: "fullstack",
    link: "https://partfolio-mauve.vercel.app/",
    description: "Персональний сайт-галерея проєктів розробника, де представлено найкращі роботи з описом, зображеннями та інтерактивною навігацією. Сайт створений для демонстрації технічних навичок, дизайну інтерфейсу та досвіду в розробці.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Farmer-Motion", "REST API"],
  },
  {
    title: "PillPing",
    shortname: "partfolio",
    category: "fullstack",
    link: "",
    description: "Персональний сайт-галерея проєктів розробника, де представлено найкращі роботи з описом, зображеннями та інтерактивною навігацією. Сайт створений для демонстрації технічних навичок, дизайну інтерфейсу та досвіду в розробці.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Farmer-Motion", "REST API"],
  },
]
