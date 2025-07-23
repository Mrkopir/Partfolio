import { useScroll, useTransform, motion } from "framer-motion";

export default function AboutSectionLeftText() {
    const { scrollYProgress } = useScroll();

    const moveLeft = useTransform(scrollYProgress, [0, 1], [100, 0])
    const moveRight = useTransform(scrollYProgress, [0, 1], [-100, 0])
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    return (
        <div className="AboutSectionLeftText">
            <motion.div style={{x: moveLeft, opacity: opacity}}>
                <p>I’m Volodymyr Chetvertynivskyi, a passionate Fullstack Developer with a strong interest in cybersecurity. I enjoy building clean, secure, and scalable web solutions — from backend logic and API design to responsive user interfaces.</p>
            </motion.div>
            <motion.div style={{x: moveRight, opacity: opacity}}>
                <p>Currently expanding my skills through hands-on projects involving Node.js, Express, MongoDB, and React, with a keen eye on writing secure and maintainable code.</p>
            </motion.div>
            <motion.div style={{x: moveLeft, opacity: opacity}}>
                <p>I also have certifications in cybersecurity fundamentals, networking, and IT basics, and I'm actively preparing for a future in both web development and information security — bridging the gap between tech and trust.</p>
            </motion.div>
        </div>
    )

}