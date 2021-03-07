import { RECEIVE_QUESTIONS } from '../actions/questions'
import { SUBMIT_ANSWER, CREATE_QUESTION } from '../actions/shared'

export default function questions (state = {}, action) {
	switch(action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions 
			}
		case SUBMIT_ANSWER:
			return {
				...state,
		        [action.qid]: {
		          ...state[action.qid],
		          [action.answer]: {
		            ...state[action.qid][action.answer],
		            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
		          }
		        }
			}
		case CREATE_QUESTION: 
			return {
				...state,
	        	[action.formattedQuestion.id]: action.formattedQuestion
			}
		default:
			return state
	}
}