import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getMotivations } from "../../actions/motivations"
import { Title2 } from "../../lib/styledComponentsLib"

class DashboardComponent extends Component {

	componentDidMount() {
		this.props.getMotivations()
	}

	render() {

		const { motivations } = this.props

		return (
			<div>
			
			{ !motivations && <p> "Loading ..." </p> }
		
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

export default connect(mapStateToProps, { getMotivations })(DashboardComponent)