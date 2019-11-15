import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import uuid from 'uuid'

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        // id: 1,
        title: 'Satisfy the Customer',
        completed: false
      },
      {
        id: uuid.v4(),
        // id: 2,
        title: 'Welcome Change',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Deliver Frequently',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Work Together',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Build Projects',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Face-To-Face Time',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Measure of Progress',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Sustainable Development',
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
      // id: 8,
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

    render() {
      return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/build" render={props => (   // added build
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} 
                  markComplete={this.markComplete}
                    delTodo={this.delTodo}  />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
    );
  }
}




export default App;
