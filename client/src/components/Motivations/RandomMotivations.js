import React, { Component } from 'react'
import {connect} from 'react-redux' 
import { getMotivations } from "../../actions/motivations"

class RandomMotivation extends Component {
	
	componentDidMount() {
		this.props.getMotivations()
	}

	randomizer = (array) => {
		return array.splice(Math.floor(Math.random() * array.length), 1)[0]
	} 
	
	render() {

		const { motivations } = this.props
		let randomMotivation = this.randomizer(motivations)

		return (
		<div>

			{
				randomMotivation && <h3> {randomMotivation.motivation} </h3>
			}

		</div>
		)
	}
}

const mapStateToProps = state => ({
	motivations: state.motivations
})

export default connect(mapStateToProps, { getMotivations })(RandomMotivation)
