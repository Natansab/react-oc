import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let name="NAT";
let time = new Date().toLocaleString();
ReactDOM.render(<App someName={name} time={time}/>, document.getElementById('root'));
registerServiceWorker();
