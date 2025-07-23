import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const text = [
  "Volodymyr Chetvertynivskyi",
  "Full Stack Developer",
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % text.length);
    }, 7000);

    return () => clearInterval(textInterval);
  }, []);

  const onMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="Navigation">
      <AnimatePresence mode="wait">
        <motion.div
          key={textIndex}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "40%", opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            <a href="/">{text[textIndex]}</a>
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="Right-Side">
        <p>
          <a href="/skills">My Skills</a>
        </p>
        <p>
          <a href="/works">Works</a>
        </p>
        <p>
          <a href="/contact">Contact</a>
        </p>

        <button
          className={menuOpen ? "nav-icon HiddenBurger open" : "nav-icon HiddenBurger"}
          onClick={onMenuClick}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </button>
      </div>

      {menuOpen && <div className="Overlay" onClick={handleCloseMenu}></div>}

        <div className={menuOpen ? "PhoneMenu menu-items active" : "PhoneMenu"}>
        <button className="CloseButton" onClick={handleCloseMenu}>×</button>
            <ul>
                <li><a href="/" onClick={handleCloseMenu}>Home</a></li>
                <li><a href="/skills" onClick={handleCloseMenu}>My Skills</a></li>
                <li><a href="/works" onClick={handleCloseMenu}>Works</a></li>
                <li><a href="/contact" onClick={handleCloseMenu}>Contact</a></li>
            </ul>
        </div>
    </div>
  );
}
