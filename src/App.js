import React, { Component } from 'react';
import logo from './logo.svg';
import Oleg from './names/olego';
import './App.css';
import Aiossa from './names/Aiossa';
import Tanya from './names/tanya';
import Aismag from './names/aismag';
import Vitaliy from './vitaliy'
import Albina_Gurova from  './names/gurova';
import Aiossa from './names/Aiossa'
import {simpleCalculation} from './utils/utils';

import Mchukmarov from './names/mchukmarov';
import Milyausha from './names/Milyausha'
import Jane from './names/jane';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!</h1>
        </header>       
         The group list:
        <Aiossa/>
        <Mchukmarov/>
         <Tanya/>
        <Jane/>
        <Albina_Gurova/>
        <Vitaliy/>
        <Oleg/>
        <Aismag/>
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
