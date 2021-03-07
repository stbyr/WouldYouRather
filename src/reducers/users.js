import { RECEIVE_USERS } from '../actions/users'
import { SUBMIT_ANSWER, CREATE_QUESTION } from '../actions/shared'

export default function users (state = {}, action) {
	switch(action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users 
			}
		case SUBMIT_ANSWER:
			return {
				...state,
		        [action.authedUser]: {
		          ...state[action.authedUser],
		          answers: {
		            ...state[action.authedUser].answers,
		            [action.qid]: action.answer
		          }
		        }
			}
		case CREATE_QUESTION: 
			return {
				...state,
		        [action.authedUser]: {
		          ...state[action.authedUser],
		          questions: state[action.authedUser].questions.concat([action.formattedQuestion.id])
		        }	
			}
		default:
			return state
	}
}