import React, { Component } from 'react';
import logo from './logo.svg';
import LedamoterList from './api/components/ledamoterList'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Välkommen till LedaMöten</h1>
        <p className="App-intro">
          Här tar du reda på vilket parti du tillhör!
        </p>
        <LedamoterList/>
        <button className="button" id="vButton"><span>Vänster </span></button>
        <button className="button" id="hButton"><span>Höger </span></button>
        <p>Props från KomponentNamn:</p>
      </div>
    );
  }
}

export default App;
