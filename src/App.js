import React, { Component } from 'react';
import logo from './logo.svg';
import olego'./names/olego.js';
import './App.css';
import {simpleCalculation} from './utils/utils';


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </header>
          Group:        
        <olego/>
            <p>
            Result of calculation is {simpleCalculation(10,5)}
          </p>
      </div>
    );
  }
}

export default App;
