import React, { Component } from 'react';
import logo from './logo.svg';
import Oleg from './names/olego';
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
        <Oleg/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>        
          <p>
            Result of calculation is {simpleCalculation(10,5)}
          </p>
      </div>
    );
  }
}

export default App;
