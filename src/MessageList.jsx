import React, {Component} from 'react';
import Message from './Message.jsx';



class MessageList extends Component {
constructor() {
    super();
}
  render() {
    console.log("Rendering <MessageList/>");
    const messageText = this.props.messages.map((message, i) => (
        <Message 
        key={i} 
        type={message.type}
        content={message.content}
        username={message.username}
        />
      ));

    return (
    <main className="messages">
    {messageText}
    </main>
    );
  }
}
export default MessageList;