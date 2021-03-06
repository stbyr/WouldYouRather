import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import Question from './Question'
import Redirecter from './Redirect'

class QuestionBox extends React.Component {
	state = {
		unansweredActive: true
	} 

	handleBtnClick = () => {
        this.setState((prevState) => ({ 
        	unansweredActive: !prevState.unansweredActive
        }));
	};

	filterAnswered = () => {
		return Object.values(this.props.questions).filter(question => (
			question.optionOne.votes.includes(this.props.authedUser) || question.optionTwo.votes.includes(this.props.authedUser)
		));
	};

	filterUnanswered = () => {
		return Object.values(this.props.questions).filter(question => (
			!question.optionOne.votes.includes(this.props.authedUser) && !question.optionTwo.votes.includes(this.props.authedUser)
		));
	};

	render() {
		const { questions } = this.props 

		return (
			<div className="question-box-container">
				<Redirecter referrer="/" />
				<div className="question-box">
					<div className="unanswered-answered-btns">
						<div className={this.state.unansweredActive ? "selected-btn" : null} onClick={!this.state.unansweredActive ? this.handleBtnClick : undefined}>
							<h4>Unanswered Questions</h4>
						</div>
						<div className={!this.state.unansweredActive ? "selected-btn" : null} onClick={this.state.unansweredActive ? this.handleBtnClick : undefined}>
							<h4>Answered Questions</h4>
						</div>
					</div>

					<div>
						{questions && this.state.unansweredActive && (
							this.filterUnanswered().map((question) => (
								<Question 
									key={question.id}
									id={question.id}
									inQuestionBox={true}
									unanswered={true}
								/> 
							) 
						))}
						{this.filterUnanswered().length === 0 && this.state.unansweredActive &&
							<p className="no-questions">No unanswered Questions.</p>
						}

						{questions && !this.state.unansweredActive && (
							this.filterAnswered().map((question) => (
								<Question 
									key={question.id}
									id={question.id}
									inQuestionBox={true}
									unanswered={false}
								/> 
							)
					    ))}
					    {this.filterAnswered().length === 0 && !this.state.unansweredActive &&
							"No answered Questions yet."
						}
				    </div>
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ questions, authedUser }) {
  	return {
    	questions: Object.values(questions).sort((a,b) => b.timestamp - a.timestamp),
    	authedUser  
  	};
}

export default connect(mapStateToProps)(QuestionBox)