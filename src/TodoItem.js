import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false, task: this.props.task };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleSubmit() {
		this.props.deleteTask(this.props.id);
	}

	handleEdit() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSave(event) {
		event.preventDefault();
		this.props.updateTask(this.props.id, this.state.task);
		this.setState({ isEditing: false });
	}

	handleToggle(event) {
		this.props.toggleTodo(this.props.id);
	}

	render() {
		if (this.state.isEditing) {
			return (
				<div className='Todo'>
					<form onSubmit={this.handleSave}>
						<label>New Todo: </label>
						<input name='task' id='task' value={this.state.task} onChange={this.handleChange} />
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			return (
				<div className='Todo'>
					<li
						className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
						onClick={this.handleToggle}
					>
						{this.props.task}
					</li>
					<button onClick={this.handleSubmit}>Delete</button>
					<button onClick={this.handleEdit}>Edit</button>
				</div>
			);
		}
	}
}

export default TodoItem;
