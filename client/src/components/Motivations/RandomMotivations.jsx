import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRandomMotivation } from "../../actions/motivations"
import Header from "../Header/Header"
import { Redirect } from 'react-router-dom'
import { WrapperMain, TextInsideMain, TitleInsideMain, Button } from "../../lib/styledComponentsLib"

class RandomMotivation extends Component {

	state = {
		value: false,
	}

	onClick = (event) => {
		event && event.preventDefault()

		this.props.getRandomMotivation()

		this.setState((prevState) => {
			return {
				value: true,
			}
		})
	}

	render() {

		let value = this.state.value

		const { randomNum, currentUser } = this.props

		if (currentUser) {
			return (
				<div>

					<Header />
					<WrapperMain>
						<TitleInsideMain> Random Motivation For You </TitleInsideMain>

						<div onClick={this.onClick} >
							<Button>
								Random Motivation
							</Button>
						</div>

						<div>
							{
								value ?
									<TextInsideMain> {randomNum.motivation} </TextInsideMain>
									: null
							}
						</div>
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
	randomNum: state.randomMotivation,
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps, { getRandomMotivation })(RandomMotivation)
