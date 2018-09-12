import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMotivations, addMotivation } from "../../actions/motivations"
import { Title, WrapperMain, TextInsideMain } from "../../lib/styledComponentsLib"
import { Redirect, Link } from 'react-router-dom'
import Header from "../Header/Header"
import MotivationForm from "./MotivationForm"


class AllMotivationsComponent extends Component {

	componentDidMount() {
		this.props.getMotivations()
	}

	addNewMotivation = (motivation) => {
		this.props.addMotivation(motivation)
	}

	render() {

		const { motivations, currentUser } = this.props

		if (currentUser) {
			return (
				<div>

					<Header />
					<WrapperMain>

						{!motivations && <TextInsideMain> "Loading ..." </TextInsideMain>}

						<MotivationForm onSubmit={this.addNewMotivation} />

						{
							motivations && motivations.map(mot =>
								< div key={mot.id} >
									<Title> <Link to={`/all/${mot.id}`}> {mot.motivation} </Link> </Title>
								</div>
							)
						}

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
	motivations: state.motivations,
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps, { getMotivations, addMotivation })(AllMotivationsComponent)