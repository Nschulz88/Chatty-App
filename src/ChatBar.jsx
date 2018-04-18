import React, {Component} from 'react';

class ChatBar extends Component {
    constructor(props) {
        super(props);
        console.log('this.props', this.props.currentUser);

        this.state = {
            type: 'postMessage',
            username: this.props.currentUser,
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleKeyUpForNameChange = this.handleKeyUpForNameChange.bind(this);
        
    }

    handleChange(evt) {
        console.log('the name of the form element:',evt.target.name);
        console.log('the name of the form value:',evt.target.value);
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleKeyUp(evt) {
        console.log('Logging evt-------------> ', evt)
        if (evt.key === 'Enter') {
            console.log('Enter key pressed');
            console.log('state:', this.state);
            const {username, content, type} = this.state;
            this.props.onKeyUp({ username, content, type });
            this.setState({
                content: ''
            })
        }   
    }

    handleKeyUpForNameChange(evt) {
        console.log('Logging evt-------------> ', evt)
        if (evt.key === 'Enter') {
            console.log('state:', this.state);
            const {username} = this.state;
            this.props.changeUsername(username);
        }   
    }

  render() {
    console.log('Rendering <ChatBar/>');
    return (
    <footer className="chatbar">
            <input className="chatbar-username" name="username" type="text" onKeyUp={this.handleKeyUpForNameChange} onChange={this.handleChange} value={this.state.username} placeholder="Anonymous"/>
            <input className="chatbar-message" name="content" type="text" onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.content} placeholder="Type a message and hit ENTER" />

    </footer>
    );
  }
}
export default ChatBar;