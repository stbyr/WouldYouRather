import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from '../actions/shared'
import Menu from './Menu'
import Login from './Login'
import Leaderboard from './Leaderboard'
import QuestionPage from './QuestionPage'
import QuestionBox from './QuestionBox'
import NewQuestion from './NewQuestion'
import NotFound from './NotFound'

class App extends React.Component {
	componentDidMount() {
		this.props.handleInitialData()
	}

	render() {
		return (
		    <Router>
			    <div>
			      	<Menu />
			      	<LoadingBar />
			      	
			      	<div>
				      	<Switch>
					      	<Route path="/" exact component={QuestionBox} />
					      	<Route path="/login" component={Login} />
					      	<Route path="/add" component={NewQuestion} />
					      	<Route path="/leaderboard" component={Leaderboard} />
					      	<Route path="/questions/:id" component={QuestionPage} />
					      	<Route path="/notfound" component={NotFound} />
					      	<Route component={NotFound} />
				      	</Switch>
				    </div>
			    </div>
		    </Router>
		);
	}  
}

export default connect(null, { handleInitialData })(App)
