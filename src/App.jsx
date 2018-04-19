import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    // this.socket = this.createSocketFunction()
  

    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      activeUsers: 0
    };

    // this.addMessage = this.addMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    this.socket = new WebSocket('ws://localhost:3001');
    console.log('connecting has begun!  inform the peasants!')
    this.socket.addEventListener('message', (event) => {
      console.log('I am in my Client socket event listener, logging event', event);
      const messageObject = JSON.parse(event.data);
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
    console.log('LOGGING content fomr the sendMessage function: ', contentObject);
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
   
  // addMessage(newMessageDetails) {
  //   console.log('newMessageDetails', newMessageDetails);
  //   const oldMessageList = this.state.messages;
  //   const newMessageList = [...oldMessageList, {username: newMessageDetails.username || 'Anonymous', content: newMessageDetails.content}];
  //   console.log(newMessageList);
  //   this.setState({ 
  //     messages: newMessageList 
  //   });
  //   this.socket.send(JSON.stringify(newMessageDetails));
  // }

  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <p className="active-users">{this.state.activeUsers} users online</p>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar onKeyUp={this.sendMessage} changeUsername={this.changeUsername} currentUser={this.state.currentUser.name} />
      </div>
    );
  }
}
export default App;
