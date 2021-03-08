import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import ReactLogo from '../utils/logo.svg'
import { Link } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Login extends React.Component {
  state = {
    dropdownActive: false,
    userSelected: false,
    selectedUserId: '',
    selectedUserName: '' 
  }

  handleClick = () => {
    this.setState((prevState) => ({
      dropdownActive: !prevState.dropdownActive
    }))
  };

  handleClickOption = (event) => {
    this.setState((prevState) => ({
      dropdownActive: false,
      userSelected: true,
      selectedUserId: event.target.id,
      selectedUserName: this.props.users[event.target.id].name 
    }))
  };

  handleSubmit = () => {
    this.props.dispatch(setAuthedUser(this.state.selectedUserId)) 
  };

  render() {
    const { users } = this.props  

    return (
      <div className="flex-container">
        <div className="container">
          <div className="head-login-container">
            <h3>Welcome to the Would You Rather App!</h3>
            <p>Please sign in to continue</p>
          </div>
          <div className="main-login-container">
            <img src={ReactLogo} alt="React Logo" height="140px" />
            <h1>Sign in</h1>
          </div>
          <div className="form-login-container">
            <div className="select-box">
              <div className={this.state.dropdownActive ? "options-container active" : "options-container"}>
                
                {users && Object.entries(users).map(([key,value],user) => (
                  <div key={value.id} className="option" id={value.id} onClick={this.handleClickOption}>
                    <input 
                      type="radio"
                      className="radio"
                      name="category"
                      id={value.id}
                      onClick={this.handleClickOption}
                    />
                    <img src={value.avatarURL} alt="icon" height="40px" id={value.id} onClick={this.handleClickOption} />
                    <label id={value.id} onClick={this.handleClickOption}>{value.name}</label>
                  </div>
                ))}

              </div>
              <div className="selected" onClick={this.handleClick}>{this.state.userSelected ? this.state.selectedUserName : 'Select user'}</div>
            </div>

            <Link to={this.props.location.state ? this.props.location.state.referrer : '/'} className="submit-btn">
              <button onClick={this.handleSubmit} disabled={!this.state.userSelected}>Sign In</button>
            </Link>
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

export default connect(mapStateToProps)(Login)