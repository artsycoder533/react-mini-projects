import React, { Component } from "react";

export default class SimpleForm2 extends Component {
  //pass in state as prop from main component set the local state equal to this
  state = {
    person: {
      name: "",
      age: "",
      country: "",
      gender: "",
      passport: "",
      license: "",
      city: "",
      passportNumber: "",
      designation: "",
      techsKnown: [],
    },
    countries: ["United States", "Canada", "India", "United Kingdom"],
    countryList: [
      {
        country: "United States",
        cities: ["New York", "Los Angeles", "Miami", "Houston"],
      },
      {
        country: "Canada",
        cities: ["Toronto", "Montreal", "Vancouver"],
      },
      {
        country: "India",
        cities: ["New Delhi", "Bengaluru", "Pune", "Chennai"],
      },
      {
        country: "United Kindgom",
        cities: ["London", "Bristol", "Manchester"],
      },
    ],
    designations: [
      "Developer",
      "Senior Developer",
      "Team Lead",
      "Architect",
      "Delivery Manager",
    ],
    techs: ["React", "JavaScript", "Node", "Sass"],
  };

  handleChange = (e) => {
    //destructure the current target and rename it to input so you dont have to type it out
    const { currentTarget: input } = e;
    let copyOfState = { ...this.state };
    //since theres a checkbox add a condition that checks for it
    //if the type is checkbox and its been selected set the value of it checked (which means true) so that the checkbox is filled in
    input.type === "checkbox"
      ? //if its a checkbox and the name of the checkbox is techsKnown call the function updateCBs
        input.name === "techsKnown"
        ? // updateCBs updates the techsKnown array and returns it
          (copyOfState.person.techsKnown = this.updateCBs(
            input.checked,
            input.value,
            copyOfState.person.techsKnown
          ))
        : //   otherwise proceed as normal
          (copyOfState.person[input.name] = input.checked)
      : //otherwise if checkbox was not selected, set the value of it to the value we set in the JSX
        (copyOfState.person[input.name] = input.value);
    //if there is a change in the country, reset the value of the city to say "select a city" the default
    if (input.name === "country") {
      copyOfState.person.city = "";
    }
    //   if the passport is not checked, the passportNumber should be empty, handles case where checks then unchecks a selection
    if (!copyOfState.person.passport) {
      copyOfState.person.passportNumber = "";
    }
    this.setState(copyOfState);
  };

  updateCBs = (checked, value, arr) => {
    //this function will update the techsKnown array in the person

    //if the value is not checked it will remove it from the array
    //if the value is tech is checked, add it to the array
    if (checked) {
      arr.push(value);
    }
    //if the value is not checked it will remove it from the array
    else {
      //set index equal to the index of the element such that it is also equal to the value passed in
      let index = arr.findIndex((el) => el === value);
      if (index >= 0) {
        arr.splice(index, 1);
      }
    }
    return arr;
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const {
      name,
      age,
      country,
      gender,
      passport,
      license,
      city,
      passportNumber,
      designation,
      techsKnown,
    } = this.state.person;
    const { countries, countryList, designations, techs } = this.state;
    //find the list of cities based on the person, search in the country list to find the city that matches the country selected, if found return list of cities, otherwise return empty array??
    const cities = country
      ? countryList.find((c1) => c1.country === country).cities
      : [];
    return (
      <div>
        {/* if edit mode is true, display edit details otherwise display enter details */}
        <h5>Enter New Details</h5>
        <div>
          <label htmlFor="">Name:</label>
          <br />
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
          <label htmlFor="">Age:</label>
          <br />
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
        <div className="form-group">
          <label>Country:</label>
          <br />
          <select
            className="form-control"
            name="country"
            value={country}
            onChange={this.handleChange}>
            {/* set the option as disabled to gray out, use for default description*/}
            <option disabled value="">
              Select the Country
            </option>
            {countries.map((country) => {
              return <option key={Math.random()}>{country}</option>;
            })}
          </select>
        </div>
        {/* if the country is selected show the city dropdown associted with it, else show nothing*/}
        {country ? (
          <div className="form-group">
            <label>City</label>
            <select
              className="form-control"
              name="city"
              value={city}
              onChange={this.handleChange}>
              {/* set the option as disabled to gray out, use for default description*/}
              <option disabled value="">
                Select the City
              </option>
              {cities.map((city) => {
                return <option key={Math.random()}>{city}</option>;
              })}
            </select>
          </div>
        ) : (
          ""
        )}
        <br />
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            //if the value of gender in that field is male, this radio should be selected
            checked={gender === "Male"}
            onChange={this.handleChange}
          />
          <label>Male</label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            //if the value of gender in that field is male, this radio should be selected
            checked={gender === "Female"}
            onChange={this.handleChange}
          />
          <label>Female</label>
        </div>
        <br />
        <div className="form-check">
          {/* for a checkbox you dont have to set it equal to the value inside the checked brackets because by default the value is already a boolean, the onChange will change to true if its been selected */}
          <input
            // className="form-check-input"
            type="checkbox"
            name="passport"
            value={passport}
            checked={passport}
            onChange={this.handleChange}
          />
          <label>Passport</label>
        </div>
        {/* if passport is selected, show the text field to enter passport number */}
        {passport ? (
          <div>
            <label htmlFor="">Passport Number</label>
            <input
              type="text"
              className="form-control"
              id="passportNumber"
              name="passportNumber"
              value={passportNumber}
              placeholder="Enter the Passport Number"
              onChange={this.handleChange}
            />
            <br />
          </div>
        ) : (
          ""
        )}
        <div className="form-check">
          {/* for a checkbox you dont have to set it equal to the value inside the checked brackets because by default the value is already a boolean, the onChange will change to true if its been selected */}
          <input
            // className="form-check-input"
            type="checkbox"
            name="license"
            value={license}
            checked={license}
            onChange={this.handleChange}
          />
          <label>License</label>
        </div>
        <br />
        {/* had to name it des instead of designation inside of map because designation is already a property name for person */}
        <label>Designation:</label>
        <br />
        {designations.map((des) => {
          return (
            <React.Fragment>
              <input
                className="form-check-input"
                type="radio"
                name="designation"
                value={des}
                //if the value of gender in that field is male, this radio should be selected
                checked={des === designation}
                onChange={this.handleChange}
                key={Math.random()}
              />
              <label>{des}</label>
            </React.Fragment>
          );
        })}
        <br />
        <br />
        <label>Technologies Known:</label>
        <br />
        {techs.map((tech) => {
          return (
            <React.Fragment>
              <input
                      type="checkbox"
                      name="techsKnown"
                      value={tech}
                      //search the selected options array to find the index of the corresponding option that has been checked, if it is < 0 it isnt in the array and shouldnt be checked
                      checked={techsKnown.findIndex((t) => t === tech) >= 0}
                      onChange={this.handleChange}
                      key={Math.random()}
              />
              <label>{tech}</label>
            </React.Fragment>
          );
        })}
        <br />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
