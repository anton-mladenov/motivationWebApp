import { RANDOM_MOTIVATION } from "../actions/motivations"

let initialState = []

export default function (state = initialState, action) {
	
	switch (action.type) {
		
		case RANDOM_MOTIVATION:
			return action.payload

		default:
			return state
	}
}


