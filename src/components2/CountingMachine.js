import React, { Component } from "react";
import Counter from "./Counter";

export default class CountingMachine extends Component {
  state = {
    counters: [
      { id: 12, alphabet: "A", count: 0 },
      { id: 23, alphabet: "B", count: 0 },
      { id: 7, alphabet: "C", count: 0 },
      { id: 16, alphabet: "D", count: 0 },
      ],
      data: "",
  };

  deleteCounter = (id) => {
    let copyOfState = { ...this.state };
    const index = copyOfState.counters.findIndex((counter) => {
      return id === counter.id;
    });
    copyOfState.counters.splice(index, 1);
    this.setState(copyOfState);
  };

  resetAllCounters = () => {
    const copyOfState = { ...this.state };
    const resetArr = copyOfState.counters.map((counter) => ({
      id: counter.id,
      alphabet: counter.alphabet,
      count: 0,
    }));
      copyOfState.counters = resetArr;
      copyOfState.data = "";
    this.setState(copyOfState);
  };

  incrementCount = (id) => {
    let copyOfState = { ...this.state };
    const counter = copyOfState.counters.find((counter) => {
      return id === counter.id;
    });
      counter.count++;
      copyOfState.data += counter.alphabet;
    this.setState(copyOfState);
  };

  render() {
    const { counters, data } = this.state;
    return (
      <React.Fragment>
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              deleteCounter={this.deleteCounter}
              incrementCount={this.incrementCount}
            />
          );
        })}
        <button onClick={() => this.resetAllCounters()}>
          Reset All Counters
            </button>
            <h6>Alphabets = {data}</h6>
      </React.Fragment>
    );
  }
}
