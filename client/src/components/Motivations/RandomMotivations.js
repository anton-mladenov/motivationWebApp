import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMotivations, getRandomMotivation } from "../../actions/motivations"
import Header from "../Header/Header"
import { Redirect } from 'react-router-dom'

class RandomMotivation extends Component {

	state = {
		value: false,
		counter: 0,
		randomMotivation: "",
	}

	// componentDidUpdate(prevProps) {
	// 	// moga da refactor-na tazi chast taka che da polzvam rekursiq za proverkata dali predhodnoto e kato segashnoto

	// 	if (this.props.randomNum !== prevProps.randomNum) {

	// 	} else {
	// 		console.log("__ this.props.randomNum: ", this.props.randomNum)
	// 		console.log("__ prevProps.randomNum: ", prevProps.randomNum)
	// 		this.props.getRandomMotivation()
	// 	}
	// }

	onClick = (event) => {
		event && event.preventDefault()

		this.props.getRandomMotivation()

		event && this.setState((prevState) => {
			return {
				value: true,
				counter: prevState.counter + 1,
			}
		})
	}

	render() {

		let value = this.state.value
		let counter = this.state.counter

		const { randomNum, currentUser } = this.props

		if (currentUser) {
			return (
				<div>

					<Header />

					<h1> Hello World </h1>

					<div onClick={this.onClick} >
						<button>
							Random Motivation
						</button>
					</div>

					<div>
						{
							value && counter !== 0 ?
								<h3> {randomNum.motivation} </h3>
								: null
						}
					</div>

				</div>
			)
		} else {
			return (
				<Redirect to="/" />
			)
		}
	}
}

const mapStateToProps = state => ({
	motivations: state.motivations,
	randomNum: state.randomMotivation,
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps, { getMotivations, getRandomMotivation })(RandomMotivation)
