import React, {Component} from 'react';

export default class MyComponent extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { click: this.props.click };
  }

  handleClick() {
    console.log('click');
    this.setState({
      click: "Clicked"
    })
    setTimeout(() => { this.setState({
      click: "Click"})}, 2000);
  }



  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.click}
      </button>
    )
  }
}
