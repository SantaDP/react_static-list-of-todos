import React from 'react';
import TodoItem from './TodoItem';

export const SORT_ORDER_COMPLETED = 'completed';
export const SORT_ORDER_USER = 'user';
export const SORT_ORDER_TITLE = 'title';
export const SORT_ORDER_ID = 'id';

const TodoList = ({ todos, onSort, sortField }) => {
  return (
    <>
      <h1 className="todo-list__title">Dynamick to-do list</h1>
      <table className="todo-list__table">
        <thead className="todo-list__thead">
          <tr className="todo-list__thead-row">
            <th 
            className={sortField === SORT_ORDER_ID ? 'todo-list__thead-th active' : 'todo-list__thead-th'}
            onClick={()=>onSort(SORT_ORDER_ID)}
            >
              ID
            </th>
            <th 
            className={sortField === SORT_ORDER_TITLE ? 'todo-list__thead-th active' : 'todo-list__thead-th'}
            onClick={()=>onSort(SORT_ORDER_TITLE)}
            >
              Title
            </th>
            <th 
            className={sortField === SORT_ORDER_USER ? 'todo-list__thead-th active' : 'todo-list__thead-th'}
            onClick={()=>onSort(SORT_ORDER_USER)}
            >
              Name
            </th>
            <th 
            className={sortField === SORT_ORDER_COMPLETED ? 'todo-list__thead-th active' : 'todo-list__thead-th'}
            onClick={()=>onSort(SORT_ORDER_COMPLETED)}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="todo-list__tbody">
        {todos.map(todo => {
          return (
            <TodoItem 
              todo = {todo}
              user = {todo.user}
              key={todo.id}
            />
          )
        })}
        </tbody>
      </table>
    </>
  ) 
}

export default TodoList;