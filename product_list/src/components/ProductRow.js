import React, { Component } from 'react';
import './ProductRow.css';

export default class ProductRow extends Component {
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
            <button>x</button>
          </td>
        </tr>
    )
  }
}
