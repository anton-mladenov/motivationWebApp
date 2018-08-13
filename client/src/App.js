import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Title, Wrapper } from "./lib/styledComponentsLib"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Motivact</h1>
        </header>
        <p className="App-intro">
		<Wrapper>
		<Title>
        To get started, edit <code>src/App.js</code> and save to reload.
        </Title>
        </Wrapper>
		</p>
      </div>
    );
  }
}

export default App;
