import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Layout from './components/Layout';

const hello = "Dynamic Value Expression";
class App extends Component {
  render() {
    const title = "Alan Natan";
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{hello}</h2>
        </div>
        <p className="App-intro">
            Hi {this.props.someName}!
        </p>
        {/* <Clock /> */}
        <Layout />
      </div>
    );
  }
}

export default App;
