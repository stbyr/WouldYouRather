import { SET_RESULT_ACTIVE, SET_QUESTION_ACTIVE } from '../actions/toggleQuestionResult'

export default function isQuestionActive (state = true, action) {
	switch(action.type) {
		case SET_RESULT_ACTIVE:
			return false
		case SET_QUESTION_ACTIVE:
			return true 
		default:
			return state
	}
}