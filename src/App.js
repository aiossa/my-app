import React, { Component } from 'react';
import logo from './logo.svg';
import Oleg from './names/olego';
import './App.css';
import {simpleCalculation, compareTwoNumbers} from './utils/utils';
import Yulia from './names/Yulia';
import Aiossa from './names/Aiossa';
import Tanya from './names/tanya';
import Aismag from './names/aismag';
import Vitaliy from './names/vitaliy';
import AlbinaGurova from  './names/gurova';
import Aganieva from './names/aganieva';
import {simpleCalculation} from './utils/utils';
import Mchukmarov from './names/mchukmarov';
import Milyausha from './names/Milyausha';
import Jane from './names/jane';
import Apesegov from './names/apesegov';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {maxNumber:0};
  }

  handleButtonPress(inp1, inp2) {
    
    this.setState({
      maxNumber: compareTwoNumbers(inp1, inp2)
    })
  }

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
        <AlbinaGurova/>
        <Aganieva/>
        <Vitaliy/>
        <Yulia/>
        <Oleg/>
        <Aismag/>
        <Apesegov/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p class={Milyausha}></p>
        <p>
            Result of calculation is {simpleCalculation(10,5)}
          </p>
          </div>
          <div>
            <input id = "inp1"></input>
            <input id = "inp2"></input>
            <button onClick={() => this.handleButtonPress(document.getElementById("inp1").value,
            document.getElementById("inp2").value
            )} >Сравни числа!</button>          
          </div>
          <p> Максимальное число {this.state.maxNumber}
          </p>
          
      </div>
    );
  }
}

export default App;