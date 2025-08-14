import { useState } from "react"
import ContactSender from "./contact.sender"

export default function ContactPageForm ({status}) {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    
    const onHandleChange = (e) => {
        const {name, value} = e.target
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
        setError(false)
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        if (!data.name || !data.email || !data.phone || !data.question) return setError(true)
        status(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        await ContactSender(data)
        status(false)
        window.location.reload()
    }

    return(
        <div className="ContactPageForm">
            <form onSubmit={onHandleSubmit}>
                <div>
                    <label htmlFor = "name">Enter your name</label>
                    <input id="name" name = "name" onChange={onHandleChange} />
                </div>
                <div>
                    <label htmlFor = "email">Enter your email</label>
                    <input id="email" name = "email" type="email" onChange={onHandleChange} />
                </div>
                <div>
                    <label htmlFor = "phone">Enter your phone number</label>
                    <input id = "phone" name = "phone" type="tel" onChange={onHandleChange} />
                </div>
                <div>
                    <label htmlFor = "question">Enter your question</label>
                    <input id = "question" name = "question" onChange={onHandleChange} />
                </div>
                <div className="Button">
                    <button type="submit">Submit</button>
                </div>
                <div style={{display: error === true ? "block" : "none", textAlign: "center", fontFamily: "'Bebas Neue', sans-serif", margin: "0", fontSize: "clamp(1.25rem, 0.893rem + 1.786vw, 3.75rem)"}}>
                    <p style={{margin: "0"}}>Please fill in all the fields</p>
                </div>
            </form>
        </div>
    )
}