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
  }

  render() {
    const choresComponents = this.state.todos.map(chore => <TodoItem key={chore.name} chore={chore} />)
  
    return (
      <div className="todo">
        {choresComponents}
      </div>
    )
  }
}

export default App;
