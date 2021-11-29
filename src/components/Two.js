import React, { Component } from 'react'

export default class Two extends Component {
    state = {
        x: 3,
        y: 4
    };

    isPrime = (num) => {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    render() {
        const { x, y } = this.state;
        return (
            <div>
                <h1>Number 1 is {x}</h1>
                <h1>Number 2 is {y}</h1>
                <h1>Sum of {x} + {y} = {x + y}</h1>
                <h1>Larger number is {x > y ? x : y}</h1>
                <h1>Number 1 {x}, Prime is {"" + this.isPrime(x)}</h1>
                <h1>Number 2 {y}, Prime is {"" + this.isPrime(y)}</h1>
            </div>
        )
    }
}

