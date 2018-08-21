import { GET_ONE_MOTIVATION, EDIT_MOTIVATION, DELETE_MOTIVATION } from "../actions/motivations"

// let initialState = []

export default function (state = null, action) {

	switch (action.type) {

		case GET_ONE_MOTIVATION:
			return action.payload

		case EDIT_MOTIVATION:
			if (action.payload.id === state.id) {
				// console.log("from the EDIT reducer", action.payload.motivation)
				return action.payload
			} else {
				return state
			}

		case DELETE_MOTIVATION:
			console.log("delete from reducer: ", action.payload)
			return state.filder(motivation => motivation.id !== action.payload)

		default:
			return state
	}
}


