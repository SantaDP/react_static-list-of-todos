import React from 'react';
import './App.css';
import TodoList, {
  SORT_ORDER_COMPLETED,
  SORT_ORDER_USER,
  SORT_ORDER_TITLE,
  SORT_ORDER_ID
} from './components/TodoList';
import { getTodos, getUsers } from './api/api'

class App extends React.Component {
  state = {
    sortField: '',
    todos: [],
    isLoaded: false,
    btnText: 'load',
    visibleTodods: [],
  }

  loadData = async () => {
    const [todos, users] = await Promise.all([
      getTodos(),
      getUsers()
    ])

    const todosWithUsers = this.getTodosWithUsers(todos, users);

    this.setState({
      btnText: 'Loading...',
    })

    setTimeout(() => {
      this.setState(prev => {
        return {
          visibleTodods: todosWithUsers,
          isSortedAsc: true,
          todos: todosWithUsers,
          isLoaded: true,
        }
      })     
    }, 1500);

    this.handleSort(SORT_ORDER_ID);

  }

  sorTodos(todos, sortField, isSortedAsc = true) {
    const sign = isSortedAsc ? 1 : -1
    const callbackMap = {
      [SORT_ORDER_TITLE]: (a, b) => a.title.localeCompare(b.title) * sign,
      [SORT_ORDER_USER]: (a, b) => a.user.name.localeCompare(b.user.name) * sign,
      [SORT_ORDER_COMPLETED]: (a, b) => (a.completed - b.completed) * sign, 
      [SORT_ORDER_ID]: (a, b) => (a.id - b.id) * sign, 
    };
    const callback = callbackMap[sortField] || callbackMap[SORT_ORDER_TITLE]
    return [...todos].sort(callback);
  }

  handleSort = (sortField) => {
    this.setState (prev => {
      const isSortedAsc = prev.sortField === sortField ? !prev.isSortedAsc : true
      return { 
        sortField,
        visibleTodods: this.sorTodos(prev.todos, sortField, isSortedAsc),
        isSortedAsc,
      }
    });
  }

  getTodosWithUsers(todos, users) {
    return todos.map(todo =>({
      ...todo,
      user: users.find(user => user.id === todo.userId)
    }))
  }

  render(){
    const {visibleTodods, isLoaded, btnText, sortField} = this.state;
    return (
      <div className="todo-list">
        { isLoaded ? (
          <TodoList 
          todos = {visibleTodods}
          onSort={this.handleSort}
          sortField={sortField}
          />
        ) : (
          <button
          className="todo-list__button" 
          onClick={this.loadData}>{btnText}
          </button>
        )}

      </div>
    );
  } 
}

export default App;
