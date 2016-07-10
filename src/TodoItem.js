import React from 'react';
import $ from 'jquery';

class TodoItem extends React.Component {

  constructor() {
    super();
  }

  // createTodo(event) {
  // event.preventDefault();
  //
  // let component = this;
  // let title = this.refs.newTodoInput.value;
  //
  //
  //   let newTodo = {
  //     id: null,
  //     title: title,
  //     completed: false
  //   };
  //
  //   jQuerry.ajax({
  //     type: "POST",
  //     url: `https://secret-everglades-41596.herokuapp.com/todos.json`,
  //     data: JSON.stringify({
  //         todo: newTodo
  //     }),
  //     contentType: "application/json",
  //     dataType: "json"
  //   })
  //     .done(function(data) {
  //       component.props.onChange();
  //       component.refs.newTodoInput.value = "";
  //     })
  // }

    render() {
      return (
        <div>
          <label>
            <p>{this.props.title}</p>
          </label>
        </div>
      );
    }
  }

export default TodoItem;
