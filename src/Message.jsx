import React, {Component} from 'react';

class Message extends Component {

  render() {
    console.log('Rendering <Message/>');
    let newContent = null;
    let text = this.props.content;
    let regex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?\.(?:jpe?g|gif|png)/g;
    let checkIfMatches = regex.test(text);
    let imgURL = text.match(regex); // can be an array!!

    if (checkIfMatches) {
        newContent = imgURL.map((img) => {
          return <img width="40%" src={img}/>
        })
    }

    // style={{width: '80px' }}

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
          <span className="message-username" style={{color: this.props.usercolor }}>{this.props.username}</span>
          <span className="message-content">{this.props.content} <br /> {newContent}</span>
        </div>
    </main>
    );
  }
}
export default Message;