import React, { Component } from 'react';

export default class Filters extends Component {
  render() {
    return (
      <div>
        <h1>Enter New Product</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br/>
          <label>
            Category:
            <input type="text" name="category" />
          </label>
          <br/>
          <label>
            Price:
            <input type="text" name="price" />
          </label>
          <br/>
          <label>
            <input type="checkbox" name="stock" />
            In Stock?
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
