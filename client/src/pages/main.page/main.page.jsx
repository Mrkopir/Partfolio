import MainEnterMotion from "../../reuseble/enter.motion/main.enter.motion"
import Navigation from "../../reuseble/nav/nav"
import HeroSection from "./hero.section/hero.section"
import AboutSection from "./about.section/about.section"

import "./main.page.css"

export default function MainPage() {
    return (
        <div className="MainPage">
            <MainEnterMotion />
            <div className="MainPageTop">
                <Navigation />
                <HeroSection />
            </div>
            <div className="MainPageAbout">
                <AboutSection />
            </div>
        </div>
    )
}