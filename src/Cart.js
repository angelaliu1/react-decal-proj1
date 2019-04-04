import React from "react";
import Product from "./Product.js";
import "./styles/cart.css";
import ProductData from "./Data"
import Receipt from "./Receipt.jsx";

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    }
  }

  handleAddToCart(productName, price) {
    console.log(this.state);
    let cartCopy = [];
    if (this.state.cartItems.length !== 0) {
      cartCopy = [...this.state.cartItems];
    }
    for (var i = 0; i < cartCopy.length; i++) {
      if (cartCopy[i]["productName"] === productName) {
        // Update
        cartCopy[i]["count"] = cartCopy[i]["count"] + 1;
        this.setState({cartItems: cartCopy});
        return;
      }
    }
    // Add
    cartCopy = [...cartCopy, {"productName": productName, "price": price, count: 1}];
    console.log(cartCopy);
    this.setState({cartItems: cartCopy});
    console.log(this.state);
    return;
  }

  handleRemoveFromCart(productName) {
    let cartCopy = [...this.state.cartItems];
    const filteredCart = cartCopy.filter(product => product.productName != productName);
    this.setState({cartItems: filteredCart});
  }

  render() {
    return (
        <div className="page-content">
            {ProductData.products.map(product => (
                <Product productName={product.name} price={product.cost} onAddToCart={this.handleAddToCart.bind(this)} onRemoveFromCart={this.handleRemoveFromCart.bind(this)}/>
            ))}
            <Receipt items={this.state.cartItems}/>
        </div>
    );
  }

}

export default Cart;
