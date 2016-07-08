import React from 'react';
import $ from 'jquery';

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };

  }
  //
  // onSubmit() {
  //   return (
  //
  //   );
  // }

  onSubmit(event){
      // if we don't call event.preventDefault, the browser will think we want to submit the form
      event.preventDefault();
      this.props.onSubmit(this.refs.todo.value);
  }

  render() {
      return (
          <form onSubmit={this.onSubmit.bind(this)}>
              <label>Username</label>
              <input ref="todo" />
              <button>Add Todo</button>
          </form>
      );
  }
}

export default TodoForm;
