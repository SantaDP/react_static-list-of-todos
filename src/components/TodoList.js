import React from 'react';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
 
  render() {
    return (
      <table className="table">
        <thead className="table__head">
          <tr className="table__row">
            <td>ID</td>
            <td>Title</td>
            <td>Name</td>
            <td>Status</td>
          </tr>

        </thead>
        <tbody className="table__body"> 
        <TodoItem 
          todos = {this.props.todos}
          users = {this.props.users}
          />
        </tbody>
          
      </table>
 
    )
  }
}

export default TodoList;