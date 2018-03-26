import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import logo from './logo.svg';
import hjartaikon from'./hjartaikon.jpg';
import kryssikon from'./kryssikon.jpg';
import LedamoterList from './api/components/ledamoterList';
import Ledarmot from './Components/Ledamot';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <h1 className="App-title">LedaMöter</h1>
        </header>
        <p className="App-intro">
          Här tar du reda på vilket parti du tillhör!
        </p>


        <img src={kryssikon} className="App-img" alt="kryssikon" />
        <img src={hjartaikon} className="App-img" alt="hjartaikon" />

        <Ledarmot/>
        <p>Test: {this.props.ledarmotName}</p>
        <LedamoterList/>

      </div>
    );
  }
}

export default App;
