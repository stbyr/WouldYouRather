import React from 'react'
import '../index.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class QuestionOverview extends React.Component {
	render() {
		const { id, questions, authedUser } = this.props
		const text = questions[id].optionOne.text
		const link = questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser) 
			? `/questions/${id}/result` 
			: `/questions/${id}`

		return (
			<div className="question-container">
				<h3>Would You Rather</h3>

				<div className="question-overview">
	                <p>{text} ...</p>
                </div>
                <Link to={link} className="submit-btn">
                	<button className="poll-btn">View poll</button>
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

QuestionOverview.propTypes = {
	id: PropTypes.string.isRequired 
}

export default connect(mapStateToProps)(QuestionOverview)