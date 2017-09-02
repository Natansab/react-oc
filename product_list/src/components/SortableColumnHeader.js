import React, { Component } from 'react';

export default class SortableColumnHeader extends Component {
  render() {
    return (
      <th>
        {this.props.column}
        <button>&#x25B2;</button>
        <button>&#x25BC;</button>
      </th>
    )
  }
}
