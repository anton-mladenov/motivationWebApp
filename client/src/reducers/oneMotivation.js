import { GET_ONE_MOTIVATION } from "../actions/motivations"

let initialState = []

export default function (state = initialState, action) {

	switch (action.type) {

		case GET_ONE_MOTIVATION:
			return action.payload

		default:
			return state
	}
}


