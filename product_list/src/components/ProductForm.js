import React, { Component } from 'react';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    let newProduct = {
      category: '',
      price: 0,
      stocked:'',
      name:'' };
      this.state = {
        product: newProduct
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
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
            <input type="text" name="name" value={this.state.name}/>
          </label>
          <br/>
          <label>
            Category:
            <input type="text" name="category" value={this.state.category}/>
          </label>
          <br/>
          <label>
            Price:
            <input type="text" name="price" value={this.state.price}/>
          </label>
          <br/>
          <label>
            <input type="checkbox" name="stocked" value={this.state.stocked}/>
            In Stock?
          </label>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
