import React, { Component } from 'react';
import './Filters.css';

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    const name = e.target.name;
    this.props.onChange({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <br/>
        <input
          type="text"
          placeholder='Search...'
          name='filterText'
          value={this.props.filterText}
          onChange={this.handleChange}/>
        <br/>
        <p>
          <label className='unselectable'>
              <input
                type='checkbox'
                name='inStockOnly'
                checked={this.props.inStockOnly}
                onChange={this.handleChange}
              />
              Only show products in stock
          </label>
          <br/>
        </p>
      </div>
    )
  }
}
