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
    this.setState(()=> {
     return{ btnText: 'Loaded...',}
    })

    const render = async () => {
      const todos = await loadTodos();
      const users = await loadUsers();
      this.setState (()=>{
        return {
          todos: todos,
          users: users,
        }
       });
    }
    setTimeout(render, 1500)
    
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
