import * as request from "superagent"
import { baseUrl } from "../constants"

export const ADD_MOTIVATION = "ADD_MOTIVATION"

export const EDIT_MOTIVATION = "EDIT_MOTIVATION"

export const DELETE_MOTIVATION = "DELETE_MOTIVATION"

export const GET_ONE_MOTIVATION = "GET_ONE_MOTIVATION"

export const GET_ALL_MOTIVATIONS = "GET_ALL_MOTIVATIONS"

export const RANDOM_MOTIVATION = "RANDOM_MOTIVATION"


export const getAllMotivations = (motivations) => ({
	type: GET_ALL_MOTIVATIONS,
	payload: motivations
})

export const addNewMotivation = (motivation) => ({
	type: ADD_MOTIVATION,
	payload: motivation
})

export const randomMotivation = (motivation) => ({
	type: RANDOM_MOTIVATION,
	payload: motivation
})

export const newRandomMotivation = (motivation) => (dispatch) => {
	dispatch(randomMotivation(motivation))
}

export const getMotivations = () => (dispatch) => {
	
	// tuk da sloja getState i da vzeme jwt na current user-a
	
	request
		.get(`${baseUrl}/motivations`)
		// tuka da set-na authorization with jwt-to
		.then(res => dispatch(getAllMotivations(res.body)))
}

export const addMotivation = (newMotivation) => (dispatch) => {
		
	// tuk da sloja getState i da vzeme jwt na current user-a
	
	request
		.post(`${baseUrl}/motivations`)
		// tuka da set-na authorization with jwt-to
		// .set('Content-Type', 'application/json')
		.send({
			motivation: newMotivation
		})
		.then(res => dispatch(addNewMotivation(res.body)))
		.catch(err => {
			if (err.status === 400) {
				// dispatch(userLoginFailed(err.response.body.message))
				console.log(err.response.body.errors[0].constraints)
			}
			else {
				console.error(err)
			}
		})
}

