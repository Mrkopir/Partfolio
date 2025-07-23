import { useEffect, useState } from "react"
import { projects } from "./info"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["FRONTEND", "BACKEND", "FULLSTACK"]

export default function WorksPageTable ({sendImgPath}) {
    const [ActiveCategoriesButton, setActiveCategoriesButton] = useState("frontend") 
    const [projectIndex, setProjectIndex] = useState(0)

    const filteredProjects = projects.filter((proj) => proj.category === ActiveCategoriesButton)

    useEffect(() => {
        setProjectIndex(0)
    }, [ActiveCategoriesButton])

    useEffect(() => {
        const currentProject = filteredProjects[projectIndex]
        if (currentProject) {
            sendImgPath(currentProject.shortname)
        }
    }, [projectIndex, filteredProjects, sendImgPath])

    const onCategoriesClick = (e) => {
        setActiveCategoriesButton((e.target.textContent).toLowerCase())
    }

    const onProjClickNext = () => {
        setProjectIndex((prev) => prev < filteredProjects.length - 1 ? prev + 1 : 0)
    }

    const onProjClickPrev = () => {
        setProjectIndex((prev) => prev > 0 ? prev - 1 : filteredProjects.length - 1)
    }

    const project = filteredProjects[projectIndex]

    return(
        <div className="WorksPageTable">
            <div className="WorksPageTableCategories">
                {categories.map((category) => {
                    return <h3 
                    key={category} 
                    onClick={(e) => onCategoriesClick(e)} 
                    className={ActiveCategoriesButton === category.toLocaleLowerCase() ? 'active-category' : ""}  
                    style={{
                        border: ActiveCategoriesButton === category.toLocaleLowerCase() ? "10px solid #FF6404" : "none",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",    
                    }}>{category.toLocaleUpperCase()}</h3>
                })}
            </div>
            <AnimatePresence mode="wait">
            {project && (
                <div key={projectIndex} className="WorkPageInfo" >
                    <motion.div
                        initial = {{x: "-100%", opacity: 0}}
                        animate = {{x: "0%", opacity: 1}}
                        exit = {{x: "70%", opacity: 0}}
                        transition={{duration: 1}}
                    >
                        <h1>{project.title}</h1>
                    </motion.div>
                    <motion.div
                        className="WorkPageInfoDescription"

                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        exit = {{opacity: 0}}
                        transition={{duration: 1}}
                    >
                    <p>{project.description}</p>
                    </motion.div>
                    <h3 className="WorkPageInfoTechnologies">{project.technologies.join(" | ")}</h3>
                    <div className="WorkPageInfoButtons">
                        <button onClick={onProjClickPrev}>Prevent</button>
                        <button onClick={onProjClickNext}>Next</button>
                    </div>
                </div>
            )}
            </AnimatePresence>
        </div>
    )
}