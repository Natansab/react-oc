import React, { Component } from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        product: Object.assign({}, RESET_VALUES)
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let product = this.state.product;
    let value = e.target[e.target.type === 'checkbox' ? 'checked' : 'value'];
    product[e.target.name] = value;
    this.setState({ product: product});
  }

  handleSubmit(e) {
    this.props.onSubmit(this.state.product);
    this.setState({
    product: Object.assign({}, RESET_VALUES)
    });
    e.preventDefault();
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
            <input type="checkbox" name="stocked" value="true"/>
            In Stock?
          </label>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
