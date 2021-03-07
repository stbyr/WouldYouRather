import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import PropTypes from 'prop-types'

class LeaderboardCard extends React.Component {
	render() {
		const { id, users } = this.props 
		const score = Object.keys(users[id].answers).length + users[id].questions.length

		return (
			<div className="flex-container">
				<div className="container leaderboard-container">
					<div className="icon-container">
						<img src={users[id].avatarURL} alt="icon" height="136px" />
					</div>
					<div className="vl"></div>
					<div className="name-container">
						<h2>{users[id].name}</h2>
						<div className="number-of-questions">
							<span>
								<p>Answered Questions</p>
								<p>{Object.keys(users[id].answers).length}</p>
							</span>
							<hr />
							<span>
								<p>Created Questions</p>
								<p>{users[id].questions.length}</p>
							</span>
						</div>
					</div>
					<div className="vl"></div>
					<div className="score-container">
						<div className="score-box">
							<div className="score-text-container">
								<h3>Score</h3>
							</div>
							<p className="score-number">{score}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ users }) {
  return {
    users
  };
}

LeaderboardCard.propTypes = {
	id: PropTypes.string.isRequired 
}

export default connect(mapStateToProps)(LeaderboardCard)