import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Title2 } from "../../lib/styledComponentsLib"
import { getMotivations } from "../../actions/motivations"

class AllMotivations extends Component {
	
	state = {
		value: ""
	}

	componentDidMount() {
		this.props.getMotivations()
	}

	randomizer = (array) => {
		return array.splice(Math.floor(Math.random() * array.length), 1)[0]
	}  
	
	render() {

		const { motivations } = this.props
		let aaa = this.randomizer(motivations)

		return (
		<div>
			
			{
				// console.log(motivations)
				aaa && console.log(aaa.motivation)
			}

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

export default connect(mapStateToProps, { getMotivations })(AllMotivations)
