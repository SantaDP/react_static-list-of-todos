import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {loadTodos, loadUsers} from './api/Todos'



class App extends React.Component {
  state = {
    todos: [],
    users: [],
    btnText: 'Load',
  }

  handleLoadDate = (event) => {
    console.log(event.target.innerText)
    this.setState({
      btnText: 'Loaded...',
    })

    const renderData = async () => {
      const todos = await loadTodos();
      const users = await loadUsers();
      this.setState ({ todos, users})
    } 
    setTimeout(renderData, 1500); 
  }

  render(){
    return (
      <div className="App">
        {
         this.state.todos.length > 0 ? 
          (<TodoList 
          todos = {this.state.todos}
          users = {this.state.users}
        />) : 
        <button className="btn-load" onClick={(event)=>this.handleLoadDate(event)}>{this.state.btnText}</button>
        }
        
      </div>
    );
  } 
}

export default App;
