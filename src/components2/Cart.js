import React, { Component } from "react";
import Product from "./Product";

export default class Cart extends Component {
  state = {
    products: [
      {
        name: "Apple iPhone 13 mini",
        src: "https://ss73.vzw.com/is/image/VerizonWireless/apple-iphone-13-mini-blue",
        description1: "128GB",
        description2: "2340-by-1080-pixel resolution at 476 ppi",
        price: "699.99",
        id: 5979,
      },
      {
        name: "Apple iPhone 13",
        src: "https://ss71.vzw.com/is/image/VerizonWireless/apple-iphone-13-pink-09142021",
        description1: "128GB",
        description2: " 2340-by-1080-pixel resolution at 476 ppi",
        price: "799.99",
        id: 8959,
      },
      {
        name: "Apple iPhone 13 Pro",
        src: "https://ss72.vzw.com/is/image/VerizonWireless/apple-iphone-13-pro-sierra-blue-09142021",
        description1: "128GB",
        description2: "2532-by-1170-pixel resolution at 460 ppi",
        price: "999.99",
        id: 9798,
      },
      {
        name: "Apple iPhone 13 Pro Max",
        src: "https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-pro-max-gold?fmt=pjpg",
        description1: "128GB",
        description2: "6.7-inch (diagonal) all-screen OLED Display",
        price: "1099.99",
        id: 5975,
      },
      {
        name: "Samsung Galaxy S21 5G",
        src: "https://ss72.vzw.com/is/image/VerizonWireless/02-samsung-palette-violet",
        description1: "128GB",
        description2: "6.2 FHD+ (1080X2400) Dynamic AMOLED 2x, 421 PPI",
        price: "799.99",
        id: 5947,
      },
      {
        name: "Samsung Galaxy S21 Ultra 5G",
        src: "https://ss7.vzw.com/is/image/VerizonWireless/samsung-flagship-smartphone-palette-p3-black-128gb-smg998uzkv",
        description1: "128GB",
        description2: "6.8 WQHD+ (1440X3200) Dynamic AMOLED 2x, 515 PPI",
        price: "1199.99",
        id: 3267,
      },
    ],
    cart: [],
  };

  getCartQuantity = () => {
    return this.state.cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  };

  getCartTotal = () => {
    return this.state.cart.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
  };

  increaseQuantity = (index) => {
    const copyOfCart = [...this.state.cart];
    copyOfCart[index].quantity++;
    this.setState({
      products: this.state.products,
      cart: [...copyOfCart],
    });
  };

  decreaseQuantity = (index) => {
    const copyOfCart = [...this.state.cart];
    //if quantity is 1, remove item from cart
    if (copyOfCart[index].quantity === 1) {
      this.removeFromCart(index);
    } else {
      copyOfCart[index].quantity--;
      this.setState({
        products: this.state.products,
        cart: [...copyOfCart],
      });
    }
  };

  displayCartDetails = () => {
    const { cart } = this.state;

    return cart.length > 0 ? (
      <React.Fragment>
        <ul>
          {cart.map((item, index) => {
            const { product, quantity } = item;
            return (
              <li>
                {product}, Quantity: {quantity}{" "}
                <button onClick={() => this.increaseQuantity(index)}>
                  {" "}
                  +{" "}
                </button>{" "}
                <button onClick={() => this.decreaseQuantity(index)}>
                  {" "}
                  -{" "}
                </button>{" "}
                <button onClick={() => this.removeFromCart(index)}>
                  Remove From Cart
                </button>
              </li>
            );
          })}
        </ul>
        <h4>Number of Items in Cart: {this.getCartQuantity()}</h4>
        <h4>Cart Total: ${this.getCartTotal().toFixed(2)}</h4>
      </React.Fragment>
    ) : (
      <h4>Cart is Empty</h4>
    );
  };

  addToCart = (product) => {
    const { name, price } = product;
    const { cart } = this.state;
    const copyOfCart = [...cart];

    //search for the product in the cart
    let match = copyOfCart.find((item) => {
      return item.product === product.name;
    });

    //if a match is found update the quantity, if not add product to cart
    match
      ? (match.quantity = match.quantity + 1)
      : copyOfCart.push({ product: name, quantity: 1, price: price });
    this.setState({
      products: this.state.products,
      cart: [...copyOfCart],
    });
  };

  getQuantity = (name) => {
    const { cart } = this.state;
    return cart.filter((phone) => {
      return phone.name === name;
    }).length;
  };

  removeFromCart = (index) => {
    const copyOfCart = [...this.state.cart];
    copyOfCart.splice(index, 1);
    this.setState({
      products: this.state.products,
      cart: [...copyOfCart],
    });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="cart">
        <h1>Horizon Wireless</h1>
        <div className="products">
          {products.map((product, index) => {
            const { id } = product;
            return (
              <Product
                key={Math.random()}
                product={product}
                index={index}
                addToCart={this.addToCart}
                id={id}
              />
            );
          })}
        </div>
        <h2>Cart</h2>
        {this.displayCartDetails()}
      </div>
    );
  }
}
