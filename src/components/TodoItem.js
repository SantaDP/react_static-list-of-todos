import React from 'react';
import User from './User'

const TodoItem = ({user, todo}) => {
  return (
    <>
      <tr 
        className={ todo.completed ? 'todo-list__tbody-row done' : 'todo-list__tbody-row'} 
      >
        <td className="todo-list__tbody-cell"> {todo.id} </td>
        <td className="todo-list__tbody-cell"> {todo.title} </td>
        <User user={user} />
        <td className="todo-list__tbody-cell"> {todo.completed ? 'DONE' : 'PENDING'} </td>
      </tr>  
    </>
  )
}

export default TodoItem;

