import React, { Component } from "react";

export default class SimpleForm extends Component {
  //pass in state as prop from main component set the local state equal to this
  state = {
    person: this.props.person,
  };

  handleChange = (e) => {
    e.preventDefault();
    const copyOfState = { ...this.state };

    //handling multiple inputs using bracket notation
    copyOfState.person[e.currentTarget.name] = e.currentTarget.value;

    this.setState(copyOfState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //onSubmit passed in as props from main component, pass in the local state as a parameter
    this.props.onSubmit(this.state.person);
  };

  render() {
    const { name, age } = this.state.person;
    const { edit } = this.props;
    return (
      <div>
        {/* if edit mode is true, display edit details otherwise display enter details */}
        <h5>{edit ? "Edit Details of Person" : "Add a New Person"}</h5>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter Name"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={age}
            placeholder="Enter Age"
            onChange={this.handleChange}
          />
        </div>
        <br />
        {/* if in edit mode, the button displays save changes, if not displays submit */}
        <button onClick={this.handleSubmit}>
          {edit ? "Save Changes" : "Submit"}
        </button>
      </div>
    );
  }
}
