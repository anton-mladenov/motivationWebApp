import { GET_ALL_MOTIVATIONS } from "../actions/motivations"

let initialState = []

export default function (state = initialState, action) {
	
	switch (action.type) {
		
		case GET_ALL_MOTIVATIONS:
			return action.payload.allMotivations

		default:
			return state
	}
}