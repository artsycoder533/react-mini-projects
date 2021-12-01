import React, { Component } from "react";
import SimpleForm from "./SimpleForm";

export default class MainComponent extends Component {
  state = {
    people: [
      { name: "Jack", age: 23 },
      { name: "Natasha", age: 33 },
    ],
    view: 0, //show persons & button, 1-show form
    editPersonIndex: -1, //not editing, index 0 or higher tells the index of person were editing
  };

  handlePerson = (person) => {
    const copyOfState = this.state;
    //if we are in edit mode target the person at the index of the edit button click otherwise, add the new person to the list
    copyOfState.editPersonIndex >= 0
      ? (copyOfState.people[copyOfState.editPersonIndex] = person)
      : copyOfState.people.push(person);
    //   when handle person was called the view is one to show the form, so when a perso is added, we need to set the view back to 0 to show the table with the new person added.
    copyOfState.view = 0;
    //set the index back to -1 to turn off editing mode, so the edit form wont show up when you try to add a new person
    copyOfState.editPersonIndex = -1;
    this.setState(copyOfState);
  };

  handleEdit = (index) => {
    const copyOfState = this.state;
    //change the view so the form is shown
    copyOfState.view = 1;
    //change the editPersonIndex to switch to edit mode
    copyOfState.editPersonIndex = index;
    this.setState(copyOfState);
  };

  showForm = () => {
    const copyOfState = this.state;
    copyOfState.view = 1;
    this.setState(copyOfState);
  };

  render() {
    let person = { name: "", age: "" };
    let { people, view, editPersonIndex } = this.state;
    return (
      //if view is 0, show all people, otherwise show form
      view === 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {people.map((person, index) => {
                const { name, age } = person;
                return (
                  <tr key={Math.random()}>
                    <td style={{ border: "1px solid black" }}>{name}</td>
                    <td style={{ border: "1px solid black" }}>{age}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.handleEdit(index);
                        }}>
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={() => this.showForm()}>Add New Person</button>
        </div>
      ) : (
        //if the editPersonIndex is not 0, pass in the index of the person to edit otherwise pass in the default person to add with blank values for defaul form values
        //if
        <SimpleForm
          person={editPersonIndex >= 0 ? people[editPersonIndex] : person}
          onSubmit={this.handlePerson}
          //if this is true this means we are editing
          //this is a prop created to use to customize the form
          edit={editPersonIndex >= 0}
        />
      )
    );
  }
}

//the main component acts as a controller for the simple form
