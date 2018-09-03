import * as request from 'superagent'
import { baseUrl } from '../constants'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USERS = 'UPDATE_USERS'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const logout = () => ({
	type: USER_LOGOUT
})

export const userLoginSuccess = (login) => ({
	type: USER_LOGIN_SUCCESS,
	payload: login
})

export const userLoginFailed = (error) => ({
	type: USER_LOGIN_FAILED,
	payload: error || 'Unknown error'
})

export const userSignupFailed = (error) => ({
	type: USER_SIGNUP_FAILED,
	payload: error || 'Unknown error'
})

export const userSignupSuccess = () => ({
	type: USER_SIGNUP_SUCCESS
})

export const login = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/logins`)
		.send({ email, password })
		.then(result => dispatch(userLoginSuccess(result.body)))
		.catch(err => {
			if (err.status === 400) {
				dispatch(userLoginFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
		})

export const signup = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/users`)
		.send({ email: email, password: password })
		.then(result => {
			dispatch(userSignupSuccess())
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch(userSignupFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
		})