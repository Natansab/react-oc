import React, { Component } from 'react';
import './ProductRow.css';

export default class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('index: ' + this.props.product.id);
    this.props.onClick(this.props.product.id);
  }

  render() {
    return (
        <tr>
          <td>
            <span className={this.props.product.stocked ? '' : 'Product-out-of-stock'}>
              {this.props.product.name}
            </span>
          </td>
          <td>
            {this.props.product.price}
          </td>
          <td>
            <button onClick={this.handleClick}>x</button>
          </td>
        </tr>
    )
  }
}
