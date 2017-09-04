import React, { Component } from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        product: Object.assign({}, RESET_VALUES),
        error: false
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let product = this.state.product;
    let value = e.target[e.target.type === 'checkbox' ? 'checked' : 'value'];
    product[e.target.name] = value;
    this.setState({ product: product});
    if (e.target.name === 'name') {
      const error = this.state.product.name === '' ? true : false;
      this.setState({ error });
    }
  }

  handleSubmit(e) {
    if (this.state.product.name === '') {
      alert('No blank name');
      e.preventDefault();
      return;
    }
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
            <input type="text" name="name" value={this.state.product.name}/>
            {
              this.state.error &&
              <div style={{color: 'red'}}>
                Cannot be blank
              </div>
            }
          </label>
          <br/>
          <label>
            Category:
            <input type="text" name="category" value={this.state.product.category}/>
          </label>
          <br/>
          <label>
            Price:
            <input type="number" name="price" value={this.state.product.price}/>
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
