import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../index.css'
import { logout } from '../actions/authedUser' 

class Menu extends React.Component {
  handleLogout = (e) => {
    this.props.dispatch(logout())
  };

  render() {
    const { users, authedUser } = this.props

    return (
      <div className="nav-container">
        <ul className="first nav">
          <li>
            <NavLink to="/" exact className="navigation" activeClassName="active">
              Home
            </NavLink>
          </li>

        	<li>
            <NavLink to="/add" className="navigation" activeClassName="active">
              New Question
            </NavLink>
          </li>

        	<li>
            <NavLink to="/leaderboard" className="navigation" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
        </ul>
        
        {authedUser && (
          <ul className="second nav">
          	<li className="authedUserName">Hello, {users[authedUser].name}</li>
            <img src={users[authedUser].avatarURL} alt="icon" height="40px" />
            <li onClick={this.handleLogout}>
              <NavLink to="/login" className="navigation">
                Logout
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users 
  };
}

export default connect(mapStateToProps)(Menu)