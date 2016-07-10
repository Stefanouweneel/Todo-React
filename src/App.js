import React from 'react';
import $ from 'jquery';
import TodoList from './TodoList'

const apiUrl = "https://secret-everglades-41596.herokuapp.com";

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>React on Rails Todos App</h1>
        <TodoList url={apiUrl} />
      </div>
    );
  }
}

export default App;
