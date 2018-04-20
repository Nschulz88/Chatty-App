import React, {Component} from 'react';
// library to set prop types - (helps to detect issues earlier)
import PropTypes from 'prop-types';


class Message extends Component {
  render() {

    Message.propTypes = {
      messages: PropTypes.string,
      datatype: PropTypes.string,
      content: PropTypes.string,
      usercolor: PropTypes.string,
      username: PropTypes.string,
    }

    let newContent = null;
    let text = this.props.content;
    // RedEx to find any image URL inside of the sent message text
    let regex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?\.(?:jpe?g|gif|png)/g;
    let checkIfMatches = regex.test(text);
    let imgURL = text.match(regex);

    if (checkIfMatches) {
        newContent = imgURL.map((img) => {
          return <img width="40%" src={img}/>
        })
    }

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