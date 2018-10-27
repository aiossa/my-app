import React, { Component } from 'react';
import logo from './logo.svg';
import olego './App.css';
import {simpleCalculation} from '../utils/utils';


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
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
