import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

class Redirecter extends React.Component {
  render() {
		const { authedUser, referrer } = this.props 	

    if (!authedUser) {
      return (
        <Redirect 
          to={{
            pathname: "/login",
            state: { referrer: referrer }
          }} 
        />
      )
    }

    else {
      return null 
    } 

	}
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  };
}

Redirecter.propTypes = {
  authedUser: PropTypes.string,
  referrer: PropTypes.string.isRequired 
}

export default connect(mapStateToProps)(Redirecter)