import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Header from "../Header/Header"

class Homepage extends Component {

	state = {
		showSignIn: false,
		showSignUp: false
	}

	showSignIn = (event) => {
		event.preventDefault()
		console.log("___ from show sign IN")
		this.setState({ showSignIn: true })
	}

	showSignUp = (event) => {
		event.preventDefault()
		console.log("___ from show sign UP")
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

				<div>
					<h1> Hello World </h1>
				</div>

				<div onClick={this.showSignIn}>
					<h5> <button> Click here to sign in </button> </h5>
				</div>

				<div onClick={this.showSignUp}>
					<button> <h5> Click here to create an account </h5> </button>
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps)(Homepage)
