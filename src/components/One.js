import React, { Component } from 'react'

class One extends Component {
    state = {
        s1: "React.js",
        s2: "Javascript",
        s3: "Node.js",
    }

    showStrings = () => {
        const { s1, s2, s3 } = this.state;
        return (
            <React.Fragment>
                <h1>{s1}</h1>
                <h1>{s2}</h1>
                <h1>{s3}</h1>
            </React.Fragment>
        )
    }

    render() {
        return <React.Fragment>{this.showStrings()}</React.Fragment>;
    }
}

export default One;
