import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMotivation, editMotivation, deleteMotivation } from "../../actions/motivations"
import MotivationForm from "./MotivationForm"

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
		this.props.getMotivation(this.motivationId)
	}

	updateMotivation = (motivation) => {
		// console.log("sending updated motivation", motivation)
		// tova e dobre da izprashta cql object, za da moje v budeshte da se dobavqt oshte properties na nego
		this.props.editMotivation(this.motivationId, motivation)
		this.toggleEdit()
	}

	deleteMotivation = () => {
		this.props.deleteMotivation(this.motivationId)
		// tuk redirect-vam kum lista s motivations
	}

	render() {

		const { oneMotivation } = this.props

		if (!oneMotivation) return null

		return (
			<div>

				{
					this.state.edit &&
					<MotivationForm initialValues={oneMotivation} onSubmit={this.updateMotivation} />
				}

				{
					!this.state.edit &&
					<div>
						<button onClick={this.toggleEdit} > Edit </button>
						<button onClick={this.deleteMotivation} > Delete </button>
						<h6> {oneMotivation.id} </h6>
						<h2> {oneMotivation.motivation} </h2>
					</div>
				}

			</div>
		)
	}
}

const mapStateToProps = state => ({
	oneMotivation: state.oneMotivation
})

export default connect(mapStateToProps, { getMotivation, editMotivation, deleteMotivation })(OneMotivationDetails)