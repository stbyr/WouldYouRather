import { getInitialData, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'
export const CREATE_QUESTION = 'CREATE_QUESTION'


export function handleInitialData () {
	return (dispatch) => {
		dispatch(showLoading())
		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(hideLoading())
			})
			.catch((e) => {
				console.warn('Error in handleInitialData: ', e)
			})
	}
}

function submitAnswer ({ qid, answer, authedUser }) {
	return {
		type: SUBMIT_ANSWER,
		qid,
		answer,
		authedUser
	}
}

export function handleSubmitAnswer (info) {
	return (dispatch) => {
		dispatch(submitAnswer(info))

		return _saveQuestionAnswer(info)
			.catch((e) => {
				console.warn('Error in handleSubmitAnswer: ', e)
			})
	}
}

function createQuestion ({ formattedQuestion, authedUser }) {
	return {
		type: CREATE_QUESTION,
		formattedQuestion,
		authedUser
	}
}

export function handleCreateQuestion (optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authedUser } = getState() 

		dispatch(showLoading())
		return _saveQuestion({ 
			optionOneText, 
			optionTwoText, 
			author: authedUser 
		}) 
			.then((formattedQuestion) => { 
				dispatch(createQuestion({ formattedQuestion, authedUser }))
				dispatch(hideLoading())	
				})  
			.catch((e) => {
				console.warn('Error in handleCreateAnswer: ', e)
			})
	}
}