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
                <h2>Selected Laptops</h2>
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Brand</th>
                <th>Ram</th>
                <th>Hard Disk</th>
                <th>Rating</th>
                <th>Processor</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
