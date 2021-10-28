import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '', id: uuidv4() };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addTask(this.state);
		this.setState({ task: '', id: uuidv4(), completed: false });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>New Todo: </label>
				<input
					name='task'
					id='task'
					value={this.state.task}
					onChange={this.handleChange}
					placeholder='New Todo'
				/>
				<button>Add todo</button>
			</form>
		);
	}
}

export default TodoItem;
