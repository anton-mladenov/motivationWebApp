import React, { Component } from 'react'
import { Title, Wrapper } from "../../lib/styledComponentsLib"
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import { logout, userSignupFailed } from '../../actions/users'

class Header extends Component {

	handleLogOut = () => {
		this.props.logout()
		this.props.userSignupFailed("you have logged out after the initial sign up")
	}

	render() {

		const { signUp, currentUser } = this.props

		if (currentUser !== null) {
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
		} else {
			return (
				<div>

					<Wrapper>
						<Title>
							Welcome to Motivact
						</Title>
					</Wrapper>

				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	signUp: state.signUp,
	currentUser: state.currentUser
})

export default connect(mapStateToProps, { logout, userSignupFailed })(Header)