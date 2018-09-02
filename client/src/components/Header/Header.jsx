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

		const { signUp, currentUser } = this.props

		if (signUp.success || currentUser !== null) {
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

export default connect(mapStateToProps, { logout })(Header)