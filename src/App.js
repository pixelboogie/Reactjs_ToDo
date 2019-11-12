import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Build for portfolio',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Apply to jobs',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to interviews',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    // console.log("From app.js: " + id);
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    // console.log(id)
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) => {
    // console.log(title)
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

    render() {
      // console.log("Appjs says this.state.todos: " + this.state.todos);

      return (
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} 
            markComplete={this.markComplete}
              delTodo={this.delTodo}
            />
          </div>
        </div>
    );
  }
}




export default App;
