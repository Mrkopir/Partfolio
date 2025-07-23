import EnterBackgroundMotion from "./enter.background.motion/enter.background.motion"

export default function MainEnterMotion ({text}) {
    return (
        <div className="mainEnterMotion">
            <EnterBackgroundMotion text = {text} />
        </div>
    )
}