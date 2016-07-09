import React from 'react';
import $ from 'jquery';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "There are no tasks yet.",
      todoList: []
    };
  }

  getList() {
    let url = this.props.url;
    let component = this;

    $.ajax({
      type: 'GET',
      url: 'https://secret-everglades-41596.herokuapp.com/todos.json',
      dataType: 'json',
      contentType: "application/json",
      success: function(data){
        component.setState({
          todoList: data
        });
      }
    });
  }

  renderTodoItem(item, index) {
    return (
      <TodoItem
        key={index}
        title={item.title}
        completed={item.completed}
        updated_at={item.updated_at}
        id={item.id} />
    );
  }

  //
  // createTodo() {
  //   return (
  //
  //   );
  // }
  //
  // clearTodos() {
  //   return (
  //
  //   );
  // }


  render() {
    let todoList = this.state.todoList;

    return (
      <div>
        <h1>Todo List:</h1>
        <ul>
          {this.props.title}
          {todoList.map(this.renderTodoItem.bind(this))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
