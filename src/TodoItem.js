import React from 'react';
import $ from 'jquery';

class TodoItem extends React.Component {
  constructor(){
    super();

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <li>{this.props.children}</li>
    );
  }
}

export default TodoItem;
