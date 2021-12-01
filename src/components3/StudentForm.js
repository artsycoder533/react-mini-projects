import React, { Component } from "react";

export default class StudentForm extends Component {
  state = {
    student: this.props.student,
  };

  handleChange = (e) => {
    const copyOfState = { ...this.state };
    copyOfState.student[e.currentTarget.name] = e.currentTarget.value;
    this.setState(copyOfState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //   the onSubmit method was passed as a prop from the CourseComponent since it is the single source of truth and holds all the functionality
    this.props.onSubmit(this.state.student);
  };

  render() {
    console.log(this.props);
    //   const { id, name } = this.props.student;
    const { id, name } = this.state.student;
    const { handleSubmit, student } = this.props;

    return (
      <div>
        <h4>Enroll Student in Course</h4>
        <div>
          <label>Student ID</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={id}
            placeholder="Enter Student ID"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter Student Name"
            onChange={this.handleChange}
          />
          <br />
          <br />
        </div>
        <br />
        {/* clicking enroll show add student and change the view back to 2 to show just the indidivual course details page with list of students */}
        <button onClick={this.handleSubmit}>Enroll Student</button>
      </div>
    );
  }
}
