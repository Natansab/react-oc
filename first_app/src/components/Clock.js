import React, { Component } from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleString()
    };
    this.updateClock = this.updateClock.bind(this);
  }
  componentDidMount() {
    this.intervalID = setInterval(
      this.updateClock,
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  updateClock() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
    <p>
      The time is {this.state.time}
      <br/>
      <br/>
      This is var: {this.props.name}
    </p>
  );
  }
}
