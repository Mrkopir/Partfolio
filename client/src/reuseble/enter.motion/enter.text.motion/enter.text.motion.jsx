import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const fonts = [
  "'Bitcount Grid Double', system-ui",
  "Open Sans",
  "'Bebas Neue', sans-serif",
];

export default function EnterTextMotion ({text = "Welcome!"}) {
    const [fontIndex, setFontIndex] = useState(0)



    useEffect(() => {
        const FontChanger = setInterval(() => {
            setFontIndex((prev) => {
                if (prev >= fonts.length - 1) {
                    clearInterval(FontChanger)
                    return prev
                }
                return prev + 1
            })
        }, 1000)
        return () => clearInterval(FontChanger)
    }, [])

    return(
        <AnimatePresence>
            <motion.div
                key={fontIndex}
                className="motionText"
                initial = {{scale: 1}}
                animate = {{scale: 2}}
                exit={{scale: 1}}
                transition={{duration: 0.5}}
                style={{
                    fontFamily: fonts[fontIndex],
                    fontWeight: 300
                }}
            >
                <h1>{text}</h1>
            </motion.div>
        </AnimatePresence>
    )
}