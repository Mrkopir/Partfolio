import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function WorksPageBoard ({getImgPath}) {
    const [imgIndex, setImgIndex] = useState(0)

    useEffect(() => {
        setImgIndex(0)
    }, [getImgPath])

    const onImgClickNext = () => {
        setImgIndex((prev) => prev + 1)
    }

    const onImgClickPrev = () => {
        setImgIndex((prev) => prev < 0 ? prev - 1 : setImgIndex(0))
    }

    return(
        <AnimatePresence>
            <div className="WorksPageBoard">
                <motion.div
                    className="WorksPageBoardImage"
                    key={`${imgIndex}_${getImgPath}`}
                    initial = {{y: "0%", opacity: 0}}
                    animate = {{y: "5%", opacity: 1}}
                    exit = {{y: "10%", opacity: 0}}
                    transition={{duration: 1}}
                >
                    <img src={`https://partfolio-jeft.onrender.com/api/img/${getImgPath}_${imgIndex}.jpg`} alt="partfolio1" onError={(() => {setImgIndex(0)})} />
                </motion.div>
                <div className="WorksPageBoardButtons">
                    <p onClick={onImgClickPrev}><i className="left"></i></p>
                    <p onClick={onImgClickNext}><i className="right"></i></p>
                </div>
            </div>
        </AnimatePresence>
    )
}