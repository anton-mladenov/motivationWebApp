import * as request from "superagent"
import { baseUrl } from "../constants"
import { isExpired } from "../jwt"
import { logout, userLoginFailed } from "./users"

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

export const getOneMotivation = (motivation) => ({
	type: GET_ONE_MOTIVATION,
	payload: motivation
})

export const editOneMotivation = (motivation) => ({
	type: EDIT_MOTIVATION,
	payload: motivation
})

export const deleteOneMotivation = (motivationId) => ({
	type: DELETE_MOTIVATION,
	payload: motivationId
})



export const getMotivations = () => (dispatch, getState) => {

	const state = getState()
	if (state.currentUser === null || state.currentUser === {}) return null
	const jwt = state.currentUser.jwt

	if (isExpired(jwt)) return dispatch(logout())

	request
		.get(`${baseUrl}/motivations`)
		.set("Authorization", `Bearer ${jwt}`)
		.then(res => dispatch(getAllMotivations(res.body)))
		.catch(err => {
			if (err.status === 400) {
				console.log("post request error: ", err.response.body.errors[0].constraints)
				dispatch(userLoginFailed(err.response.body.message))
			}
			else {
				console.error("error from getMotivations from 'actions'", err)
			}
		})
}

export const addMotivation = (newMotivation) => (dispatch) => {

	// tuk da sloja getState i da vzeme jwt na current user-a
	console.log("sending new motivation to the back-end")
	request
		.post(`${baseUrl}/motivations`)
		// tuka da set-na authorization with jwt-to
		// .set('Content-Type', 'application/json')
		.send({
			motivation: newMotivation.motivation
		})
		.then(res => dispatch(addNewMotivation(res.body)))
		.catch(err => {
			if (err.status === 400) {
				// dispatch(userLoginFailed(err.response.body.message))
				console.log("post request error: ", err.response.body.errors[0].constraints)
			}
			else {
				console.error(err)
			}
		})
}

export const newRandomMotivation = (motivation) => (dispatch) => {
	dispatch(randomMotivation(motivation))
}

export const getMotivation = (id) => (dispatch) => {
	// tuk da sloja getState i da vzeme jwt na current user-a

	request
		.get(`${baseUrl}/motivations/${id}`)
		.then(res => dispatch(getOneMotivation(res.body)))
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

export const editMotivation = (id, updatedMotivation) => (dispatch) => {

	// console.log("sending update motivation to back-end", updatedMotivation)

	request
		.patch(`${baseUrl}/motivations/${id}`)
		.send(updatedMotivation)
		.then(res => dispatch(editOneMotivation(res.body)))
		.catch(err => {
			if (err.status === 400) {
				// dispatch(userLoginFailed(err.response.body.message))
				console.log("patch request error: ", err.response.body.errors[0].constraints)
			}
			else {
				console.error(err)
			}
		})
}

export const deleteMotivation = (motivationId) => (dispatch) => {

	console.log("delete from action creator: ", motivationId)

	request
		.delete(`${baseUrl}/motivations`)
		.send({
			id: motivationId
		})
		.then(res => dispatch(deleteOneMotivation(res.body)))
		.catch(err => {
			if (err.status === 400) {
				// dispatch(userLoginFailed(err.response.body.message))
				console.log("patch request error: ", err.response.body.errors[0].constraints)
			}
			else {
				console.error(err)
			}
		})
}