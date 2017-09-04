import React, { Component } from 'react';
import SortableColumnHeader from './SortableColumnHeader';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {

    // Make array from object
    let productsArray = [];
    productsArray = Object.keys(this.props.products).map((pId) => this.props.products[pId]);

    let rows = [];
    productsArray.forEach((product) => {
      if (product.name.indexOf(this.props.search) === -1 || (this.props.inStockOnly && !product.stocked))
        return;
      return (
        rows.push(<ProductRow product={product} key={product.id} onClick={this.props.onClick}/>)
      );
    })

    return (
      <div>
        <table>
          <thead>
            <tr>
              <SortableColumnHeader column="name"/>
              <SortableColumnHeader column="price"/>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}
