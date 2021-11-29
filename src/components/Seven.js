import React, { Component } from "react";

export default class Seven extends Component {
  state = {
    people: [
      {
        name: "Jack",
        age: 25,
        skills: "Javascript, React",
        email: "jack@email.com",
        mobile: "2345441414",
      },
      {
        name: "Anna",
        age: 29,
        skills: "Node.js, MongoDB",
        email: "anna@email.com",
        mobile: "781120053",
      },
      {
        name: "Steve",
        age: 31,
        skills: "Android App Development",
        email: "steve@email.com",
        mobile: "9678124493",
      },
    ],
    indexOfPerson: -1,
    showContact: false,
  };

  setIndex = (index) => {
    this.setState({
      people: [...this.state.people],
      indexOfPerson: index,
      showContact: false,
    });
  };

  showPerson = () => {
    const { people, indexOfPerson, showContact } = this.state;

    return (
      <React.Fragment>
        <br />
        Name: {people[indexOfPerson].name}
        <br />
        Age: {people[indexOfPerson].age}
        <br />
        Skills: {people[indexOfPerson].skills}
        <br />
        <button onClick={() => this.showContact()}>Contact Details</button>
        {showContact ? (
          <React.Fragment>
            <br />
            Email: {people[indexOfPerson].email}
            <br />
            Mobile: {people[indexOfPerson].mobile}
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  };

  showContact = () => {
    this.setState({
      people: [...this.state.people],
      indexOfPerson: this.state.indexOfPerson,
      showContact: true,
    });
  };

  render() {
    const { people, indexOfPerson } = this.state;
    return (
      <div>
        {people.map((person, index) => {
          const { name } = person;
          return (
            <button key={index} onClick={() => this.setIndex(index)}>
              {name}
            </button>
          );
        })}
        {/* if indexOfPerson is greater than zero, show person at that index otherwise do nothing */}
        {indexOfPerson >= 0 ? this.showPerson() : ""}
      </div>
    );
  }
}
