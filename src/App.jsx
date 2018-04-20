import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: 'Anonymous'}, // if currentUser is not defined, it means the user is Anonymous
      messages: [],
      activeUsers: 0,
      userColor: ''
    };

    this.sendMessage = this.sendMessage.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.addEventListener('message', (event) => {
      const messageObject = JSON.parse(event.data);
      // Checks the incoming message (from server) for type and sets state according to type
      switch(messageObject.type) {
        case 'incomingMessage':
          this.setState({
            messages: this.state.messages.concat(messageObject),
          });
          break;
        case 'incomingNotification':
          this.setState({
            messages: this.state.messages.concat(messageObject),
          });
        break;
        case 'activeUserCount':
        this.setState({
          activeUsers: messageObject.activeUsers,
        });
        break;
        default:
          throw new Error('Unknown event type ' + messageObject.type);
      }
    });
  } 

  sendMessage(contentObject) {
    this.socket.send(JSON.stringify(contentObject));
  }

  changeUsername(username) {
    let content = this.state.currentUser.name + ' changed their name to ' + username + '.';
    let messageObject = {
      content: content,
      type: 'postNotification'
    };

    this.socket.send(JSON.stringify(messageObject));
    this.setState({ currentUser: { name: username }});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty App 💬</a>
          <p className="active-users">{this.state.activeUsers} users online</p>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar
          sendMessage={this.sendMessage}
          changeUsername={this.changeUsername}
          currentUser={this.state.currentUser.name}
        />
      </div>
    );
  }
}

export default App;
