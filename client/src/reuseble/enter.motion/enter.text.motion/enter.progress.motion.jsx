import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function EnterProgressMotion ({text = "Home"}) {
    const [progressbar, setProgressbar] = useState(0)
    const [dots, setDots] = useState("")
    useEffect(() => {
        const progressinterval = setInterval(() => {
            setProgressbar(prev => {
                if (prev >= 100){
                    clearInterval(progressinterval)
                    return 100
                }
                return prev + 1
            })
        }, 20)
        return () => clearInterval(progressinterval)
    }, [])
    
    useEffect(() => {
        const dotsinterval = setInterval(() => {
            setDots(prev => {
                if (prev.length >= 3){
                    clearInterval(dotsinterval)
                    return "..."
                }
                return prev + "."
            })
        }, 500)
        return () => clearInterval(dotsinterval)
    }, [])

    return(
        <div className="Progress">
            <label for = "bar">Loading {text + dots}</label>
            <progress name = "bar" value={progressbar} max="100"></progress>
        </div>
    )
}