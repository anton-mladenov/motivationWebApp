import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMotivation } from "../../actions/motivations"

class OneMotivation extends Component {

	motivationId = parseInt(this.props.match.params.id, 10)

	componentDidMount() {
		this.props.getMotivation(this.motivationId)
	}

	render() {

		const { oneMotivation } = this.props

		return (
			<div>
				<div>
					<h6> {oneMotivation.id} </h6>
					<h2> {oneMotivation.motivation} </h2>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	oneMotivation: state.oneMotivation
})

export default connect(mapStateToProps, { getMotivation })(OneMotivation)