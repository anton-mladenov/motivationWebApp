import * as request from "superagent"
import { baseUrl } from "../constants"

export const ADD_MOTIVATION = "ADD_MOTIVATION"

export const EDIT_MOTIVATION = "EDIT_MOTIVATION"

export const DELETE_MOTIVATION = "DELETE_MOTIVATION"

export const GET_ONE_MOTIVATION = "GET_ONE_MOTIVATION"

export const GET_ALL_MOTIVATIONS = "GET_ALL_MOTIVATIONS"


export const getAllMotivations = (motivations) => ({
	type: GET_ALL_MOTIVATIONS,
	payload: motivations
})


export const getMotivations = () => (dispatch) => {
	
	// tuk da sloja getState i da vzeme jwt na current user-a
	
	request
		.get(`${baseUrl}/motivations`)
		// tuka da set-na authorization with jwt-to
		.then(res => dispatch(getAllMotivations(res.body)))
}
