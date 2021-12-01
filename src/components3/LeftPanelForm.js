import React, { Component } from "react";

export default class LeftPanelForm extends Component {
  handleChange = (e) => {
    //the main component is send us the options array and the options selected array
    let copyOfProps = { ...this.props.optionsSel };
      let { currentTarget: input } = e;
      //check if we are getting input from the checkbox or radio buttons
      //if the input name is brand or ram call updateCBs function and set it equal to the result
    input.name === "brand"
      ? (copyOfProps.brand = this.updateCBs(
          input.checked,
          input.value,
          copyOfProps.brand
        ))
      : input.name === "ram"
      ? (copyOfProps.ram = this.updateCBs(
          input.checked,
          input.value,
          copyOfProps.ram
        ))
      : //else we are getting the input from the radio buttons
        (copyOfProps[input.name] = input.value);
    this.props.onChangeOption(copyOfProps);
    };
    
    updateCBs = (checked, value, arr) => {
        //if the value of checked is true, add to the selected arr because it has been selected
        if (checked) {
          arr.push(value);
        }
        //if value is not checked,
        //find the index of value and remove from the selected array because it has been deselected
        else {
          let index = arr.findIndex((el) => el === value);
          if (index >= 0) {
            arr.splice(index, 1);
          }
        }
        //return the updated array with selected values added
        return arr;
    }

  //function dynamically creates a checkbox
  showCheckBoxes = (label, arr, name, selArr) => {
    return (
      <React.Fragment>
        <br />
        <label>{label}:</label>
        <br />
        {arr.map((opt, index) => {
          return (
            <React.Fragment key={Math.random()}>
              <input
                type="checkbox"
                name={name}
                value={opt}
                //search the techsKnown array to find the index of the corresponding technology that has been checked, if it is <= 0 it isnt in the array and shouldnt be checked
                checked={selArr.findIndex((sel) => sel === opt) >= 0}
                onChange={this.handleChange}
                key={Math.random()}
              />
              <label>{opt}</label>
              <br />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  };

  //function dynamically creates a radio
  showRadios = (label, arr, name, selValue) => {
    return (
      <React.Fragment>
        <br />
        <label>{label}:</label>
        <br />
        {arr.map((opt) => {
          return (
            <React.Fragment key={Math.random()}>
              <input
                className="form-check-input"
                type="radio"
                name={name}
                value={opt}
                //if the value of gender in that field is male, this radio should be selected
                checked={selValue === opt}
                onChange={this.handleChange}
                key={Math.random()}
              />
              <label>{opt}</label>
              <br />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  };

  render() {
      const { optionsSel, optionsArray } = this.props;
    //   console.log(optionsArray.brand, optionsArray.ram, optionsSel.brand, optionsSel.ram);
    return (
      <div>
        <h4>Filter Options</h4>
        {/* invokes the onClear function thats passed down as a prop from MainComponent */}
        <button onClick={this.props.onClear}>Clear All</button>
        <br />
        {/* show radio buttons */}
        {this.showCheckBoxes(
          "Brand",
          optionsArray.brand,
          "brand",
          optionsSel.brand
        )}
        {this.showCheckBoxes("RAM", optionsArray.ram, "ram", optionsSel.ram)}
        {this.showRadios(
          "Processor",
          optionsArray.processor,
          "processor",
          optionsSel.processor
        )}
        {this.showRadios(
          "Rating",
          optionsArray.rating,
          "rating",
          optionsSel.rating
        )}
      </div>
    );
  }
}

//checkboxes for brand and ram
//radio buttons for processor and rating
//can either create these using map in render or create two functions
