import React from "react";
import PropTypes from 'prop-types';

    class Product extends React.Component {

        constructor(props) {
            super(props);
            this.counter = 0;
        }

        addToCart() {
            if (this.counter >= this.props.limit) {
                alert("There are too many " + this.props.productName + "s in your cart!");
            } else if (this.props.limit === 0) {
                alert("This item is out of stock!");
            } else {
                this.counter = this.counter + 1;
                alert("There are " + this.counter + " " + this.props.productName + "s in your cart!");
                console.log(this.counter, this.props.limit);
            }
        }

        render() {
            return (
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">
                                {this.props.productName}
                            </div>
                            <div className="description">
                                Price: ${this.props.price}
                            </div> 
                        </div>
                        <div className="ui bottom attached button" onClick={() => this.addToCart()}>
                            <i className="add icon"></i>
                            Add to Cart
                        </div>
                    </div>
                </div>
            );
        }
    }

    Product.propTypes = {
        productName: PropTypes.string,
        price: PropTypes.number,
        limit: PropTypes.number,
    };

export default Product;