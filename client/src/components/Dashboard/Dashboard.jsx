import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMotivations, addMotivation } from "../../actions/motivations"
import { Redirect } from 'react-router-dom'
import Header from "../Header/Header"
import { WrapperMain, Button } from "../../lib/styledComponentsLib"

class DashboardComponent extends Component {

	state = {
		showAll: false,
		showRandom: false
	}

	showAll = (event) => {
		event.preventDefault()
		this.setState({ showAll: true })
	}

	showRandom = (event) => {
		event.preventDefault()
		this.setState({ showRandom: true })
	}

	addNewMotivation = (motivation) => {
		this.props.addMotivation(motivation)
	}

	render() {

		const { signUp, currentUser } = this.props

		if (this.state.showAll) {
			return (
				<Redirect to="/all" />
			)
		}

		if (this.state.showRandom) {
			return (
				<Redirect to="/random" />
			)
		}

		if (currentUser || signUp) {
			return (
				<div>

					<Header />
					<WrapperMain>
						<div onClick={this.showAll}>
							<h4>
								<Button> Show All Motivations </Button>
							</h4>
						</div>

						<div onClick={this.showRandom}>
							<h4>
								<Button> Show a Random Motivation </Button>
							</h4>
						</div>
					</WrapperMain>
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
	signUp: state.signUp.success,
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps, { getMotivations, addMotivation })(DashboardComponent)