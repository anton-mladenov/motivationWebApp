import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from "../../actions/users"
import SignUpForm from "./SignUpForm"
import { Redirect } from 'react-router-dom'

class SignUp extends Component {

	handleSubmit = (data) => {
		this.props.signup(data.email, data.password)
	}

	render() {

		const { signUp } = this.props

		if (signUp.success) {
			return (
				<Redirect to="/dashboard" />
			)
		}

		return (
			<div>

				<h1> Create Your Account Here </h1>

				<SignUpForm onSubmit={this.handleSubmit} />

				<p> {signUp.error} </p>

			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	signUp: state.signUp
})

export default connect(mapStateToProps, { signup })(SignUp)