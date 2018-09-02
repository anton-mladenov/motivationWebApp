import React, { Component } from 'react'
import { Title, Wrapper } from "../../lib/styledComponentsLib"
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import { logout } from '../../actions/users'

class Header extends Component {

	handleLogOut = () => {
		this.props.logout()
	}

	render() {

		const { authenticated, loginSuccess } = this.props

		if (authenticated) {
			return (
				<div>

					<Wrapper>
						<Title>
							Welcome to Motivact
						</Title>
						<button onClick={this.handleLogOut} > Log Out </button>
					</Wrapper>

				</div>
			)
		}

		if (authenticated) {
			return (
				<div>

					<Wrapper>
						<Title>
							Welcome to Motivact
						</Title>
						<button onClick={this.handleLogOut} > Log Out </button>
					</Wrapper>

				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	signUpSuccess: state.signUp.success,
	signUpError: state.signUp.error,
	loginSuccess: state.currentUser,
	loginFailure: state.login.error,
	authenticated: state.currentUser !== null
})

export default connect(mapStateToProps, { logout })(Header)