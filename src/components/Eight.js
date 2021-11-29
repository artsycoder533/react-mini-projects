import React, { Component } from 'react'

export default class Eight extends Component {
    state = {
        list1: ["Bob", "Tim", "Julia", "Steve", "Edward", "George", "Kathy"],
        list2: [],
    }
    
    removeItem = (index) => {
        const copyOfList1 = [...this.state.list1];
        const copyofList2 = [...this.state.list2];

        const swapPeron = copyOfList1.splice(index, 1);

        copyofList2.push(swapPeron);
        
        this.setState({
            list1: [...copyOfList1],
            list2: [...copyofList2],
        });
    }

    moveItem = (index) => {
        const copyOfList1 = [...this.state.list1];
        const copyofList2 = [...this.state.list2];

        const swapPeron = copyofList2[index];

        copyofList2.splice(index, 1);
        copyOfList1.push(swapPeron);

        this.setState({
          list1: [...copyOfList1],
          list2: [...copyofList2],
        });
    }

    render() {
        const { list1, list2 } = this.state;

        return (
          <div>
            <h1>List 1</h1>
            <ul>
              {list1.map((item, index) => {
                return (
                  <li key={index} onClick={() => this.removeItem(index)}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <h1>List 2</h1>
            <ul>
              {list2.map((item, index) => {
                  return (
                    <React.Fragment>
                      <li key={index + 3}>
                        {item}{" "}
                        <button onClick={() => this.moveItem(index)}>X</button>
                      </li>
                    </React.Fragment>
                  );
              })}
            </ul>
          </div>
        );
    }
}
