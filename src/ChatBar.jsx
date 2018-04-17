import React, {Component} from 'react';

class ChatBar extends Component {
    constructor(props) {
        super(props);
        console.log('this.props', this.props.currentUser);

        this.state = {
            username: this.props.currentUser,
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleChange(evt) {
        // console.log('the name of the form element:',evt.target.name);
        // console.log('the value of the form element:',evt.target.value);
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleKeyUp(evt) {
        if (evt.key === 'Enter') {
            console.log('Enter key pressed');
            console.log('state:', this.state);
            const {username, content} = this.state;
            this.props.onKeyUp({username, content});
            this.setState({
                content: ''
            })
        }   
    }

  render() {
    console.log('Rendering <ChatBar/>');
    return (
    <footer className="chatbar">
            <input className="chatbar-username" name="username" type="text" onChange={this.handleChange} value={this.state.username} placeholder="Anonymous"/>
            <input className="chatbar-message" name="content" type="text" onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.content} placeholder="Type a message and hit ENTER" />

    </footer>
    );
  }
}
export default ChatBar;