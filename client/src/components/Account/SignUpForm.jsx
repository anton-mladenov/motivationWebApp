import React, { Component } from 'react'
import { WrapperMain, Button, TextInsideMain } from "../../lib/styledComponentsLib"

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
				<WrapperMain>
					<form onSubmit={this.handleSubmit} >

						<div>
							<label>
								<TextInsideMain>Email:</TextInsideMain>
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
								<TextInsideMain>Password:</TextInsideMain>
								<input type="password" autoComplete="signup-form new-password" name="password" value={this.state.password || ""} onChange={this.handleChange} />
							</label>
						</div>

						<div>
							<label>
								<TextInsideMain>Confirm Password:</TextInsideMain>
								<input type="password" autoComplete="signup-form new-password" name="confirmPassword" value={this.state.confirmPassword || ""} onChange={this.handleChange} />
							</label>
						</div>

						{
							this.state.password &&
							this.state.confirmPassword &&
							this.state.password !== this.state.confirmPassword &&
							<TextInsideMain> The Passwords Do NOT Match </TextInsideMain>
						}

						<Button type="submit" > Create Account </Button>
					</form>
				</WrapperMain>
			</div>
		)
	}
}
