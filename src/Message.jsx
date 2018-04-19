import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log('Rendering <Message/>');
    let thisUsersColor = this.props.usercolor;
    console.log(thisUsersColor);

    if (this.props.datatype === 'incomingNotification') {
      return (
      <div className="notification">
        <span className="notification-content">{this.props.content}</span>
      </div>
      )
    }


    return (
    <main className="messages">
        <div className="message">
          <span className="message-username" style={{color: thisUsersColor }}>{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
    </main>
    );
  }
}
export default Message;