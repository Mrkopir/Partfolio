import { useEffect, useState } from "react";
import { projects } from "./info";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["FRONTEND", "BACKEND", "FULLSTACK"] as const;

interface WorksPageTableProps {
  sendImgPath: (path: string) => void;
}

export default function WorksPageTable({ sendImgPath }: WorksPageTableProps) {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");
  const [projectIndex, setProjectIndex] = useState<number>(0);

  const filteredProjects = projects.filter(
    (proj) => proj.category.toLowerCase() === activeCategory
  );

  // Скидаємо індекс при зміні категорії
  useEffect(() => {
    setProjectIndex(0);
  }, [activeCategory]);

  // Викликаємо sendImgPath коли змінюється проект
  useEffect(() => {
    const currentProject = filteredProjects[projectIndex];
    if (currentProject) {
      sendImgPath(currentProject.shortname);
    }
  }, [projectIndex, filteredProjects, sendImgPath]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category.toLowerCase());
  };

  const handleNextProject = () => {
    setProjectIndex((prev) =>
      prev < filteredProjects.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevProject = () => {
    setProjectIndex((prev) =>
      prev > 0 ? prev - 1 : filteredProjects.length - 1
    );
  };

  const currentProject = filteredProjects[projectIndex];

  return (
    <div className="WorksPageTable">
      <div className="WorksPageTableCategories">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={
              activeCategory === category.toLowerCase() ? "active-category" : ""
            }
          >
            <h3>{category}</h3>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentProject && (
          <div key={projectIndex} className="WorkPageInfo">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "70%", opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>{currentProject.title}</h1>
            </motion.div>

            <motion.div
              style={{ textAlign: "center" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="WorkPageInfoDescription">
                {currentProject.description}
              </p>
              <h3 className="WorkPageInfoTechnologies">
                {currentProject.technologies.join(" | ")}
              </h3>
              <div>
                <a
                  className="WorkPageInfoLink"
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentProject.link}
                </a>
              </div>
            </motion.div>

            <div className="WorkPageInfoButtons">
              <button onClick={handlePrevProject}>Prev</button>
              <button onClick={handleNextProject}>Next</button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
