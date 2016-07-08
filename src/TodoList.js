import React from 'react';
import $ from 'jquery';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "There are no tasks yet.",
      todos: []
    };
  }

  componentDidMount(){
    var self = this;
    $.getJSON("https://secret-everglades-41596.herokuapp.com", function(data){
      self.setState({
        todos: data.todos
      });
    });
  }

  renderTodo(todo){
    return <Todo
      title={todo.title}
      completed={todo.completed} />;
  }

  // renderTodos(todo){
  //    $.ajax({
  //      type: "POST",
  //      url: "https://secret-everglades-41596.herokuapp.com/todos.json",
  //      data: JSON.stringify({
  //          todos: todo
  //      }),
  //      contentType: "application/json",
  //      dataType: "json"
  //    });
  //  }

  // componentDidMount() {
  //   this.loadTodos();
  // }
  //
  // loadTodos() {
  //   let component = this;
  // }
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
    return (
      <div>
        <h1>Whatever</h1>
          <TodoForm />
          <TodoItem />
          <p> {this.state.todos.map(this.renderTodo.bind(this))}</p>
      </div>
    );
  }
}

export default TodoList;
