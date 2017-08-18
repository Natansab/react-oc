import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Will',
      date: new Date().toLocaleString(),
    };
    console.log(this.props);
  }
  render() {
    setTimeout(() => {
      this.setState({date: new Date().toLocaleString() });
    }, 1000);
    return (
      <div>
        <h5>{this.state.name}</h5>
        <h5>{this.props.title}</h5>
        <footer>Current date is: {this.state.date}</footer>
      </div>
  );
  }
}
