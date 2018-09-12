import React, { Component } from 'react'
import { login } from "../../actions/users"
import { connect } from 'react-redux'
import SignInForm from "./SignInForm"
import { Redirect } from 'react-router-dom'
import Header from "../Header/Header"
import { WrapperMain, TextInsideMain, TitleInsideMain } from "../../lib/styledComponentsLib"

class SignIn extends Component {

	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {

		const { currentUser, error } = this.props

		if (currentUser) {
			return <Redirect to="/dashboard" />
		}

		return (
			<div>

				<Header />
				<WrapperMain>
					<TitleInsideMain> Sign In </TitleInsideMain>
					<TextInsideMain> If you already have an account you can sign in with the form below </TextInsideMain>

					<SignInForm onSubmit={this.handleSubmit} />

					{
						error &&
						<TextInsideMain> {error} </TextInsideMain>
					}
				</WrapperMain>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUser,
	error: state.login.error
})

export default connect(mapStateToProps, { login })(SignIn)