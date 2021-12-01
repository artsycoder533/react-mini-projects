import React, { Component } from "react";

export default class LeftPanelForm extends Component {
  handleChange = (e) => {
    //the main component is send us the options array and the options selected array
    let copyOfProps = { ...this.props.optionsSel };
      let { currentTarget: input } = e;
      //if the input name is brand or ram call updateCBs function
    input.name === "brand"
      ? (copyOfProps.brand = this.updateCBs())
      : input.name === "ram"
      ? copyOfProps.ram = this.updateCBs()
      : (copyOfProps[input.name] = input.value);
    this.props.onChangeOption(copyOfProps);
    };
    
    updateCBs = () => {
        
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
            <React.Fragment>
              <input
                type="checkbox"
                name={name}
                value={opt}
                //search the techsKnown array to find the index of the corresponding technology that has been checked, if it is < 0 it isnt in the array and shouldnt be checked
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
            <React.Fragment>
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
    return (
      <div>
        <h4>Choose Options</h4>
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
