import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    // this.socket = this.createSocketFunction()
  

    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []};
    this.addMessage = this.addMessage.bind(this);
  }

  // createSocketFunction(){
  //   let socket = new WebSocket('ws://localhost:3001');
  //   socket.onmessage=(event)=>{
  //     console.log("hi");
  //   };
  //   return socket;
  // }
  componentDidMount() {
    console.log('componentDidMount <App />');
    let socket = new WebSocket('ws://localhost:3001');
    this.socket = socket;
    //this.socket = socket;
    // console.log('connecting has begun!  inform the peasants!')
    // this.socket.onopen = function (event) {
    //   console.log('event', event);
    //   console.log('console.logged Connected to server');
    //   socket.send('sdfkjhsfkhsd;fjhs;r');
    // };
   
    // socket.onmessage = function(str) {
    //   console.log('Someone sent this: ', str);
    //   //socket.send('Connected to server');
    // };


  }

  addMessage(newMessageDetails) {
    console.log('newMessageDetails', newMessageDetails);
    const oldMessageList = this.state.messages;
    const newMessageList = [...oldMessageList, {username: newMessageDetails.username || 'Anonymous', content: newMessageDetails.content}];
    console.log(newMessageList);
    this.setState({ 
      messages: newMessageList 
    });
  
    this.socket.send(JSON.stringify(newMessageDetails));
  }

  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar onKeyUp={this.addMessage} currentUser={this.state.currentUser.name} />
      </div>
    );
  }
}
export default App;
