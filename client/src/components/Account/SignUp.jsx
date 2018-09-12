import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from "../../actions/users"
import SignUpForm from "./SignUpForm"
import { Redirect } from 'react-router-dom'
import Header from "../Header/Header"
import { WrapperMain, TitleInsideMain, TextInsideMain } from "../../lib/styledComponentsLib"

class SignUp extends Component {

	handleSubmit = (data) => {
		this.props.signup(data.email, data.password)
	}

	render() {

		const { signUp } = this.props

		if (signUp.success) {
			return (
				<Redirect to="/login" />
			)
		}

		return (
			<div>

				<Header />
				<WrapperMain>
					<TitleInsideMain> Create Your Account Here </TitleInsideMain>

					<SignUpForm onSubmit={this.handleSubmit} />

					<TextInsideMain> {signUp.error} </TextInsideMain>
				</WrapperMain>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	signUp: state.signUp
})

export default connect(mapStateToProps, { signup })(SignUp)