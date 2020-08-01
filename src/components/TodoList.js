import React, {Component} from 'react';
import {TodoItem} from './TodoItem';


class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        <TodoItem />
        <button type="button" className="btn btn-bloc btn-danger text-capitalize mt-5">add item</button>
      </ul>
    )
  }
}

export {TodoList};
