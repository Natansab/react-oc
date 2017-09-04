import React, { Component } from 'react';
import SortableColumnHeader from './SortableColumnHeader';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
    this.state = {
      sort: '',
    };
  }

  handleSort(dir) {
    console.log(dir);
    this.setState({ sort: dir });
  }


  render() {

    // Make array from object
    let pArr = [];
    pArr = Object.keys(this.props.products).map((pId) => this.props.products[pId]);

    pArr.sort((a, b) => {
      if (!this.state.sort)
        return (0);
      if (this.state.sort === 'desc')
        return (a.name>b.name);
      return (a.name<b.name);
    });

    let rows = [];
    pArr.forEach((product) => {
      if (product.name.indexOf(this.props.search) === -1 || (this.props.inStockOnly && !product.stocked))
        return;
      return (
        rows.push(<ProductRow product={product} key={product.id} onClick={this.props.onClick}/>)
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <SortableColumnHeader
                onSort={this.handleSort}
                currentSort={this.state.sort}
                column="name"
              />
              <SortableColumnHeader column="price"/>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}
