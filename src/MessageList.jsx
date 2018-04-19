import React, {Component} from 'react';
import Message from './Message.jsx';



class MessageList extends Component {
constructor() {
    super();
}
  render() {
    console.log("Rendering <MessageList/>", this.props);
    const messageText = this.props.messages.map((message) => (
      <Message 
        key={message.id} 
        datatype={message.type}
        content={message.content}
        username={message.username}
        usercolor={message.userColor}
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