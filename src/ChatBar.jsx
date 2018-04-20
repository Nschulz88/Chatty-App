import React, {Component} from 'react';
// library to set prop types - (helps to detect issues earlier)
import PropTypes from 'prop-types';


class ChatBar extends Component {
    constructor(props) {
        super(props);

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
      this.setState({ [evt.target.name]: evt.target.value });
    }

    handleKeyUp(evt) {
			if (evt.key === 'Enter') {
					const {username, content, type} = this.state;
					this.props.sendMessage({ username, content, type });
					this.setState({
						content: ''
					})
			}   
    }

    handleKeyUpForNameChange(evt) {
			if (evt.key === 'Enter') {
				const {username} = this.state;
				this.props.changeUsername(username);
			}   
    }

  render() {
    ChatBar.propTypes = {
			changeUsername: PropTypes.function,
			sendMessage: PropTypes.function,
			currentUser: PropTypes.string,
		}

    return (
			<footer className="chatbar">
				<input className="chatbar-username" name="username" type="text" onKeyUp={this.handleKeyUpForNameChange} onChange={this.handleChange} value={this.state.username} placeholder="Anonymous"/>
				<input className="chatbar-message" name="content" type="text" onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.content} placeholder="Type a message and hit ENTER" />
			</footer>
    );
  }
}
export default ChatBar;