import React, { Component } from "react";
import CourseForm from "./CourseForm";
import StudentForm from "./StudentForm";

export default class CourseComponent extends Component {
  state = {
    courses: [
      {
        courseName: "HTML",
        faculty: "Sandra Jenkins",
        lectures: 15,
        students: [],
      },
      {
        courseName: "CSS",
        faculty: "Russell Tolliver",
        lectures: 25,
        students: [],
      },
      {
        courseName: "Javascript",
        faculty: "Bill Chavis",
        lectures: 40,
        students: [],
      },
      {
        courseName: "React",
        faculty: "Steve Williams",
        lectures: 28,
        students: [],
      },
    ],
    view: 0,
    editCourseIndex: -1,
    viewCourseIndex: -1, // the course we are viewing
  };

  handleCourse = (course) => {
    const copyOfState = { ...this.state };
    copyOfState.editCourseIndex >= 0
      ? (copyOfState.courses[copyOfState.editCourseIndex] = course)
      : copyOfState.courses.push(course);
    copyOfState.view = 0;
    copyOfState.editCourseIndex = -1;
    this.setState(copyOfState);
  };

  handleStudent = (student) => {
    const copyOfState = { ...this.state };
    //   select the course inside the courses array at the index equal to the view course index, then select the students array for the course and add the student to that course.
    copyOfState.courses[copyOfState.viewCourseIndex].students.push(student);
    //update the view to show individual course details page
    copyOfState.view = 2;
    this.setState(copyOfState);
  };

  handleEdit = (index) => {
    const copyOfState = this.state;
    copyOfState.view = 1;
    copyOfState.editCourseIndex = index;
    this.setState(copyOfState);
  };

  handleDelete = (index) => {
    const copyOfState = { ...this.state };
    copyOfState.courses.splice(index, 1);
    this.setState(copyOfState);
  };

  showForm = () => {
    const copyOfState = this.state;
    copyOfState.view = 1;
    this.setState(copyOfState);
  };

  viewCourseDetails = (index) => {
    const copyOfState = { ...this.state };
    //change the view to 2 to show individual course index page
    copyOfState.view = 2;
    //change the viewCourseIndex to set the field
    copyOfState.viewCourseIndex = index;
    this.setState(copyOfState);
  };

  showCourseList = () => {
    //   sets view back to default all courses list
    const copyOfState = { ...this.state };
    //set view back to zero to show the all courses list
    copyOfState.view = 0;
    //set course index to -1 so that it reset to show default course list page
    copyOfState.viewCourseIndex = -1;
    this.setState(copyOfState);
  };

  showStudentForm = () => {
    const copyOfState = { ...this.state };
    // change view to 3 to show student form embedded into individual course details page
    copyOfState.view = 3;
    this.setState(copyOfState);
  };

  showCourseDetails = () => {
    //shows individual course details on top, list of students enrolled in that class, and then a button to add a new student
    const { courses, viewCourseIndex, view } = this.state;
    //desructure course details of the individual course that corresponds to the viewCourseIndex (which course did the user click on # of students field, this is why its set equal to the courses array at the viewCourseIndex)
    const { courseName, faculty, lectures, students } =
      courses[viewCourseIndex];
    console.log(students);
    return (
      // show individual course details
      <div>
        <h5>Course Name: {courseName}</h5>
        <h5>Faculty: {faculty}</h5>
        <h5># Lectures: {lectures}</h5>
        <h5># of Students: {students.length}</h5>
        {/* show table of students */}
        {/* if there are no students, show nothing (empty string) */}
        {students.length === 0 ? (
          ""
        ) : (
          // if students list is not empty, show students table
          <table style={{ border: "1px solid black" }}>
            <thead>
              <tr style={{ border: "1px solid black" }}>
                <th style={{ border: "1px solid black" }}>Student Name</th>
                <th style={{ border: "1px solid black" }}>Student ID</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                const { name, id } = student;
                console.log(student, name, id);
                return (
                  <tr key={Math.random()}>
                    {/* student.id, student.name */}
                    <td style={{ border: "1px solid black" }}>{name}</td>
                    <td style={{ border: "1px solid black" }}>{id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {/* if view is 2, show enroll more students button, when clicked change view to 3 to show add new student form*/}
        {view === 2 ? (
          <button onClick={() => this.showStudentForm()}>
            Enroll More Students
          </button>
        ) : (
          // if view is 3, , otherwise show student form is shown??
          // pass in empty object to student because we arent doing any edit functionality, etc to the student its read only because its a prop!
          <StudentForm student={{}} onSubmit={this.handleStudent} />
        )}
        {/* if clicked, changes view to 0 to show default all courses list */}
        <button onClick={() => this.showCourseList()}>
          Back to All Courses List
        </button>
      </div>
    );
  };

  render() {
    let course = { courseName: "", faculty: "", lectures: "", students: [] };
    const { courses, view, editCourseIndex } = this.state;

    //if view is zero show all courses table
    return view === 0 && courses.length > 0 ? (
      <div>
        <h3>Course List</h3>
        <table style={{ border: "1px solid black" }}>
          <thead style={{ border: "1px solid black" }}>
            <tr>
              <th style={{ border: "1px solid black" }}>CourseName</th>
              <th style={{ border: "1px solid black" }}>Faculty</th>
              <th style={{ border: "1px solid black" }}># of Lectures</th>
              <th style={{ border: "1px solid black" }}># of Students</th>
              <th style={{ border: "1px solid black" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => {
              const { courseName, faculty, lectures } = course; // destruture students?????
              return (
                <tr key={Math.random()}>
                  <td style={{ border: "1px solid black" }}>{courseName}</td>
                  <td style={{ border: "1px solid black" }}>{faculty}</td>
                  <td style={{ border: "1px solid black" }}>{lectures}</td>
                  <td
                    style={{ border: "1px solid black" }}
                    onClick={() => this.viewCourseDetails(index)}>
                    {course.students.length}
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    <button onClick={() => this.handleEdit(index)}>Edit</button>
                    <button onClick={() => this.handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <button onClick={() => this.showForm()}>Add New Course</button>
      </div>
    ) : //   if view is 0 and course list is empty, show no courses status and add new course button
    view === 0 && courses.length === 0 ? (
      <React.Fragment>
        <h3>Course List</h3>
        <br />
        <h4>There are no courses to display.</h4>
        <br />
        <button onClick={() => this.showForm()}>Add New Course</button>
      </React.Fragment>
    ) : // else if view is 1, show add/edit course form
    view === 1 ? (
      <CourseForm
        course={editCourseIndex >= 0 ? courses[editCourseIndex] : course}
        edit={editCourseIndex >= 0}
        onSubmit={this.handleCourse}
      />
    ) : //else if view is 2, show individual course details
    view === 2 ? (
      this.showCourseDetails()
    ) : (
      //else if view is 3, show individual course details plus the add new student form to that page
      //since this is the last condition you dont put view === 3, this conditions catches anything besides what was already specified with views 0 to 2
      //the same function is called when view is equal to 3 because the student form is embedded into the individual course details page when the view is 2, so since the view is 2 is also shown when the view is 3 we call this same function because its shown in 2 views
      this.showCourseDetails()
    );
  }
}
