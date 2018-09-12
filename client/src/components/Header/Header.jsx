import React, { Component } from 'react'
import { Title, WrapperHeader, Button } from "../../lib/styledComponentsLib"
import { connect } from 'react-redux'
import { logout, userSignupFailed } from '../../actions/users'
import { Redirect } from 'react-router-dom'

class Header extends Component {

	state = {
		dashButtonClicked: false
	}

	handleLogOut = () => {
		this.props.logout()
		this.props.userSignupFailed("you have logged out after the initial sign up")
	}

	handleDashboard = () => {
		this.setState({
			dashButtonClicked: true
		})
	}

	render() {

		const { currentUser } = this.props

		if (this.state.dashButtonClicked === true) {
			return (
				<Redirect to="/dashboard" />
			)
		}

		if (currentUser !== null) {
			return (
				<div>

					<WrapperHeader>
						<Title>
							Motivact
						</Title>
						<Button onClick={this.handleLogOut} > Log Out </Button>
						<Button onClick={this.handleDashboard} > Go To Dashboard </Button>
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