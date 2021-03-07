import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import { Redirect } from 'react-router-dom'
import LeaderboardCard from './LeaderboardCard'

class Leaderboard extends React.Component {
  render() {
		const { users, authedUser } = this.props 	

    if (!authedUser) {
      return <Redirect to="/login" />
    }

    users.sort((a,b) => b.score - a.score)

		return (
			<div>
				{users && users.map((user) => (
          <LeaderboardCard 
          	key={user.id}
            id={user.id}
          />
        ))}
			</div>
		);
	}
}

function mapStateToProps ({ users, authedUser }) {
  Object.entries(users).map(([key,value],user) => (
  	value.score = value.questions.length + Object.keys(value.answers).length
  ))

  return {
    users: Object.values(users),
    authedUser
  };
}

export default connect(mapStateToProps)(Leaderboard)