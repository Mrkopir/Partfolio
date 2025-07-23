import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroSectionText() {
  const { scrollYProgress } = useScroll();

  const moveRight = useTransform(scrollYProgress, [0, 1], [0, 100])
  const moveLeft = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  return (
    <div className= "HeroSectionText">
        <motion.div
          style={{x: moveRight, opacity: opacity}}
        >
          <h1>Volodymyr C.</h1>
        </motion.div>
        <motion.div
          style={{x: moveLeft, opacity: opacity}}
        >
          <h2>React | Node.js</h2>
        </motion.div>
        <motion.div
          style={{x: moveRight, opacity: opacity}}
        >
          <p>I build fast, clean & powerful web apps</p>
        </motion.div>
        <motion.div
          style={{x: moveLeft, opacity: opacity}}
        >
          <button>My Works</button>
        </motion.div>
    </div>
  )
}