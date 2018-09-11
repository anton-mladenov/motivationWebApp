import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Header from "../Header/Header"
import { WrapperMain, TextInsideMain, Button } from "../../lib/styledComponentsLib"

class Homepage extends Component {

	state = {
		showSignIn: false,
		showSignUp: false
	}

	showSignIn = (event) => {
		event.preventDefault()
		this.setState({ showSignIn: true })
	}

	showSignUp = (event) => {
		event.preventDefault()
		this.setState({ showSignUp: true })
	}

	render() {

		const { currentUser } = this.props

		if (currentUser) {
			return (
				<Redirect to="/dashboard" />
			)
		}

		if (this.state.showSignIn) {
			return (
				<Redirect to="/login" />
			)
		}

		if (this.state.showSignUp) {
			return (
				<Redirect to="/signup" />
			)
		}

		return (
			<div>

				<Header />
				<WrapperMain>
					<div>
						<TextInsideMain> Hello World </TextInsideMain>
					</div>

					<div onClick={this.showSignIn}>
						<Button> Click here to sign in </Button>
					</div>

					<div onClick={this.showSignUp}>
						<Button>  Click here to create an account </Button>
					</div>
				</WrapperMain>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps)(Homepage)
