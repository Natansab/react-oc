import React, { Component } from 'react';
import './Filters.css';

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: ''};
  }

  handleChange(event, props) {
    this.setState({value: event.target.value.toUpperCase()});
    console.log(this.props);
    this.props.onChange(event);
  }

  handleClick(props) {
    this.props.onClick();
    console.log(this.props.inStockOnly);
  }

  render() {
    return (
      <div>
        <br/>
        <input type="text" placeholder='Search...' value={this.props.filterText} onChange={this.handleChange}/>
        My search is : {this.state.value}
        <br/>
        Props.filterText = {this.props.filterText}
        <br/>
        <p>
          <label className='unselectable'>
              <input
                id='checkBox'
                type='checkbox'
                checked={this.props.inStockOnly}
                onClick={this.handleClick}/>
              Only show products in stock
          </label><br/>
        </p>
      </div>
    )
  }
}
