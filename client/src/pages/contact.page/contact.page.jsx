import { useState } from "react";

import Navigation from "../../reuseble/nav/nav";
import MainEnterMotion from "../../reuseble/enter.motion/main.enter.motion";
import ContactPageForm from "./contact.page.form";
import ContactPageData from "./contact.page.data";
import ContactPageMainText from "./contact.page.main.text";

import "./contact.page.css"

export default function ContactPage () {
    const [loading, setLoading] = useState(false)


    const getResponceStatus = (status) => {
        setLoading(status)
    }
    return (
        <div className="ContactPage">
            <MainEnterMotion text = {"CONTACT"} />
            <Navigation />
            <div className="loader" style={{display: loading ? "block" : "none"}}></div>
            <div className="ContactPageMain" style={{filter: loading ? "blur(5px)" : "none"}}>
                <div className="ContactPageLeft">
                    <ContactPageMainText />
                    <ContactPageData />
                </div>
                <div className="ContactPageRight">
                    <ContactPageForm status={getResponceStatus}/>
                </div>
            </div>
        </div>
    )
}