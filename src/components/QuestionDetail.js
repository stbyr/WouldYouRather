import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { handleSubmitAnswer } from '../actions/shared'
import { setResultActive } from '../actions/toggleQuestionResult'

class QuestionDetail extends React.Component {
	state = {
		active: true
	}

	handleSubmit = () => {
		const { dispatch, authedUser, id } = this.props
		const radio = document.querySelector('input[name="question"]:checked').value

		dispatch(handleSubmitAnswer({
			qid: id,
			answer: radio,
			authedUser
		}))

		dispatch(setResultActive())
	};

	isChecked = () => {
		const radio = document.querySelector('input[name="question"]:checked')
		if (radio !== null) {
			this.setState({
				active: false
			})
		} 
	};

	render() {
		const { id, questions } = this.props
		const textOne = questions[id] ? questions[id].optionOne.text : null
		const textTwo = questions[id] ? questions[id].optionTwo.text : null

		return (
			<div className="question-container">
				<h2>Would You Rather ...</h2>

				<div className="question">
	            	<input 
	                    type="radio"
	                    className="radio"
	                	name="question"
	                	id="optionOne"
	                	value="optionOne"
	                	onClick={this.isChecked}
	                />
	                <label htmlFor="optionOne">{textOne}</label>
                </div>

                <div className="question">
	            	<input 
	                    type="radio"
	                    className="radio"
	                	name="question"
	                	id="optionTwo"
	                	value="optionTwo"
	                	onClick={this.isChecked}
	                />
	                <label htmlFor="optionTwo">{textTwo}</label>
                </div>
                <Link to={`/questions/${id}`} >
                	<button onClick={this.handleSubmit} disabled={this.state.active}>Submit</button>
                </Link>
			</div>
		);
	}
}

function mapStateToProps ({ questions, authedUser }) {
  	return {
    	questions,
    	authedUser  
  	};
}

QuestionDetail.propTypes = {
	id: PropTypes.string.isRequired,
	questions: PropTypes.object.isRequired,
	authedUser: PropTypes.string 
}

export default connect(mapStateToProps)(QuestionDetail)