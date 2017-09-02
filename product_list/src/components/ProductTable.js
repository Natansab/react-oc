import React, { Component } from 'react';
import SortableColumnHeader from './SortableColumnHeader';
import ProductRow from './ProductRow';

export default class Filters extends Component {
  render() {
    let productsArray = [];

    // Methode plus claire
    // let p = this.props.products;
    // for (var key in p) {
    //   if (p.hasOwnProperty(key)) {
    //     products.push(p[key]);
    //   }
    // }

    // Methode plus condensee
    productsArray = Object.keys(this.props.products).map((pId) => this.props.products[pId]);

    let rows = [];
    productsArray.forEach((product) => {
      // console.log(this.props);
      if (product.name.indexOf(this.props.search) === -1 || (this.props.inStockOnly && !product.stocked))
        return;
      return (
        rows.push(<ProductRow product={product} key={product.id}/>)
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
