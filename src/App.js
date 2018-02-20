import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/SideBar'
import { Canvas } from './components/Canvas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SIEMENS</h1>
          <h2 className="App-subtitle">Ingenuity for life</h2>
        </header>
        <div className="App-body">
          <SideBar />
          <Canvas />
        </div>
      </div>
    );
  }
}

export default App;
