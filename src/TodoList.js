import React from 'react';
import $ from 'jquery';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
    items: [],
    counts:
      { todo: 0, done: 0},
    };

  }

  createItem(itemText) {
    return (
      <TodoItem>{itemText}</TodoItem>
    );
  }

  updateItems(newItem) {
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items}/>
        <TodoForm onFormSubmit={this.updateItems}/>
        <ul>{this.props.items.map(createItem.bind(this))}</ul>;
      </div>
    );
  }
}

export default TodoList;
