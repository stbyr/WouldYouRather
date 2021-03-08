import React from 'react'
import '../index.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import QuestionDetail from './QuestionDetail'
import QuestionOverview from './QuestionOverview'
import Redirecter from './Redirect'

class Question extends React.Component {
	render() {
		const { id, questions, users, inQuestionBox } = this.props 	

		const author = questions[id] ? questions[id].author : null
		const name = questions[id] ? users[author].name : null
		const url = questions[id] ? users[author].avatarURL : null
		const referrer = inQuestionBox ? '/' : `/questions/${id}` 		

		return (
			<div className="flex-container">
				<Redirecter referrer={referrer} />
				<div className="container leaderboard-container">
					<div className="whoAsks">
						<h4>{name} asks:</h4>
					</div>

					<div className="icon-container">
						<img src={url} alt="icon" height="140px" />
					</div>

					<div className="vl"></div>

					{this.props.inQuestionBox 
					? <QuestionOverview 
						id={id}
						unanswered={this.props.unanswered}
					/>

					: <QuestionDetail 
						id={id}
					/>}
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ questions, users }) {
  	return {
    	questions,
    	users
  	};
}

Question.propTypes = {
	id: PropTypes.string.isRequired,
	inQuestionBox: PropTypes.bool.isRequired,
	unanswered: PropTypes.bool,
	questions: PropTypes.object.isRequired,
	users: PropTypes.object.isRequired 
}

export default connect(mapStateToProps)(Question)