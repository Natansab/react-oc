import React, {Component} from 'react';
import ChangeColorButton from './ChangeColorButton';

export default class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(props) {
    this.props.onClick();
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Change color
      </button>
    )
  }
}
