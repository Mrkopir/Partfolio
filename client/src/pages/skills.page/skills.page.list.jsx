import { useState } from "react";
import skillsData from "./skillsData";
import { motion } from "framer-motion";

export default function SkillsPageList({ activeSkill }) {
    const [skills] = useState(Object.values(skillsData));
    const [activeSkillId, setActiveSkillId] = useState("frontend");

    return (
        <div className="SkillsPageList">
            {skills.map((skill, index) => {
            const id = skill.title.toLowerCase();
            const isActive = activeSkillId === id;

            return (
                <motion.div
                    className="SkillsPageListCarts"
                    key={index}
                    onClick={() => {
                        setActiveSkillId(id);
                        activeSkill(id);
                    }}
                    initial={{ scale: 1 }}
                    animate={{ scale: isActive ? 1.03 : 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="SkillsPageListCartTitle">
                        <h1>{skill.title}</h1>
                    </div>
                    <div className="SkillsPageListCartDescription">
                        <p>{skill.short}</p>
                    </div>
                </motion.div>
            );
        })}
    </div>
  );
}
