import React from 'react'
import { connect } from 'react-redux'
import '../index.css'
import { Link } from 'react-router-dom'
import { handleCreateQuestion } from '../actions/shared'
import Redirecter from './Redirect'

class NewQuestion extends React.Component {
	state = {
		optionOneText: '',
		optionTwoText: ''
	}

	handleInputOne = (e) => {
		this.setState({optionOneText: e.target.value})
	};

	handleInputTwo = (e) => {
		this.setState({optionTwoText: e.target.value})
	};

	handleSubmit = () => {
		this.props.dispatch(handleCreateQuestion(this.state.optionOneText, this.state.optionTwoText))
	};

	render() {
		const disabled = this.state.optionOneText && this.state.optionTwoText ? false : true 

		return (
			<div className="flex-container">
				<Redirecter referrer="/add" />
				<div className="create-question-container">
					<div className="create-question-header">
						<h2>Create New Question</h2>
					</div>

					<hr />

					<div className="create-question">
						<h4>Complete the question:</h4>
						<h3>Would you rather ...</h3>
						<input 
							placeholder="Enter Option One Text Here" 
							type="text" 
							value={this.state.optionOneText}
							onChange={this.handleInputOne} 
						/>
						<div>
							<div className="line"></div>
							<p>OR</p>
							<div className="line"></div>
						</div>
						<input 
							placeholder="Enter Option Two Text Here" 
							type="text" 
							value={this.state.optionTwoText}
							onChange={this.handleInputTwo} 
						/>
						<Link to="/">
							<button onClick={this.handleSubmit} disabled={disabled}>Submit</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(NewQuestion)