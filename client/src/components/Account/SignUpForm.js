import React, { Component } from 'react'

export default class SignUpForm extends Component {

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

					{/* <div>
						<label>
							Username:
							<input type="username" name="username" value={this.state.username || ""} onChange={this.handleChange} />
						</label>
					</div> */}

					<div>
						<label>
							Password:
							<input type="password" autoComplete="signup-form new-password" name="password" value={this.state.password || ""} onChange={this.handleChange} />
						</label>
					</div>

					<div>
						<label>
							Confirm Password:
							<input type="password" autoComplete="signup-form new-password" name="confirmPassword" value={this.state.confirmPassword || ""} onChange={this.handleChange} />
						</label>
					</div>

					{
						this.state.password &&
						this.state.confirmPassword &&
						this.state.password !== this.state.confirmPassword &&
						<p> The Passwords Do NOT Match </p>
					}

					<button type="submit" > Create Account </button>
				</form>

			</div>
		)
	}
}
