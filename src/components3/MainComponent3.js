import React, { Component } from "react";
import LeftPanelForm from "./LeftPanelForm";

export default class MainComponent3 extends Component {
  state = {
    laptops: [
      {
        model: "AX4581",
        brand: "Acer",
        ram: "4GB",
        hardDisk: "500GB",
        rating: "3",
        processor: "i3",
      },
      {
        model: "HB2881",
        brand: "HP",
        ram: "4GB",
        hardDisk: "250GB",
        rating: "4",
        processor: "i3",
      },
      {
        model: "DM811",
        brand: "Dell",
        ram: "4GB",
        hardDisk: "1TB",
        rating: "3",
        processor: "i3",
      },
      {
        model: "AP629",
        brand: "Acer",
        ram: "6GB",
        hardDisk: "1TB",
        rating: "2",
        processor: "i3",
      },
      {
        model: "AT820",
        brand: "Acer",
        ram: "8GB",
        hardDisk: "1TB",
        rating: "4",
        processor: "i5",
      },
      {
        model: "HK008",
        brand: "HP",
        ram: "6GB",
        hardDisk: "250GB",
        rating: "3",
        processor: "i5",
      },
      {
        model: "MAir11",
        brand: "Apple",
        ram: "4GB",
        hardDisk: "128GB",
        rating: "4",
        processor: "i5",
      },
      {
        model: "MPro24X",
        brand: "Apple",
        ram: "8GB",
        hardDisk: "256GB",
        rating: "4",
        processor: "i7",
      },
      {
        model: "DL390",
        brand: "Dell",
        ram: "6GB",
        hardDisk: "500GB",
        rating: "3",
        processor: "i3",
      },
      {
        model: "AM954",
        brand: "Acer",
        ram: "8GB",
        hardDisk: "1TB",
        rating: "3",
        processor: "i7",
      },
      {
        model: "AB234",
        brand: "Acer",
        ram: "4GB",
        hardDisk: "250GB",
        rating: "2",
        processor: "i3",
      },
      {
        model: "HC874",
        brand: "HP",
        ram: "8GB",
        hardDisk: "1TB",
        rating: "1",
        processor: "i7",
      },
    ],
    //options available to filter by to populate form fields
    //sent to leftPanelForm components as a prop
    optionsArray: {
      brand: ["Acer", "HP", "Dell", "Apple"],
      ram: ["4GB", "6GB", "8GB"],
      rating: ["1", "2", "3", "4"],
      processor: ["i3", "i5", "i7"],
    },
    //represents choices made by the user to filter
    //sent to leftPanelForm components as a prop
    optionsSel: {
      brand: [],
      ram: [],
      processor: "",
      rating: "",
    },
  };

  showLaptops = () => {
    const { laptops, optionsSel } = this.state;
    const { brand, processor, rating, ram } = optionsSel;

    //to filter by brand
    //if the brand array is not empty
    //filter the laptops array by any brands found in the optionsSel, if its in there its index will be greater than - 1
    //otherwise return all laptops
    const laptopsByBrand =
      brand.length > 0
        ? laptops.filter(
            (laptop) => brand.findIndex((brand) => brand === laptop.brand) >= 0
          )
        : laptops;

    //to filter by ram
    //if the ram array is not empty
    //filter the newly created array filtered by brand that also has the selected ram from the optionsSel array
    //otherwise you dont need to further filter the laptopsByBrand array and can just return it
    const laptopsByRam =
      ram.length > 0
        ? laptopsByBrand.filter(
            (laptop) => ram.findIndex((ram) => ram === laptop.ram) >= 0
          )
        : laptopsByBrand;

    //to filter by processor
    //if the processor exists(not an empty string)
    //filter the laptops that have already been filtered by Ram for any laptops who processor also matches the processor string parameter
    //otherwise no need to filter the laptopsByRam array and you can return it as is
    const laptopsByProcessor = processor
      ? laptopsByRam.filter((laptop) => laptop.processor === processor)
      : laptopsByRam;

    //to filter by rating
    //if the rating is not an empty string
    //filter the thats thats have already been filtered by processor for any laptops whos rating match the rating string parameter
    //otherwise return the laptopsByProcessor array unfiltered
    const laptopsByRating = rating
      ? laptopsByProcessor.filter((laptop) => laptop.rating === rating)
      : laptopsByProcessor;

    //to show only filtered laptops, map through the laptopsByRating array because it contains only laptops that meet all the conditions
    return laptopsByRating.length === 0 ? (
      <tr>
        <td colSpan="6">
          Sorry, there are no laptops that matched your search
        </td>
      </tr>
    ) : (
      <React.Fragment>
        {laptopsByRating.map((laptop) => {
          const { model, brand, processor, rating, ram, hardDisk } = laptop;
          return (
            <tr style={{ border: "1px solid black" }} key={Math.random()}>
              <td style={{ border: "1px solid black" }}>{model}</td>
              <td style={{ border: "1px solid black" }}>{brand}</td>
              <td style={{ border: "1px solid black" }}>{ram}</td>
              <td style={{ border: "1px solid black" }}>{hardDisk}</td>
              <td style={{ border: "1px solid black" }}>{rating}</td>
              <td style={{ border: "1px solid black" }}>{processor}</td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  };

  handleClear = () => {
    const copyOfState = { ...this.state };
    //change all values inside optionsSel back to their default
    copyOfState.optionsSel = {
      brand: [],
      ram: [],
      processor: "",
      rating: "",
    };
    this.setState(copyOfState);
  };

  handleChangeOption = (optionsSel) => {
    const copyOfState = { ...this.state };
    //set the optionsSel array to match the new array containing everything the user selected
    copyOfState.optionsSel = optionsSel;
    this.setState(copyOfState);
  };

  isSelected = () => {
    const { brand, ram, processor, rating } = this.state.optionsSel;
    if (
      brand.length === 0 &&
      ram.length === 0 &&
      processor === "" &&
      rating === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { optionsArray, optionsSel } = this.state;

    return (
      <div className="holder">
        <div className="left">
          <LeftPanelForm
            optionsSel={optionsSel}
            optionsArray={optionsArray}
            onChangeOption={this.handleChangeOption}
            onClear={this.handleClear}
          />
        </div>
        <div className="right">
          <h2>{this.isSelected() ? "Selected Laptops" : "All Laptops"}</h2>

          <table style={{ border: "1px solid black" }}>
            <thead style={{ border: "1px solid black" }}>
              <tr>
                <th style={{ border: "1px solid black" }}>Model</th>
                <th style={{ border: "1px solid black" }}>Brand</th>
                <th style={{ border: "1px solid black" }}>Ram</th>
                <th style={{ border: "1px solid black" }}>Hard Disk</th>
                <th style={{ border: "1px solid black" }}>Rating</th>
                <th style={{ border: "1px solid black" }}>Processor</th>
              </tr>
            </thead>
            <tbody>{this.showLaptops()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
