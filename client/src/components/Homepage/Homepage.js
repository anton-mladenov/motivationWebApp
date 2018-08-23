import React, { Component } from 'react';

export default class Homepage extends Component {

	render() {

		return (
			<div>

				<div>
					<h1> Hello World </h1>
				</div>

				<div onClick={() => { this.props.history.push("/dashboard") }} >
					<h1> Dashboard </h1>
				</div>

				<div>
					<h4> Sign Up </h4>
				</div>

				<div>
					<h4> Sign In </h4>
				</div>

			</div>
		)
	}
}
