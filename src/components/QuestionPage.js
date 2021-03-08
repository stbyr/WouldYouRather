import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import Question from './Question'
import YourVote from './YourVote'
import Redirecter from './Redirect'
import NotFound from './NotFound'

class QuestionPage extends React.Component {
	render() {
		const { isQuestionActive, questions, authedUser } = this.props
		const { id } = this.props.match.params 

		if (!questions[id] && authedUser) {
			return <NotFound />
		} else if (!questions[id] && !authedUser) {
			return <Redirecter referrer="/notfound" />
		}

		if (isQuestionActive) {
			return (
				<div>
					<Redirecter referrer={`/questions/${id}`} />
					<Question 
						id={id} 
						inQuestionBox={false}
					/>
				</div>
			);
		} else {
			return (
				<div>
					<Redirecter referrer={`/questions/${id}`} />
					<YourVote 
						questionId={id}
					/>
				</div>
			);
		}
	}
}

function mapStateToProps ({ questions, authedUser, isQuestionActive }) {
  	return {
    	questions,
    	authedUser,
    	isQuestionActive  
  	};
}

export default connect(mapStateToProps)(QuestionPage)



