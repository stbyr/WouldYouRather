import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import PropTypes from 'prop-types'
import Redirecter from './Redirect'

class YourVote extends React.Component {
	render() {
		const question = this.props.questions[this.props.questionId]
		const author = question.author
		const name = this.props.users[author].name 
		const img = this.props.users[author].avatarURL
		const text1 = question.optionOne.text 
		const text2 = question.optionTwo.text
		const numVotesOne = question.optionOne.votes.length
		const numVotesTwo = question.optionTwo.votes.length
		const numVotes = numVotesOne + numVotesTwo
		const percentageOne = Math.round(numVotesOne / numVotes * 100)
		const percentageTwo = Math.round(numVotesTwo / numVotes * 100)
		const { authedUser } = this.props 
		const yourVoteOne = question.optionOne.votes.includes(authedUser)
		const yourVoteTwo = question.optionTwo.votes.includes(authedUser)

		return (
			<div className="flex-container">
				<Redirecter referrer={`/questions/${this.props.questionId}`} />
				<div className="container results-container">
					<div className="whoAsks">
						<h4>Asked by {name}</h4>
					</div>

					<div className="icon-container">
						<img src={img} alt="icon" height="136px" />
					</div>

					<div className="vl"></div>

					<div className="res-container">
						<h2>Results:</h2>

						<div className="result" id={yourVoteOne ? "your-vote" : null}>
			                <p>Would you rather {text1}?</p>
			                <div className="bar">
			                	{percentageOne < 15 
			                	? <div style={{backgroundColor: "#e3e3e3", justifyContent: "flex-start"}}>
			                		<p>{percentageOne}%</p>
			                	</div> 
			                	: <div style={{width:`${percentageOne}%`}}>
			                		<p>{percentageOne}%</p>
			                	</div>}
			                </div>
			                <p className="vote">{numVotesOne} out of {numVotes} {numVotes === 1 ? 'vote' : 'votes'}</p>
			                {yourVoteOne ? <div className="your-vote">your<br />vote</div> : null}
		                </div>

		                <div className="result" id={yourVoteTwo ? "your-vote" : null}>
			                <p>Would you rather {text2}?</p>
			                <div className="bar">
			                	
			                	{percentageTwo < 15 
			                	? <div style={{backgroundColor: "#e3e3e3", justifyContent: "flex-start"}}>
			                		<p>{percentageTwo}%</p>
			                	</div> 
			                	: <div style={{width:`${percentageTwo}%`}}>
			                		<p>{percentageTwo}%</p>
			                	</div>}

			                </div>
			                <p className="vote">{numVotesTwo} out of {numVotes} {numVotes === 1 ? 'vote' : 'votes'}</p>
			                {yourVoteTwo ? <div className="your-vote">your<br />vote</div> : null}
		                </div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ users, questions, authedUser }) {
  	return {
    	users,
    	questions,
    	authedUser 
  	};
}

YourVote.propTypes = {
	questionId: PropTypes.string.isRequired,
	users: PropTypes.object.isRequired,
	questions: PropTypes.object.isRequired,
	authedUser: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(YourVote)