import React, { Component } from 'react'

export default class Six extends Component {
  state = {
      display: "",
      countABC: 0,
      count123: 0,
  };

  displayABC = () => {
    this.setState({
      display: "ABC",
    });
  };

  display123 = () => {
    this.setState({
      display: "123",
    });
  };
    
 //to combine these into one fuction
    displayMessage = (message) => {
        if (message === "ABC") {
            this.setState({
              display: message,
              countABC: this.state.countABC + 1,
              count123: this.state.count123,
            });
        }
        else {
            this.setState({
              display: message,
              countABC: this.state.countABC,
              count123: this.state.count123 + 1,
            });
            
        }
    }

  render() {
    return (
      <div>
        <h1>{this.state.display}</h1>
        <h2>ABC button pressed: {this.state.countABC} times </h2>
        <h2>123 button pressed: {this.state.count123} times </h2>
        <button onClick={() => this.displayMessage("ABC")}>ABC</button>
        <button onClick={() => this.displayMessage("123")}>123</button>
      </div>
    );
  }
}
