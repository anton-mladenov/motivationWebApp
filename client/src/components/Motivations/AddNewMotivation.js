import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Title2 } from "../../lib/styledComponentsLib"
import { getMotivations, addMotivation } from "../../actions/motivations"

class AddNewMotivation extends Component {
	
	state = {
		value: "you can type here..."
	}

	componentDidMount() {
		this.props.getMotivations()
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

		const { motivations } = this.props

		return (
		<div>

			{ !motivations && <p> "Loading ..." </p> }

			<form onSubmit={this.handleSubmit}>
				<label>
					Add A New Motivation
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>

			{ motivations && motivations.map(mot => 
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
	motivations: state.motivations

})

export default connect(mapStateToProps, { getMotivations, addMotivation })(AddNewMotivation)
