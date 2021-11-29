import React, { Component } from "react";

export default class Four extends Component {
  state = {
    students: [
      { name: "Williams", math: 34, english: 36 },
      { name: "George", math: 24, english: 21 },
      { name: "Katherine", math: 36, english: 41 },
      { name: "Sophia", math: 45, english: 37 },
      { name: "Timothy", math: 22, english: 19 },
    ],
  };

  getRowStyle = (math, english) => {
    return math + english >= 60 ? "green" : "red";
  };

    render() {
      //all students
        const { students } = this.state;
        //students whote total scores are greater than 60
      const filteredStudents = students.filter(student => {
          return student.math + student.english >= 60;
      })
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "0.5rem 1rem",
                  background: "black",
                  color: "white",
                }}>
                Student
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "0.5rem 1rem",
                  background: "black",
                  color: "white",
                }}>
                Math
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "0.5rem 1rem",
                  background: "black",
                  color: "white",
                }}>
                English
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => {
              const { name, math, english } = student;
              return (
                <tr
                  style={{
                    background: this.getRowStyle(math, english),
                  }} key={index}>
                  <td style={{ border: "1px solid black" }}>{name}</td>
                  <td
                    style={{ textAlign: "center", border: "1px solid black" }}>
                    {math}
                  </td>
                  <td
                    style={{ textAlign: "center", border: "1px solid black" }}>
                    {english}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
