import React from 'react';
import $ from 'jquery';

class TodoItem extends React.Component {
  constructor(){
    super();

    this.state = {
      count: 0
    };
  }

  plusOne() {
      this.setState({
          score: this.state.score + 1
      });
  }

  render() {
      return (
          <tr>
              <td>{this.props.title}</td>
              <td>
                  <button onClick={this.plusOne.bind(this)}>+1</button>
              </td>
          </tr>
      );
  }
}

export default TodoItem;
