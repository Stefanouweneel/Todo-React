import React from 'react';
import $ from 'jquery';

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: []ff
    };

  }

  onSubmit() {
    return (

    );
  }

  render()
    return (
      <form onSubmit= >
        <input type='text' ref='todo' />
        <input type='submit' value='Add'/>
      </form>
  );
}

export default TodoForm;
