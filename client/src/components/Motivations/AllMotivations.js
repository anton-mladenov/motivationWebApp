import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Title2 } from "../../lib/styledComponentsLib"
import { getMotivations, addMotivation } from "../../actions/motivations"
import AddNewMotivation from "./AddNewMotivation"

class AllMotivations extends Component {

	state = {
		value: ""
	}

	componentDidMount() {
		this.props.getMotivations()
	}

	addNewMotivation = (motivation) => {
		console.log("sending a new motivation")
		this.props.addMotivation(motivation)
	}

	randomizer = (array) => {
		return array.splice(Math.floor(Math.random() * array.length), 1)[0]
	}

	render() {

		const { motivations } = this.props

		return (
			<div>

				{!motivations && <p> "Loading ..." </p>}

				<AddNewMotivation onSubmit={this.addNewMotivation} />

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
	motivations: state.motivations
})

export default connect(mapStateToProps, { getMotivations, addMotivation })(AllMotivations)
