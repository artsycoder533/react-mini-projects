import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { addToCart, product } = this.props;
    const { name, description1, description2, price, src } = product;

    return (
      <div className="product">
        <h3>
          {name} {description1}
        </h3>
        <h4>{description2}</h4>
        <img src={src} alt="phone" />
        <h5>{price}</h5>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
    );
  }
}
