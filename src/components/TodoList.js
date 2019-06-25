import React from 'react';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Name</td>
            <td>Completed</td>
          </tr>

        </thead>
        <tbody>
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