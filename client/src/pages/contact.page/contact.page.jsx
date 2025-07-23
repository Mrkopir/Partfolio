import Navigation from "../../reuseble/nav/nav";
import MainEnterMotion from "../../reuseble/enter.motion/main.enter.motion";
import ContactPageForm from "./contact.page.form";
import ContactPageData from "./contact.page.data";
import ContactPageMainText from "./contact.page.main.text";

import "./contact.page.css"

export default function ContactPage () {
    return (
        <div className="ContactPage">
            <MainEnterMotion text = {"CONTACT"} />
            <Navigation />
            <div className="ContactPageMain">
                <div className="ContactPageLeft">
                    <ContactPageMainText />
                    <ContactPageData />
                </div>
                <div className="ContactPageRight">
                    <ContactPageForm />
                </div>
            </div>
        </div>
    )
}