import React, { Component } from "react";

export default class Counter extends Component {

  render() {
    const { counter, deleteCounter, incrementCount } = this.props;
      const { alphabet, count, id } = counter;
    return (
      <h5>
        Counter: {alphabet}, Count = {count}{" "} 
        <button onClick={() => incrementCount(id)}>Increment</button>
        <button onClick={() => deleteCounter(id)}>Delete</button>
      </h5>
    );
  }
}
