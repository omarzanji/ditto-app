/**
 * Send button and form for sending Ditto a message.
 */
import './SendMessage.css'
import React, {useState, useEffect} from "react";
import { sendPrompt } from "../models/api";

export default function SendMessage() {

    const [message, setMessage] = useState("");

    const [formHeight, setFormHeight] = useState(50)

    const handleSubmit = async(event) => {
        event.preventDefault();
        await sendPrompt(message)
        setMessage("")
        }

    useEffect(() => {

        function handleResize() {
            var x = window.innerWidth
            var y = window.innerHeight
            if (x > 600 && y > 700) {
                setFormHeight(50)
            } else {
                setFormHeight(30)
            }
        }
        handleResize() // apply size rules on render
        window.addEventListener('resize', handleResize)
    
    })

    return (
        <div className='Contents' >
            <div className='Bar'>
                <p className='Label'>Message: </p>
                <form className='Form' style={{height: formHeight}} onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}