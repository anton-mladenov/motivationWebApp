import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRandomMotivation } from "../../actions/motivations"
import Header from "../Header/Header"
import { Redirect } from 'react-router-dom'

class RandomMotivation extends Component {

	state = {
		value: false,
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

	render() {

		let value = this.state.value

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
							value ?
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
