import React, { Component } from "react";
import Visitor from "./Visitor";

export default class VisitorSystem extends Component {
  state = {
    visitors: [
      { id: 101, name: "Jack", status: "Outside" },
      { id: 102, name: "Tim", status: "Outside" },
      { id: 235, name: "Mary", status: "Outside" },
      { id: 107, name: "Steve", status: "Outside" },
      { id: 96, name: "Anna", status: "Outside" },
      { id: 126, name: "Kathy", status: "Outside" },
      { id: 129, name: "Meg", status: "Outside" },
      { id: 108, name: "Bob", status: "Outside" },
    ],
    queue: [],
  };

  getInsideCount = () => {
    return this.state.visitors.reduce((acc, curr) => {
      //if the current status is inside, add 1 to the count
      return acc + (curr.status === "Inside" ? 1 : 0);
    }, 0);
  };

  handleEnter = (id) => {
    let copyOfState = { ...this.state };
    let visitor = copyOfState.visitors.find((vtr) => {
      return vtr.id === id;
    });
    let insideCount = this.getInsideCount();
    console.log(insideCount);
    //if 2 people are already inside, change status to waiting
    if (insideCount === 2) {
      visitor.status = "Waiting";
      copyOfState.queue.push(visitor);
    } else {
      visitor.status = "Inside";
    }

    this.setState(copyOfState);
  };

  handleExit = (id) => {
    let copyOfState = { ...this.state };
    let visitor = copyOfState.visitors.find((vtr) => {
      return vtr.id === id;
    });
    visitor.status = "Outside";
    //if someone just left and the queue inst empty
    if (copyOfState.queue.length > 0) {
      //remove the first person in the queue and change their status to inside
      let v1 = copyOfState.queue.shift();
      v1.status = "Inside";
    }
    this.setState(copyOfState);
  };

  render() {
    const { visitors, queue } = this.state;
    return (
      <div>
        <h4>
          Inside ={this.getInsideCount()} Queue={queue.length}
        </h4>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor) => {
              return (
                <Visitor
                  key={Math.random()}
                  visitor={visitor}
                  onEnter={this.handleEnter}
                  onExit={this.handleExit}
                />
              );
            })}
          </tbody>
        </table>
        <h4>Queue</h4>
        <ul>
          {queue.map((visitor) => {
            return <li>{visitor.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
