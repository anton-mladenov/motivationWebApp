import React, { Component } from 'react'
import { Title, WrapperHeader } from "../../lib/styledComponentsLib"
import { connect } from 'react-redux'
import { logout, userSignupFailed } from '../../actions/users'

class Header extends Component {

	handleLogOut = () => {
		this.props.logout()
		this.props.userSignupFailed("you have logged out after the initial sign up")
	}

	render() {

		const { currentUser } = this.props

		if (currentUser !== null) {
			return (
				<div>

					<WrapperHeader>
						<Title>
							Welcome to Motivact
						</Title>
						<button onClick={this.handleLogOut} > Log Out </button>
					</WrapperHeader>

				</div>
			)
		} else {
			return (
				<div>

					<WrapperHeader>
						<Title>
							Welcome to Motivact
						</Title>
					</WrapperHeader>

				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
})

export default connect(mapStateToProps, { logout, userSignupFailed })(Header)