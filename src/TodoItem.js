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
      <div>
        // <p>{this.renderTodos.map()}</p>
      </div>
    );
  }
}

export default TodoItem;
