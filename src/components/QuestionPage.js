import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import PropTypes from 'prop-types'
import Question from './Question'
import YourVote from './YourVote'

class QuestionPage extends React.Component {
	render() {
		const { result } = this.props 
		const { id } = this.props.match.params

		if (result) {
			return (
				<div>
					<YourVote 
						questionId={id}
					/>
				</div>
			);
		} else {
			return (
				<div>
					<Question 
						id={id} 
						inQuestionBox={false}
					/>
				</div>
			);
		}
	}
}

QuestionPage.propTypes = {
	result: PropTypes.bool.isRequired 
}

export default connect()(QuestionPage)