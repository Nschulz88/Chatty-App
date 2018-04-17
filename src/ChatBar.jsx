import React, {Component} from 'react';

class ChatBar extends Component {
    constructor(props) {
        super(props);
        console.log('this.props', this.props.currentUser);

        this.state = {
            username: '',
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        // console.log('the name of the form element:',evt.target.name);
        // console.log('the value of the form element:',evt.target.value);
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(evt) {
            evt.preventDefault();
            console.log('is this even happening?');
            console.log('evt.target.elements:', evt.target.elements);
            this.props.onSubmit(this.state);
            
    }

  render() {
    console.log('Rendering <ChatBar/>');
    return (
    <footer className="chatbar">
        <form onSubmit={this.handleSubmit}>
            <input className="chatbar-username" name="username" type="text" onChange={this.handleChange} value={this.state.username} placeholder={this.props.currentUser.name} />
            <input className="chatbar-message" name="content" type="text" onChange={this.handleChange} value={this.state.content} placeholder="Type a message and hit ENTER" />
            <input type="submit" value="Submit" />
        </form>
    </footer>
    );
  }
}
export default ChatBar;