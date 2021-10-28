import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ task: 'Read Ethereum', id: uuidv4() },
				{ task: 'Read React', id: uuidv4() },
				{ task: 'Read', id: uuidv4() },
				{ task: 'Write React', id: uuidv4() },
				{ task: 'Solior React', id: uuidv4() },
			],
		};
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.updateItem = this.updateItem.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}

	removeItem(targetTask) {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== targetTask),
		});
	}

	addItem(newTask) {
		this.setState({
			todos: [...this.state.todos, newTask],
		});
	}

	updateItem(id, updateTask) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updateTask };
			} else {
				return todo;
			}
		});
		this.setState({
			todos: updatedTodos,
		});
	}

	toggleCompletion(id) {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			} else {
				return todo;
			}
		});
		this.setState({
			todos: updatedTodos,
		});
	}

	render() {
		const todos = this.state.todos.map((todo) => (
			<TodoItem
				key={todo.id}
				task={todo.task}
				id={todo.id}
				completed={todo.completed}
				updateTask={this.updateItem}
				deleteTask={this.removeItem}
				toggleTodo={this.toggleCompletion}
			/>
		));

		return (
			<div className='TodoList'>
				<h1>
					Todo List! <span>A Simple React Todo List App</span>
				</h1>
				<ul>{todos}</ul>
				<TodoForm addTask={this.addItem} />
			</div>
		);
	}
}

export default TodoList;
