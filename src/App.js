import React from 'react';
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import TodoList from './TodoList'

class App extends React.Component {
  render() {
      return (
          <div>
            <h1>Todo List</h1>
            <TodoList />
          </div>
      );
    }
}

export default App;
