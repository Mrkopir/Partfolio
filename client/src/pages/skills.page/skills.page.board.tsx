import skillsData from "./skillsData"

import { motion } from "framer-motion"

export default function SkillsPageBoard ({activeSkill}: {activeSkill: string}) {
    return(
        <motion.div 
            className="SkillsPageBoard"
            key={activeSkill}
            initial = {{scale: 1, opacity: 1}}
            animate = {{x: ["-100%", "0%"], scale: [0, 1], opacity: [0, 1]}}
            transition={{duration: 0.5}}
        >
            <h1>{skillsData[activeSkill].title}</h1>
            <p>{skillsData[activeSkill].long}</p>
            <h3>{skillsData[activeSkill].tools.join(" | ")}</h3>
            <h2>{skillsData[activeSkill].level}</h2>
        </motion.div>
    )
}