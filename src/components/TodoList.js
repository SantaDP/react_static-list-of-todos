import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ todos, users}) => {
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
        {
          todos.map(todo => {
            let user = users.find((user) => user.id === todo.userId);
            return (
              <TodoItem 
                todo = {todo}
                user = {user}
              />
            )
          }     
          ) 
        }
        
        </tbody>
      </table>
    ) 
}

export default TodoList;