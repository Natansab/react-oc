import React from 'react';
import Filters from './Filters.js';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable.js';

var PRODUCTS = {
  '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Cello'},
  '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
};

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inStockOnly: false,
      filterText: '',
      products: PRODUCTS
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  handleFilter(filterInput) {
    this.setState(filterInput);
  }

  removeProduct(index) {
    this.setState((prevState) => {
      let products = prevState.products;
      delete products[index];
      return { products };
    });
  }

  addProduct(category, price, stocked, name) {
    let id = Math.max.apply(null, Object.keys(this.state.products)) + 1;
    console.log(stocked);
    let newProduct = {id, category, price, stocked, name};
    let updatedProductList = this.state.products;
    updatedProductList[id] = newProduct;
    this.setState({ products: updatedProductList });
  }

  render() {
    return (
      <div>
        <Filters
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          onChange={this.handleFilter}
        />
        <ProductTable
          products={this.state.products}
          inStockOnly={this.state.inStockOnly}
          search={this.state.filterText}
          onClick={this.removeProduct}
        />
        <ProductForm
          onSubmit={this.addProduct}
        />
      </div>
    );
  }
}

export default Products;
