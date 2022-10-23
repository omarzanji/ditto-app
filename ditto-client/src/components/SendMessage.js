/**
 * Send button and form for sending Ditto a message.
 */
import './SendMessage.css'
import React, {useState} from "react";
import { sendPrompt } from "../models/api";


export default function SendMessage() {

    const [message, setMessage] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();
        await sendPrompt(message)
        setMessage("")
      }

    return (
        <div className='Bar'>
            <p className='Label'>Message: </p>
            <form className='Form' onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <input type="submit" value="Send" />
            </form>
        </div>
        
    );
}