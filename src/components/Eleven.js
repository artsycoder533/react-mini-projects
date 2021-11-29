import React, { Component } from "react";

export default class Eleven extends Component {
  state = {
    codeType: -1,
    codeTypes: ["A - I", "J - R", "S - Z", "0 - 9", "Special Characters"],
    codeMaker: [
      "ABCDEFGHI",
      "JKLMNOPQR",
      "STUVWXYZ",
      "0123456789",
      "!@$#&*^%~=+-/_",
    ],
    codes: [],
    newCode: "",
    errorMessage: "",
  };

  displayCodeTypes = () => {
    const { codeTypes } = this.state;
    return codeTypes.map((type, index) => {
      return (
        <button onClick={() => this.setIndex(index)} key={Math.random()}>
          {type}
        </button>
      );
    });
  };

  setIndex = (index) => {
    this.setState({
      codeType: index,
      codeTypes: this.state.codeTypes,
      codeMaker: this.state.codeMaker,
      codes: this.state.codes,
      newCode: this.state.newCode,
      errorMessage: "",
    });
  };

  addLetterToCode = (letter) => {
    const updatedCode = this.state.newCode.concat(letter);
    this.setState({
      codeType: this.state.codeType,
      codeTypes: this.state.codeTypes,
      codeMaker: this.state.codeMaker,
      codes: this.state.codes,
      newCode: updatedCode,
      errorMessage: "",
    });
  };

  addCodeToList = () => {
    const codeToAdd = this.state.newCode;
    if (this.state.codes.includes(codeToAdd)) {
      this.setState({
        codeType: this.state.codeType,
        codeTypes: this.state.codeTypes,
        codeMaker: this.state.codeMaker,
        codes: this.state.codes,
        newCode: this.state.newCode,
        errorMessage: "The list already contains this code!",
      });
    } else {
      const copyOfCodes = this.state.codes;
      copyOfCodes.push(codeToAdd);
      this.setState({
        codeType: -1,
        codeTypes: this.state.codeTypes,
        codeMaker: this.state.codeMaker,
        codes: [...copyOfCodes],
        newCode: "",
        errorMessage: "",
      });
    }
  };

  deleteLastLetter = () => {
    const copyOfCode = this.state.newCode;
    const updatedCode = copyOfCode.substr(0, copyOfCode.length - 1);
    this.setState({
      codeType: this.state.codeType,
      codeTypes: this.state.codeTypes,
      codeMaker: this.state.codeMaker,
      codes: this.state.codes,
      newCode: updatedCode,
      errorMessage: "",
    });
  };

  clearCode = () => {
    this.setState({
      codeType: this.state.codeType,
      codeTypes: this.state.codeTypes,
      codeMaker: this.state.codeMaker,
      codes: this.state.codes,
      newCode: "",
      errorMessage: "",
    });
  };

  displayCodeMaker = () => {
    const { codeType, codeMaker, codeTypes, newCode, errorMessage } =
      this.state;
    let splitLetters = codeMaker[codeType].split("");
    return (
      <React.Fragment>
        <h4>Code Type: {codeTypes[codeType]}</h4>
        <h4>Code so far: {newCode}</h4>
        <small style={{ color: "red", fontWeight: "bold" }}>
          {errorMessage}
          <br />
        </small>
        {splitLetters.map((letter, index) => {
          return (
            <button
              onClick={() => this.addLetterToCode(letter)}
              key={Math.random()}>
              {letter}
            </button>
          );
        })}
        <br />
        <button onClick={() => this.addCodeToList()}>Add New Code</button>
        <button onClick={() => this.deleteLastLetter()}>Backspace</button>
        <button onClick={() => this.setIndex(-1)}>Cancel</button>
        <button onClick={() => this.clearCode()}>Clear Code</button>
        <br />
      </React.Fragment>
    );
  };

  render() {
    const { codeType, codes } = this.state;

    return (
      <div>
        <h1>Create New Code</h1>
        {codeType >= 0 ? this.displayCodeMaker() : ""}
        {this.displayCodeTypes()}
        <h3>List of Codes Created</h3>
        <ul>
          {codes.map((code) => {
            return <li key={Math.random()}>{code}</li>;
          })}
        </ul>
      </div>
    );
  }
}
