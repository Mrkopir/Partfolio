import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import EnterTextMotion from "./../enter.text.motion/enter.text.motion"

export default function EnterBackgroundMotion () {
    const [showBackground, setShowBackground] = useState(true)

    useEffect(() => {
        const BackgroundInterval = setInterval(() => {setShowBackground(false)}, 3000)
        return () => clearTimeout(BackgroundInterval)
    }, [])

    return(
        <AnimatePresence>
            {showBackground && (
                <motion.div
                    className="motionBackground"
                    initial = {{y: "0%", opacity: 1}}
                    exit={{y: "-100%", opacity: 0}}
                    transition={{duration: 0.8}}
                >
                <EnterTextMotion />
                </motion.div>
            )}
        </AnimatePresence>
    )
}