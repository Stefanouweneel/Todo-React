import React from 'react';
import $ from 'jquery';

class TodoItem extends React.Component {

  constructor() {
    super();

    this.state = {
      message: "There are no tasks yet.",
      todos: []
    };
  }

  plusOne() {
    var newTodo = this.props.todo + 1;
    this.props.onChange(this.props.title, newTodo);
  }

  // renderTodos(todos){
  //    $.ajax({
  //      type: "PUT",
  //      url: "https://secret-everglades-41596.herokuapp.com/todos.json",
  //      data: JSON.stringify({
  //          todos: todo
  //      }),
  //      contentType: "application/json",
  //      dataType: "json"
  //    });
  //  }

  // deleteTodo() {
  //   return (
  //
  //   );
  // }

    render() {
      return (
        <tr>
          <td>{this.props.title}</td>
          <td>{this.props.todo} {this.renderTodo()}</td>
          <td>
              <button onClick={this.plusOne.bind(this)}>+1</button>
          </td>
        </tr>
      );
    }
  }

export default TodoItem;
