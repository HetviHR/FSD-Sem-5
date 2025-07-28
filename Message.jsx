import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "CHARUSAT!!!!"
    };
  }

  changeMessage = () => {
    this.setState({
      message: "CSPIT-CSE!!"
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to - {this.state.message}</h1>
        <button onClick={this.changeMessage}>Click</button>
      </div>
    );
  }
}

export default Message;
