import React, { Component } from 'react';
import SignUp from "../Account/SignUp"
import SignIn from "../Account/SignIn"
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
		// return (
		// 	<Redirect to="/login" />
		// )
	}

	showSignUp = (event) => {
		event.preventDefault()
		console.log("___ from show sign UP")
		this.setState({ showSignUp: true })
		// return (
		// 	<Redirect to="/signup" />
		// )
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

				{/* <div onClick={() => { this.props.history.push("/dashboard") }} >
					<h1> Dashboard </h1>
				</div> */}

				<div onClick={this.showSignIn}>
					<h5> <button> Click here to sign in </button> </h5>
				</div>

				<div onClick={this.showSignUp}>
					<button> <h5> Click here to create an account </h5> </button>
				</div>

				{/* <div>
					<h4> Sign Up </h4>
					<SignUp />
				</div>

				<div>
					<h4> Sign In </h4>
					<SignIn />
				</div> */}

			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUser !== null
})

export default connect(mapStateToProps)(Homepage)
