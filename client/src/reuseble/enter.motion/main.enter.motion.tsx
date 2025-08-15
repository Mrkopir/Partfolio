import EnterBackgroundMotion from "./enter.background.motion/enter.background.motion"
import "./enter.motion.style/enter.motion.css"

export default function MainEnterMotion ({text}: {text: string}) {
    return (
        <div className="mainEnterMotion">
            <EnterBackgroundMotion text = {text} />
        </div>
    )
}