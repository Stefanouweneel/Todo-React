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

  createTodo() {
    return (

    );
  }

  clearTodos() {
    return (

    );
  }

  render() {
    return (
      <div>
        	<form onSubmit={this.createTodo} />
          <form onSubmit={this.clearTodos} />
      </div>
    );
  }
}

export default TodoList;
