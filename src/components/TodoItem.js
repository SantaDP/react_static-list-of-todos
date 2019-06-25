import React from 'react';
import Users from './Users'

class TodoItem extends React.Component {

 
  render() {
    console.log(this.props.users)
    
    return (
        this.props.todos.map(todo => (
           <tr style={todo.completed ? {background: '#0080004d'} : {background: '#ffed003b'}}>
            <td> {todo.id} </td>
            <td> {todo.title} </td>
            <td> <a href="javascript:void(0)"> {
              this.props.users.map(user => ((todo.userId === user.id) ? user.name : null))
              }</a></td>
            <td> {todo.completed ? 'DONE' : 'PENDING'} </td>
          </tr>     
        ))
    )
  }
}


export default TodoItem;

