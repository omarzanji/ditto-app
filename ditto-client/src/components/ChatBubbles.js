import React from "react";
import { ChatFeed, Message } from "../modules/react-chat-ui-omar-fork"; // changed bubble style a bit

class ChatBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        new Message({
          id: 1,
          message: "Hi! I'm Ditto. How can I assist you?"
        }), // Gray bubble
        new Message({ id: 0, message: "Turn off the lights" }) // Blue bubble
      ]
    };
  }

  render() {
    return (
      <ChatFeed
        messages={this.state.messages} // Boolean: list of message objects
        isTyping={this.state.is_typing} // Boolean: is the recipient typing
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
}
export default ChatBubble;