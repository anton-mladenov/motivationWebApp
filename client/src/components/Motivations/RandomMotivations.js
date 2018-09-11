import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRandomMotivation } from "../../actions/motivations"
import Header from "../Header/Header"
import { Redirect } from 'react-router-dom'

class RandomMotivation extends Component {

	state = {
		value: false,
		counter: 0,
		randomMotivation: "",
	}

	onClick = (event) => {
		event && event.preventDefault()

		this.props.getRandomMotivation()

		this.setState((prevState) => {
			return {
				value: true,
				counter: prevState.counter + 1,
			}
		})
	}

	// componentDidUpdate(prevProps) {
	// 	console.log("this.props.randomNum from componentDidUpdate: ", typeof this.props.randomNum.motivation, this.props.randomNum.motivation)
	// 	console.log("prevProps.randomNum from componentDidUpdate: ", typeof prevProps.randomNum.motivation, prevProps.randomNum.motivation)
	// 	if (this.props.randomNum === prevProps.randomNum) {
	// 		console.log("message from ELSE from DidUpdate from componentDidUpdate: ")
	// 		return this.props.getRandomMotivation()
	// 	}
	// }

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
	randomNum: state.randomMotivation,
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps, { getRandomMotivation })(RandomMotivation)
