import React, {Component} from 'react';
import Message from './Message.jsx';
// library to set prop types - (helps to detect issues earlier)
import PropTypes from 'prop-types';


class MessageList extends Component {
constructor() {
  super();
}
  render() {

    MessageList.propTypes = {
      messages: PropTypes.array
    }

    const messageText = this.props.messages.map((message) => (
      <Message 
        key={message.id} 
        datatype={message.type}
        content={message.content}
        username={message.username}
        usercolor={message.userColor}
        userfont={message.userFont}
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