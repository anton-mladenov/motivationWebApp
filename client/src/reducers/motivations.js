import { GET_ALL_MOTIVATIONS, ADD_MOTIVATION } from "../actions/motivations"

let initialState = []

export default function (state = initialState, action) {
	
	switch (action.type) {
		
		case GET_ALL_MOTIVATIONS:
			return action.payload.allMotivations

		case ADD_MOTIVATION:
			return [...state, action.payload]

		default:
			return state
	}
}


