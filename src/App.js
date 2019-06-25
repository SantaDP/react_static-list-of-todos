import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {loadTodos, loadUsers} from './api/Todos'



class App extends React.Component {
  state = {
    todos: [],
    users: [],
  }

 async componentDidMount() {
   const todos = await loadTodos();
   const users = await loadUsers();

   this.setState ({
    todos: todos,
    users: users,
   });

  }

  render(){
    return (
      <div className="App">
        <TodoList 
          todos = {this.state.todos}
          users = {this.state.users}
        />
      </div>
    );
  } 
}

export default App;
