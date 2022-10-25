import React, {useState, useEffect} from "react";
import { ChatFeed, Message } from "../modules/react-chat-ui-omar-fork"; // changed bubble style a bit
import { grabConversationHistory } from "../models/api";

var bubblefontSize = 14
var bubblePadding = 10

var isSaved = false
var dbOn = false

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

    const syncConversationHist = async() => {
      let hist = await grabConversationHistory()
      try {
        createConversation(hist)
      } catch (e) {
        console.log(e)
      }
    }

    const handleSaveConversation = (hist) => {
      isSaved = window.electron.store.has('prompts')
      if (isSaved) {
        let local_prompts = JSON.parse(window.electron.store.get('prompts'));
        let local_responses = JSON.parse(window.electron.store.get('responses'));
        if (hist != undefined) {
          window.electron.store.set('prompts', JSON.stringify(hist.prompts));
          window.electron.store.set('responses', JSON.stringify(hist.responses));
          return {"prompts": hist.prompts, "responses": hist.responses} 
        } else {
          return {"prompts": local_prompts, "responses": local_responses}
        }
      } else {
        window.electron.store.set('prompts', JSON.stringify(hist.prompts));
        window.electron.store.set('responses', JSON.stringify(hist.responses));
        return {"prompts": hist.prompts, "responses": hist.responses} 
      }
    }

    const createConversation = async(hist) => {
      let conversation = handleSaveConversation(hist)
      let prompts = conversation.prompts
      let responses = conversation.responses
      for (var key in prompts) {
        if (prompts.hasOwnProperty(key)) {
          let prompt = prompts[key]
          let response = responses[key]
          // console.log(prompt, response)
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
      setData(temp)
    }

    useEffect(() => {

      // used for resizing bubbles and font size with window
      function handleResize() {
        var x = window.innerWidth
        var y = window.innerHeight
        if (x > 600 && y > 700) {
          bubblefontSize = 25
          bubblePadding = 20
        } else {
          bubblefontSize = 14
          bubblePadding = 10
        }
      }
      handleResize() // apply size rules on render
      window.addEventListener('resize', handleResize)

      setTimeout(async() => {
        syncConversationHist()
      }, 1000)
    }, [temp])
    
    return (
      <ChatFeed
        messages={data.messages} // Boolean: list of message objects
        isTyping={data.is_typing} // Boolean: is the recipient typing
        hasInputField={false} // Boolean: use our input, or use your own
        showSenderName // show the name of the user who sent the message
        bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
        scrollToBottom={false}
        // JSON: Custom bubble styles
        bubbleStyles={{
          text: {
            fontSize: bubblefontSize
          },
          chatbubble: {
            borderRadius: 60,
            padding: bubblePadding
          }
        }}
      />
    );
  }
