import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMotivation, editMotivation, deleteMotivation } from "../../actions/motivations"
import MotivationForm from "./MotivationForm"
import Header from "../Header/Header"
import { Redirect } from 'react-router-dom'

class OneMotivationDetails extends Component {

	motivationId = parseInt(this.props.match.params.id, 10)

	state = {
		edit: false
	}

	toggleEdit = () => {
		this.setState({
			edit: !this.state.edit
		})
	}

	componentDidMount() {
		console.log("getting mot with ID: ", this.motivationId)
		this.props.getMotivation(this.motivationId)
	}

	updateMotivation = (motivation) => {
		// tova e dobre da izprashta cql object, za da moje v budeshte da se dobavqt oshte properties na nego
		this.props.editMotivation(this.motivationId, motivation)
		this.toggleEdit()
	}

	deleteMotivation = () => {
		this.props.deleteMotivation(this.motivationId)
		// tuk redirect-vam kum lista s motivations
	}

	render() {

		const { oneMotivation, currentUser } = this.props

		if (!oneMotivation) return null

		if (currentUser) {
			return (
				<div>

					<Header />

					{!oneMotivation && <p> Loading ... </p>}

					{
						this.state.edit &&
						<MotivationForm initialValues={oneMotivation} onSubmit={this.updateMotivation} />
					}

					{
						!this.state.edit &&
						<div>
							<button onClick={this.toggleEdit} > Edit </button>
							<button onClick={this.deleteMotivation} > Delete </button>
							<h4> {oneMotivation.id} </h4>
							<h2> {oneMotivation.motivation} </h2>
						</div>
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
	oneMotivation: state.oneMotivation,
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps, { getMotivation, editMotivation, deleteMotivation })(OneMotivationDetails)