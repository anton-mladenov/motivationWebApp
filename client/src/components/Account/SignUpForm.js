import React, { Component } from 'react'

export default class SignUpForm extends Component {

	state = {}

	handleChange = () => { }

	handleSubmit = () => { }

	render() {
		return (
			<div>

				<form>

					<div>
						<label>
							Email:
							<input />
						</label>
					</div>

					<div>
						<label>
							Email:
							<input />
						</label>
					</div>

					<div>
						<label>
							Password:
							<input />
						</label>
					</div>

					<div>
						<label>
							Confirm Password:
							<input />
						</label>
					</div>

				</form>

			</div>
		)
	}
}
