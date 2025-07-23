import { useState } from "react"
import ContactSender from "./contact.sender"

export default function ContactPageForm () {
    const [data, setData] = useState({})
    
    const onHandleChange = (e) => {
        const {name, value} = e.target
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const onHandleSubmit = async (e) => {
        await ContactSender(data)
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
            </form>
        </div>
    )
}