import React, { Component } from 'react'

export default class CourseForm extends Component {
    state = {
        course: this.props.course,
    };

    handleChange = (e) => {
        e.preventDefault();
        const copyOfState = { ...this.state };
        copyOfState.course[e.currentTarget.name] = e.currentTarget.value;
        this.setState(copyOfState);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.course);
    }
    
  render() {
      const { courseName, faculty, lectures } = this.state.course;
      const { edit } = this.props;

    return (
        <div>
            <h4>{edit ? "Edit Course Details" : "Add a New Course"}</h4>
            <div>
        <label>Course Name</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="courseName"
          name="courseName"
          value={courseName}
          placeholder="Enter Course Name"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label>Faculty</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="faculty"
          name="faculty"
          value={faculty}
          placeholder="Enter Faculty"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label>Lectures</label>
        <br />
        <input
          type="number"
          className="form-control"
          id="lectures"
          name="lectures"
          value={lectures}
          placeholder="Enter # of Lectures"
          onChange={this.handleChange}
        />
                <br />
                </div>
        <br />
            <button onClick={this.handleSubmit}>{edit ? "Save Changes" : "Submit"}</button>
      </div>
    );
  }
}
