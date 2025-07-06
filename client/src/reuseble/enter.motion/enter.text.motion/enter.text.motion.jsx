import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const fonts = [
  "'Bitcount Grid Double', system-ui",
  "'Pacifico', cursive",
  "'Bebas Neue', sans-serif",
];

export default function EnterTextMotion () {
    const [fontIndex, setFontIndex] = useState(0)



    useEffect(() => {
        if (fontIndex >= fonts.length) return

        const FontChanger = setInterval(() => {setFontIndex((prev) => prev + 1)}, 1000)
        return () => clearTimeout(FontChanger)
    }, [])

    return(
        <AnimatePresence>
            <motion.div
                key={fontIndex}
                className="motionText"
                initial = {{scale: 1}}
                animate = {{scale: 2}}
                exit={{scale: 1}}
                transition={{duration: 0.3}}
                style={{
                    fontFamily: fonts[fontIndex],
                    fontWeight: 300
                }}
            >
                <h1>Welcome!</h1>
            </motion.div>
        </AnimatePresence>
    )
}