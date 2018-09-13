import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMotivation, editMotivation, deleteMotivation } from "../../actions/motivations"
import MotivationForm from "./MotivationForm"
import Header from "../Header/Header"
import { Redirect } from 'react-router-dom'
import { WrapperMain, TextInsideMain, Button } from "../../lib/styledComponentsLib"

class OneMotivationDetails extends Component {

	motivationId = parseInt(this.props.match.params.id, 10)

	state = {
		edit: false,
		backToAll: false
	}

	toggleEdit = () => {
		this.setState({
			edit: !this.state.edit
		})
	}

	handleBackToAll = () => {
		this.setState({
			backToAll: true
		})
	}

	componentDidMount() {
		this.props.getMotivation(this.motivationId)
	}

	updateMotivation = (motivation) => {
		// tova e dobre da izprashta cql object, za da moje v budeshte da se dobavqt oshte properties na nego
		this.props.editMotivation(this.motivationId, motivation)
		this.toggleEdit()
	}

	deleteMotivation = () => {
		this.props.deleteMotivation(this.motivationId)
		this.handleBackToAll()
	}

	render() {

		const { oneMotivation, currentUser } = this.props

		if (this.state.backToAll === true) {
			return (
				<Redirect to="/all" />
			)
		}

		if (currentUser && !oneMotivation) return (
			<div>
				<Header />
				<WrapperMain>
					{!oneMotivation && <TextInsideMain> Loading ... </TextInsideMain>}
				</WrapperMain>
			</div>
		)

		if (currentUser) {
			return (
				<div>

					<Header />
					<WrapperMain>
						{/* {!oneMotivation && <TextInsideMain> Loading ... </TextInsideMain>} */}

						{
							<Button onClick={this.handleBackToAll}> Back To All Motivations </Button>
						}

						{
							this.state.edit &&
							<MotivationForm initialValues={oneMotivation} onSubmit={this.updateMotivation} />
						}

						{
							!this.state.edit &&
							<div>
								<TextInsideMain> ID: {oneMotivation.id} </TextInsideMain>
								<TextInsideMain> Motivation Text: {oneMotivation.motivation} </TextInsideMain>
								<Button onClick={this.toggleEdit} > Edit </Button>
								<Button onClick={this.deleteMotivation} > Delete </Button>
							</div>
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
	oneMotivation: state.oneMotivation,
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps, { getMotivation, editMotivation, deleteMotivation })(OneMotivationDetails)