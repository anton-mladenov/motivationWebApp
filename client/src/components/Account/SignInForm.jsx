import React, { Component } from 'react'
import { WrapperMain, Button, TextInsideMain, TextInput } from "../../lib/styledComponentsLib"

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
				<WrapperMain>
					<form onSubmit={this.handleSubmit} >

						<div>
							<label>
								<TextInsideMain>Email:</TextInsideMain>
								<TextInput type="email" autoComplete="signup-form email" name="email" value={this.state.email || ""} onChange={this.handleChange} />
							</label>
						</div>

						<div>
							<label>
								<TextInsideMain>Password:</TextInsideMain>
								<TextInput type="password" autoComplete="signup-form current-password" name="password" value={this.state.password || ""} onChange={this.handleChange} />
							</label>
						</div>

						<Button type="submit" > Sign In </Button>
					</form>
				</WrapperMain>
			</div>
		)
	}
}
