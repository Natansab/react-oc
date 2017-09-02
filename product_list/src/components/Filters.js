import React, { Component } from 'react';

export default class Filters extends Component {
  render() {
    return (
      <div>
        <br/>
        <input type="text" value="Search..." /><br/>
        <p>
          <label>
              <input id="checkBox" type="checkbox" />
              Only show products in stock
          </label><br/>
        </p>
      </div>
    )
  }
}
