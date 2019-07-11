import React from 'react';
import User from './User'

const TodoItem = ({user, todo}) => {
  return (
    <>
      <tr 
        className={`table__row ${(todo.completed) ? 'done' : 'pending'}`} 
      >
        <td className="table__cell"> {todo.id} </td>
        <td className="table__cell"> {todo.title} </td>
        <User user={user} />
        <td className="table__cell"> {todo.completed ? 'DONE' : 'PENDING'} </td>
      </tr>
      
      
      
    </>
    )
}


export default TodoItem;

