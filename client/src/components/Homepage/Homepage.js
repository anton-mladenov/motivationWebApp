import React, { Component } from 'react';
import SignUp from "../Account/SignUp"
import SignIn from "../Account/SignIn"
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Homepage extends Component {

	render() {

		const { signUp } = this.props

		if (signUp.success) {
			return (
				<Redirect to="/dashboard" />
			)
		}

		return (
			<div>

				<div>
					<h1> Hello World </h1>
				</div>

				{/* <div onClick={() => { this.props.history.push("/dashboard") }} >
					<h1> Dashboard </h1>
				</div> */}

				<div>
					<h4> Sign Up </h4>
					<SignUp />
				</div>

				<div>
					<h4> Sign In </h4>
					<SignIn />
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	signUp: state.signUp,
})

export default connect(mapStateToProps)(Homepage)