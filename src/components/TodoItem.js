import React from 'react';
import Users from './Users'

class TodoItem extends React.Component {

  render() {
       
    return (
        this.props.todos.map(todo => {
          let user = this.props.users.find((user) => user.id === todo.userId);
          return (
            <>
          <tr 
            className={`table__row ${(todo.completed) ? 'done' : 'pending'}`} 
          >
            <td className="table__cell"> {todo.id} </td>
            <td className="table__cell"> {todo.title} </td>
            <td className="table__cell"> {user.name} </td>
            <td className="table__cell"> {todo.completed ? 'DONE' : 'PENDING'} </td>
          </tr>
          
            <Users user={user} />
          
          </>
            )
          }     
        )
    )
  }
}


export default TodoItem;

