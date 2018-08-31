import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMotivations } from "../../actions/motivations"
import { Title2 } from "../../lib/styledComponentsLib"
import { Redirect } from 'react-router-dom'

class DashboardComponent extends Component {

	componentDidMount() {
		this.props.getMotivations()
	}

	render() {

		const { motivations, signUp, currentUser } = this.props

		if (!signUp.success || !currentUser) {
			return (
				<Redirect to="/" />
			)
		}

		return (
			<div>

				{!motivations && <p> "Loading ..." </p>}

				{motivations && motivations.map(mot =>
					<div key={mot.id}>
						<Title2> {mot.motivation} </Title2>
					</div>
				)
				}

			</div>
		)
	}
}

const mapStateToProps = state => ({
	motivations: state.motivations,
	signUp: state.signUp,
	currentUser: state.currentUser
})

export default connect(mapStateToProps, { getMotivations })(DashboardComponent)