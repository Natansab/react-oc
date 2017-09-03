import React, { Component } from 'react';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    let newProduct = {
      category: '',
      price: '',
      stocked: false,
      name:'' };
      this.state = {
        product: newProduct
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const p = this.state.product;
    this.props.onSubmit(p.category, p.price, p.stocked, p.name);
    event.preventDefault();
  }

  handleChange(event) {
    let updatedProduct = this.state.product;
    updatedProduct[event.target.name] = event.target.value;
    this.setState({ product: updatedProduct});
  }


  render() {
    return (
      <div>
        <h1>Enter New Product</h1>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.product.name} required/>
          </label>
          <br/>
          <label>
            Category:
            <input type="text" name="category" value={this.state.product.category} required/>
          </label>
          <br/>
          <label>
            Price:
            <input type="number" name="price" value={this.state.product.price} required/>
          </label>
          <br/>
          <label>
            <input type="checkbox" name="stocked" value={this.state.product.stocked}/>
            In Stock?
          </label>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
