import { useRef } from "react";
import photo from "./../../../assets/aboutImage.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

export default function AboutSectionRightImage() {
    const ref = useRef();
    const { scrollYProgress } = useScroll();

    const moveUp = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div style={{ y: moveUp, opacity: opacity }}>
            <div className="AboutSectionRightImage" ref={ref}>
                <picture>
                    <img src={photo} alt="AboutImage" />
                </picture>
            </div>
        </motion.div>
    );
}
