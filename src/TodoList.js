import React from 'react';
import $ from 'jquery';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
      </div>
    );
  };
}

export default TodoList;
