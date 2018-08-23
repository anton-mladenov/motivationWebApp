import React, { Component } from 'react';
import './App.css';
import { Title, Wrapper } from "./lib/styledComponentsLib"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard"
import MotivationForm from "./components/Motivations/MotivationForm"
import Homepage from "./components/Homepage/Homepage"
import AllMotivations from "./components/Motivations/AllMotivations"
import OneMotivationDetails from "./components/Motivations/OneMotivationDetails"

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
						<Switch>
							<Route exact path="/" component={Homepage} />
							<Route exact path="/dashboard" component={Dashboard} />
							<Route exact path="/all" component={AllMotivations} />
							<Route exact path="/all/:id" component={OneMotivationDetails} />
							<Route exact path="/new" component={MotivationForm} />
						</Switch>
					</main>

				</div>
			</Router>
		);
	}
}

export default App;
