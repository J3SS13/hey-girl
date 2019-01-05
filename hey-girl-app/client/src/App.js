import React, { Component } from 'react';
import './App.css';
import Engineering from './components/Engineering/Engineering';
import Entertainment from './components/Entertainment/Entertainment';
import Medicine from './components/Medicine/Medicine';
import Science from './components/Science/Science';
import Tech from './components/Tech/Tech';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <Engineering />
        <Entertainment />
        <Medicine />
        <Science />
        <Tech />

      </div>
    );
  }
}

export default App;
