import React, { Component } from 'react';
import './App.css';
import { Title, Wrapper } from "./lib/styledComponentsLib"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard"
import AddNewMotivation from "./components/Motivations/AddNewMotivation"

class App extends Component {
  render() {
    return (
		<Router>
		<div className="App">

			<Wrapper>
			<Title>
			Welcome to Motivact
			</Title>
			</Wrapper>

			<main>
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/new" component={AddNewMotivation} />
			</main>

		</div>
		</Router>
    );
  }
}

export default App;
