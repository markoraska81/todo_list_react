import React, {Component} from 'react';


class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6 className="text-capitalize">title</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <i className="fa fa-pencil"></i>
          </span>
          <span className="mx-2 text-danger">
            <i className="fa fa-trash"></i>
          </span>
        </div>
      </li>
    )
  }
}

export {TodoItem};
