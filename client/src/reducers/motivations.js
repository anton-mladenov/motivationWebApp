import { GET_ALL_MOTIVATIONS, ADD_MOTIVATION, EDIT_MOTIVATION, DELETE_MOTIVATION } from "../actions/motivations"

let initialState = []

export default function (state = initialState, action) {

	switch (action.type) {

		case GET_ALL_MOTIVATIONS:
			return action.payload.allMotivations

		case ADD_MOTIVATION:
			console.log("receiving new motivation")
			return [...state, action.payload]

		case EDIT_MOTIVATION:
			return state.map(mot => {
				if (action.payload.id === mot.id) {
					// console.log("from the EDIT motivationS reducer: ", action.payload)
					return action.payload
				} else {
					return mot
				}
			})

		case DELETE_MOTIVATION:
			return state.filder(motivation => motivation.id !== action.payload)

		default:
			return state
	}
}


