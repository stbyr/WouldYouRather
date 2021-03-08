import React from 'react'
import '../index.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { setResultActive, setQuestionActive } from '../actions/toggleQuestionResult'

class QuestionOverview extends React.Component {
	handleSubmit = () => {
		if (this.props.unanswered) {
			this.props.dispatch(setQuestionActive())
		} else {
			this.props.dispatch(setResultActive())
		}
	}

	render() {
		const { id, questions } = this.props
		const text = questions[id].optionOne.text

		return (
			<div className="question-container">
				<h3>Would You Rather</h3>

				<div className="question-overview">
	                <p>{text} ...</p>
                </div>
                <Link to={`/questions/${id}`} className="submit-btn">
                	<button className="poll-btn" onClick={this.handleSubmit}>View poll</button>
                </Link>
			</div>
		);
	}
}

function mapStateToProps ({ questions }) {
  	return {
    	questions
  	};
}

QuestionOverview.propTypes = {
	id: PropTypes.string.isRequired,
	unanswered: PropTypes.bool.isRequired,
	questions: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(QuestionOverview)