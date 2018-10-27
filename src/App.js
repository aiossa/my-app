import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Aismag from './names/aismag';
=======
import Aiossa from './names/Aiossa'
>>>>>>> origin/master
import {simpleCalculation} from './utils/utils';
import Mchukmarov from './names/mchukmarov';
import Milyausha from './names/Milyausha'

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Albina1!!!</h1>
        </header>
<<<<<<< HEAD
        
        <Aismag/>

=======
        The group list:
        <Aiossa/>
        <Mchukmarov/>
>>>>>>> origin/master
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p class={Milyausha}></p>
        <p>
            Result of calculation is {simpleCalculation(10,5)}
          </p>
      </div>
    );
  }
}

export default App;
