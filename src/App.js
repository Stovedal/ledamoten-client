import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import logo from './logo.svg';
import hjartaikon from'./hjartaikon.jpg';
import kryssikon from'./kryssikon.jpg';
import Ledamoter from './api/components/ledamoterList';
import Ledarmot from './Components/Ledamot';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="header-img" src={require('./assets/images/LedaMoten.png')}/>
        <Ledamoter/>
      </div>
    );
  }
}

export default App;
