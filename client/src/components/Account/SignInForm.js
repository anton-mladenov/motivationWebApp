import React, { Component } from 'react'

export default class SignInForm extends Component {

	state = {}

	handleChange = (event) => {
		const { name, value } = event.target

		this.setState({
			[name]: value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.onSubmit(this.state)
	}

	render() {
		return (
			<div>

				<form onSubmit={this.handleSubmit} >

					<div>
						<label>
							Email:
							<input type="email" autoComplete="signup-form email" name="email" value={this.state.email || ""} onChange={this.handleChange} />
						</label>
					</div>

					<div>
						<label>
							Password:
							<input type="password" autoComplete="signup-form current-password" name="password" value={this.state.password || ""} onChange={this.handleChange} />
						</label>
					</div>

					<button type="submit" > Sign In </button>
				</form>

			</div>
		)
	}
}
