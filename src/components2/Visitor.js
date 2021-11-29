import React, { Component } from "react";

export default class Visitor extends Component {
  getButton = (status, onEnter, onExit, id) => {
    //if the status is outside show enter button
    return status === "Outside" ? (
      <button style={{ backgroundColor: "green" }} onClick={() => onEnter(id)}>
        Enter
      </button>
    ) : //if status is inside show exit button
    status === "Inside" ? (
      <button style={{ backgroundColor: "yellow" }} onClick={() => onExit(id)}>
        Exit
      </button>
    ) : (
      //if status isnt outside or inside dont show a button
      ""
    );
  };

  getRowColor = (status) => {
    // if status is outside background color is lighblue, inside background color is salmon, neither, background is gold
    return status === "Outside"
      ? "lightblue"
      : status === "Inside"
      ? "salmon"
      : "gray";
  };

  render() {
    const { visitor, onEnter, onExit } = this.props;
    const { id, name, status } = visitor;

    return (
      <tr
        key={Math.random()}
        style={{ backgroundColor: this.getRowColor(status) }}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{status}</td>
        <td>{this.getButton(status, onEnter, onExit, id)}</td>
      </tr>
    );
  }
}
