import React from "react";
import PropTypes from 'prop-types';

    class Product extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                cartItems: [],
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
                        <div className="ui bottom attached button" onClick={() => this.props.onAddToCart(this.props.productName, this.props.price)}>
                            <i className="add icon"></i>
                            Add to Cart
                        </div>
                        <div className="ui bottom attached button" onClick={() => this.props.onRemoveFromCart(this.props.productName)}>
                            <i className="remove icon"></i>
                            Remove from Cart
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