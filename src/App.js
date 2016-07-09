import React from 'react';
import $ from 'jquery';
import TodoList from './TodoList'

const apitUrl = "https://secret-everglades-41596.herokuapp.com";

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h1>React on Rails Todos App</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
