import { GET_ALL_MOTIVATIONS, ADD_MOTIVATION, EDIT_MOTIVATION, DELETE_MOTIVATION } from "../actions/motivations"

let initialState = []

export default function (state = initialState, action) {

	switch (action.type) {

		case GET_ALL_MOTIVATIONS:
			return action.payload.allMotivations

		case ADD_MOTIVATION:
			return [...state, action.payload]

		case EDIT_MOTIVATION:
			return state.map(mot => {
				if (action.payload.id === mot.id) {
					return action.payload
				} else {
					return mot
				}
			})

		case DELETE_MOTIVATION:
			return state.filter(motivation => motivation.id !== action.payload)

		default:
			return state
	}
}


