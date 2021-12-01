import React, { Component } from "react";

export default class SimpleForm extends Component {
  //pass in state as prop from main component set the local state equal to this
  state = {
    person: this.props.person,
    errors: {},
    countries: ["United States", "Canada", "India", "United Kingdom"],
  };

  handleChange = (e) => {
    const { currentTarget: input } = e;
    const copyOfState = { ...this.state };
      copyOfState.person[input.name] = input.value;
      this.handleValidate(e);
    this.setState(copyOfState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //validate all fields
    let errors = this.validateAll();
    //check if errors object contains anything
    if (this.isValid(errors)) {
      //if is valid returns and there are no errors pass in the props to the onSubmit function
      this.props.onSubmit(this.state.person);
    }
    //otherwise add the error message to the state to display them
    else {
      const copyOfState = { ...this.state };
      copyOfState.errors = errors;
      this.setState(copyOfState);
    }
    };
    
    handleValidate = (e) => {
        //validate only the field which the event has been fired so they are validated seperatedly rather than calling validateAll
        const { currentTarget: input } = e;
        let copyOfState = { ...this.state };
        switch (input.name) {
            case "name":
                // validate name takes the name as an argument, input.value is the actual value of the name, age, country if in focus
                copyOfState.errors.name = this.validateName(input.value);
                break;
            case "age":
                copyOfState.errors.age = this.validateAge(input.value);
                break;
            case "country":
                copyOfState.errors.country = this.validateCountry(input.value);
                break;
            default:
                break;
        }
        this.setState(copyOfState);
    }

  isValid = (errors) => {
    //errors would have keys with non empty strings as values
    //check if there is any keys
    //this will give is keys in an array
    const keys = Object.keys(errors);
    //use reduce to add up number of errors
    const count = keys.reduce((acc, curr) => {
      //if there is a valid error at this index, add one to the count of errors otherwise the count doesnt change
      return errors[curr] ? acc + 1 : acc;
    }, 0);
    //on return true if the count is 0 and there were no errors found
    return count === 0;
    };
    
    isFormValid = () => {
        //validate all fields, errors will be set to result
        const errors = this.validateAll();
        //if errors is empty isValid will return true
        return this.isValid(errors);
    }

  validateName = (name) => {
    //if name is empty string is true
    return !name
      ? //return error message
        "Name must be entered"
      : //if name is less than 5 characters
      name.length < 5
      ? //return error message
        "Name must be a minimum of 5 characters"
      : //otherwise no error, return empty string
        "";
  };

  validateAge = (age) => {
    //if age is empty string is true
    return !age
      ? //return error message
        "Age must be entered"
      : //if age < 21
      age < 21 || age > 75
      ? //return error message
        "Age should be between 21 and 75"
      : //otherwise no error, return empty string
        "";
  };

  validateCountry = (country) => {
    //if age is empty string is true
    return !country
      ? //return error message
        "Country must be selected"
      : //return empty string
        "";
  };

  validateAll = () => {
    const { name, age, country } = this.state.person;
    let errors = {};
    //implement functions to validate if you have multiple validations
    errors.name = this.validateName(name);
    errors.age = this.validateAge(age);
    errors.country = this.validateCountry(country);

    if (!country) {
      errors.country = "Must select a country";
    }
    //if name contains a non-digit (regex)
    return errors;
  };

  render() {
    const { name, age, country } = this.state.person;
    const { countries, errors } = this.state;

    return (
      <div>
        {/* if edit mode is true, display edit details otherwise display enter details */}
        <h5>Enter Details</h5>
        <div>
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter Name"
            onChange={this.handleChange}
            onBlur={this.handleValidate}
          />
          <br />
          {/* if errors object contains a key with a value that is empty, display it */}
          {errors.name ? (
            <small style={{ color: "red" }}>{errors.name}</small>
          ) : (
            ""
          )}

          <br />
          <label htmlFor="">Age</label>
          <br />
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={age}
            placeholder="Enter Age"
            onChange={this.handleChange}
            onBlur={this.handleValidate}
          />
          <br />
          {errors.age ? (
            <small style={{ color: "red" }}>{errors.age}</small>
          ) : (
            ""
          )}
          <br />
          <label>Country</label>
          <br />
          {/* add defaultValue to set the default value, must match value of option you want to show by default */}
          <select
            name="country"
            // defaultValue="Choose Country:"
            value={country}
            onChange={this.handleChange}
            onBlur={this.handleValidate}>
            {/* add value to match the defaultValue in select tag to show as default */}
            <option disabled value="">
              Select Country:
            </option>
            {countries.map((country) => {
              return <option>{country}</option>;
            })}
          </select>
        </div>
        {errors.country ? (
          <small style={{ color: "red" }}>{errors.country}</small>
        ) : (
          ""
        )}
        <br />
        {/* set the disabled status of the button depending on a function to control it */}
        <button onClick={this.handleSubmit} disabled={!this.isFormValid()}>
          Submit
        </button>
      </div>
    );
  }
}
