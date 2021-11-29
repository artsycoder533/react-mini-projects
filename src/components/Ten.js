import React, { Component } from 'react'

export default class Ten extends Component {
    state = {
        code: "",
        errorMessage: "",
        buttons: ["A", "B", "C", "1", "2", "3"],
        codes: [],
    }

    addLetterToCode = (letter) => {
        const string = this.state.code.concat(letter);
        this.setState({
            code: string,
            errorMessage: this.state.errorMessage,
            buttons: this.state.buttons,
            codes: this.state.codes,
        });
    }

    addCodeToList = () => {
        const codeToAdd = this.state.code;
        let copyOfCodes = [...this.state.codes];
        if (this.state.codes.includes(codeToAdd)) {
            this.setState({
              code: this.state.code,
              errorMessage: "This code has already been created, please try another...",
              buttons: this.state.buttons,
              codes: this.state.codes,
            });
        }
        else {
            copyOfCodes.push(codeToAdd);
            this.setState({
              code: "",
              errorMessage: "",
              buttons: this.state.buttons,
              codes: [...copyOfCodes],
            });
        }
    }

    clearCode = () => {
        this.setState({
            code: "",
            errorMessage: "",
            buttons: this.state.buttons,
            codes: this.state.codes,
        });
    }

    deleteLastLetter = () => {
        const copyOfCode = this.state.code;
        let trimmedString = copyOfCode.substr(0, copyOfCode.length - 1);
        console.log(trimmedString);
        this.setState({
            code: trimmedString,
            errorMessage: "",
            buttons: this.state.buttons,
            codes: this.state.codes,
        });
    }

    render() {
        const { code, errorMessage, buttons, codes } = this.state;
        return (
            <div>
                <h1>Create New Code</h1>
                <small style={{color: "red", fontWeight: "bold"}}>{errorMessage}</small>
                <h4>Code so far: <span>{code}</span></h4>
                {buttons.map(button => {
                    return (
                        <button key={Math.random()} onClick={()=>this.addLetterToCode(button)}>{button}</button>
                    )
                })}
                <br />
                <button onClick={() => this.addCodeToList()}>Add New Code</button>
                <button onClick={()=> this.deleteLastLetter()}>Backspace</button>
                <button onClick={()=>this.clearCode()}>Clear Code</button>
                <h2>List of Created Codes: </h2>
                <ul>
                    {codes.map(code => {
                    return <li key={Math.random()}>{code}</li>;
                })}
                </ul>
            </div>
        )
    }
}
