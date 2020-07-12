import React from 'react';

import './App.css';
import TodoItem from './TodoItem'
import chores from './chores'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: chores
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(chore => {
        if (chore.id === id) {
          chore.completed = !chore.completed
        }
        return chore
      })

      return { todos: updatedTodos }
    })
  }

  render() {
    const choresComponents = this.state.todos.map(chore => <TodoItem key={chore.name} chore={chore} handleChange={this.handleChange}/>)
  
    return (
      <div className="todo">
        {choresComponents}
      </div>
    )
  }
}

export default App;
