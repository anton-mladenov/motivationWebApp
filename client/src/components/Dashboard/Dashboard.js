import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMotivations } from "../../actions/motivations"
import { Title2 } from "../../lib/styledComponentsLib"
import { Redirect } from 'react-router-dom'
import Header from "../Header/Header"

class DashboardComponent extends Component {

	componentDidMount() {
		this.props.getMotivations()
	}

	render() {

		const { motivations, signUp, noSignUp, noCurrentUser, currentUser } = this.props

		// if (noCurrentUser) {
		// 	return (
		// 		<Redirect to="/" />
		// 	)
		// }

		if (currentUser || signUp) {
			return (
				<div>

					<Header />

					{!motivations && <p> "Loading ..." </p>}

					{
						motivations && motivations.map(mot =>
							<div key={mot.id}>
								<Title2> {mot.motivation} </Title2>
							</div>
						)
					}

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
	signUp: state.signUp.success,
	noSignUp: state.signUp.error || state.signUp === {},
	noCurrentUser: state.currentUser === null,
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps, { getMotivations })(DashboardComponent)