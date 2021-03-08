import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import LeaderboardCard from './LeaderboardCard'
import Redirecter from './Redirect'

class Leaderboard extends React.Component {
  render() {
		const { users } = this.props 	
    users.sort((a,b) => b.score - a.score)

		return (
      <div>
				<Redirecter referrer="/leaderboard" />
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

function mapStateToProps ({ users }) {
  Object.entries(users).map(([key,value],user) => (
  	value.score = value.questions.length + Object.keys(value.answers).length
  ))

  return {
    users: Object.values(users)
  };
}

export default connect(mapStateToProps)(Leaderboard)