import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Välkommen till LedaMöter</h1>
        </header>
        <p className="App-intro">
          Här tar du reda på vilket parti du tillhör!
        </p>

        <button className="button" id="vButton"><span>Vänster </span></button>
        <button className="button" id="hButton"><span>Höger </span></button>
        <p>Props från KomponentNamn: {this.props.}</p>

      </div>
    );
  }
}

export default App;
