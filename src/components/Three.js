import React, { Component } from 'react'

export default class Three extends Component {
    state = {
        numbers: [4, 11, 88, 6, 7, 2021]
    };

    render() {
        const { numbers } = this.state;
        const copyOfNumbers = [...numbers];
        const copyOfNumbers2 = [...numbers];
        //ascending
        copyOfNumbers.sort((num1, num2) => num1 - num2);
        //descending
        copyOfNumbers2.sort((num1, num2) => num2 - num1);

        return (
            <ul>
                <h1>Numbers</h1>
                {numbers.map((element) => {
                    return <li>{element}</li>;
                })}
                <br />
                <h1>Sorted Numbers - Ascending</h1>
                {copyOfNumbers.map(element => {
                    return <li>{element}</li>
                })}
                <br />
                <h1>Sorted Numbers - Descending</h1>
                {copyOfNumbers2.map(element => {
                    return <li>{element}</li>
                })}
            </ul>
        );
    }
}
