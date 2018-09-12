import React, { Component } from 'react'
import { Title, WrapperHeader, Button } from "../../lib/styledComponentsLib"
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
							Motivact
						</Title>
						<Button onClick={this.handleLogOut} > Log Out </Button>
					</WrapperHeader>

				</div>
			)
		} else {
			return (
				<div>

					<WrapperHeader>
						<Title>
							Motivact
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