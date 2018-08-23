import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMotivations, newRandomMotivation } from "../../actions/motivations"

class RandomMotivation extends Component {

	state = {
		value: false,
		counter: 0,
		randomMotivation: "",
		// randomNum: null,
		// motivationId: null
	}

	componentDidMount() {
		this.props.getMotivations()
	}

	componentDidUpdate(prevProps) {
		if (this.props.randomNum === prevProps.randomNum) {
			// console.log("componentDidUpdate - INSIDE 1st IF: ", this.props.randomNum)

			let motivations = this.props.motivations
			let randomNumber1 = this.randomizer(motivations)

			if (this.props.randomNum === randomNumber1) {
				let motivations = this.props.motivations
				let randomNumber = this.randomizer(motivations)
				// console.log("componentDidUpdate - INSIDE 222nd IF: ", randomNumber)
				this.props.newRandomMotivation(randomNumber)
			} else if ((this.props.randomNum !== randomNumber1)) {
				// console.log("componentDidUpdate - INSIDE 222nd ELSE IF: ", randomNumber1)
				this.props.newRandomMotivation(randomNumber1)
			}
		}
		// console.log("componentDidUpdate - INSIDE ROOT: ", this.props.randomNum)
	}

	onClick = (event) => {
		event && event.preventDefault()

		let motivations = this.props.motivations
		let randomNumber = this.randomizer(motivations)
		// console.log("BEFORE Update: ", randomNumber)

		this.props.newRandomMotivation(randomNumber)

		event && this.setState((prevState) => {
			return {
				value: true,
				counter: prevState.counter + 1,
			}
		})
	}

	randomizer = (array) => {
		return Math.floor(Math.random() * array.length)
	}

	render() {

		let value = this.state.value
		let counter = this.state.counter

		const { motivations, randomNum } = this.props

		let motId = motivations[randomNum]

		return (
			<div>

				<h1> Hello World </h1>

				<div onClick={this.onClick} >
					<button>
						Random Motivation
				</button>
				</div>

				<div>
					{
						value && counter !== 0 ?
							motivations
								.map(mot => mot.id === motId.id ? <h3 key={mot.id}> {mot.motivation} </h3> : null)
							: null
					}
				</div>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	motivations: state.motivations,
	randomNum: state.randomMotivation
})

export default connect(mapStateToProps, { newRandomMotivation, getMotivations })(RandomMotivation)
