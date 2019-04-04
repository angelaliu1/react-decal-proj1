import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
        <div className="receipt-item" key={item.name}>
            <div className="receipt-text">
                {item.productName}
            </div>
            <div className="receipt-text">
                ${item.price * item.count}
            </div>
        </div>
    );
  }

  totalCost() {
      const items = this.props.items;
      var cost = 0;
      for (var i = 0; i < items.length; i++) {
        cost += items[i]["price"] * items[i]["count"];
      }
      return cost.toFixed(2);
  }

  render() {
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.totalCost()}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;