import React from 'react'
import '../index.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import QuestionDetail from './QuestionDetail'
import QuestionOverview from './QuestionOverview'
import NotFound from './NotFound'

class Question extends React.Component {
	render() {
		const { id, questions, users } = this.props 
		const author = questions[id].author 

		if (!questions[id]) {
			return <NotFound/>
		}

		return (
			<div className="flex-container">
				<div className="container leaderboard-container">
					<div className="whoAsks">
						<h4>{users[author].name} asks:</h4>
					</div>

					<div className="icon-container">
						<img src={users[author].avatarURL} alt="icon" height="140px" />
					</div>

					<div className="vl"></div>

					{this.props.inQuestionBox 
					? <QuestionOverview 
						id={id}
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
	inQuestionBox: PropTypes.bool.isRequired 
}

export default connect(mapStateToProps)(Question)