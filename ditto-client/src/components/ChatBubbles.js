import React, {useState, useEffect} from "react";
import { ChatFeed, Message } from "../modules/react-chat-ui-omar-fork"; // changed bubble style a bit
import { grabConversationHistory } from "../models/db";


export default function ChatBubble() {

    // First message from Ditto
    const temp = {
      messages: [
        new Message({
          id: 1,
          message: "Hi! I'm Ditto."
        })
      ]
    };

    const [data, setData] = useState(temp)

    const createConversation = (hist) => {
      let prompts = hist.prompts
      let responses = hist.responses
      for (var key in prompts) {
        if (prompts.hasOwnProperty(key)) {
          let prompt = prompts[key]
          let response = responses[key]
          console.log(prompt, response)
          temp.messages.push(
            new Message({
              id: 0,
              message: prompt
            })
          )
          temp.messages.push(
            new Message({
              id: 1,
              message: response
            })
          )
        }
      }
    }

    useEffect(() => {
      setTimeout(async() => {
        let hist = await grabConversationHistory()
        try {
          createConversation(hist)
        } catch (e) {
          console.log(e)
        }
        setData(temp)
      }, 1000)
    }, [temp])
    
    return (
      <ChatFeed
        messages={data.messages} // Boolean: list of message objects
        isTyping={data.is_typing} // Boolean: is the recipient typing
        hasInputField={false} // Boolean: use our input, or use your own
        showSenderName // show the name of the user who sent the message
        bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
        // JSON: Custom bubble styles
        bubbleStyles={{
          text: {
            fontSize: 20
          },
          chatbubble: {
            borderRadius: 60,
            padding: 20
          }
        }}
      />
    );
  }
