import React, { Component } from "react";

export default class Nine extends Component {
  state = {
    products: [
      { name: "Iphone 13 Max Pro", price: 1099.99 },
      { name: "Homall Gaming Chair", price: 99.99 },
      { name: "100ft Extension cord", price: 64.99 },
      { name: "Standing Desk", price: 299.99 },
      { name: "Ring Spotlight Camera", price: 199.99 },
    ],
    cart: [], //name price quantity
  };

  addToCart = (index) => {
    const copyOfState = { ...this.state };
    let product = copyOfState.products[index];
    let match = copyOfState.cart.find((item) => {
      return item.name === product.name;
    });
    //if a match if found, increase the quantity by 1, if no match, add product to cart and set quantity to 1
    match
      ? (match.quantity = match.quantity + 1)
      : copyOfState.cart.push({ ...product, quantity: 1 });
    this.setState({ copyOfState });
  };

  removeFromCart = (index) => {
    const copyOfCart = [...this.state.cart];
    if (copyOfCart[index].quantity - 1 <= 0) {
      copyOfCart.splice(index, 1);
      this.setState({
        products: [...this.state.products],
        cart: [...copyOfCart],
      });
    } else {
      copyOfCart[index].quantity = copyOfCart[index].quantity - 1;
      this.setState({
        products: [...this.state.products],
        cart: [...copyOfCart],
      });
    }
  };

  clearCart = () => {
    this.setState({
      products: [...this.state.products],
      cart: [],
    });
  };
  showCart = () => {
    const { cart } = this.state;
    const sum = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    if (cart.length === 0) {
      return <h4> Cart is Empty</h4>;
    } else {
      return (
        <ol>
          {cart.map((item, index) => {
            const { name, price, quantity } = item;
          
            return (
              <li key={index + 6}>
                {name}, ${price}, qty:({quantity})
                <button onClick={() => this.removeFromCart(index)}>X</button>
              </li>
            );
          })}

              <h4>Cart Total: ${sum.toFixed(2)}</h4>
          <button onClick={() => this.clearCart()}>Clear Cart</button>
        </ol>
      );
    }
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <div>
          <h1>Cart</h1>
          <React.Fragment>{this.showCart()}</React.Fragment>
        </div>
        <br />
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const { name, price } = product;
              return (
                <React.Fragment>
                  <tr key={index}>
                    <td>{name}</td>
                    <td>${price}</td>
                    <td>
                      <button onClick={() => this.addToCart(index)}>
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
