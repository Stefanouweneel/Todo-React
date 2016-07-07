import React from 'react';
import $ from 'jquery';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
    todos: [],
    counts:
      { todo: 0, done: 0},
    };

  }

  addTodo() {
    this.setState({
        count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
          <table>
            <tbody>

            </tbody>
          </table>
        <button onClick={ this.addTodo.bind(this) }>Add todo</button>
      </div>
    );
  };
}

export default TodoList;
