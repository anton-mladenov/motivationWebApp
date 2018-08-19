import React, { Component } from 'react'
import {connect} from 'react-redux'
// import { Title2 } from "../../lib/styledComponentsLib"
import { addMotivation } from "../../actions/motivations"

class AddNewMotivation extends Component {
	
	state = {
		value: ""
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value })
	}

	handleSubmit = (event) => {
		console.log(typeof this.state.value)
		event.preventDefault()
		this.props.addMotivation(this.state.value)
	}
	
	render() {

		return (
		<div>

			<form onSubmit={this.handleSubmit}>
				<label>
					Add A New Motivation
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>

		</div>
		)
	}
}

export default connect(null, { addMotivation })(AddNewMotivation)
