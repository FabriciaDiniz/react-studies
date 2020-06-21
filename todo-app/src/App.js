import React from 'react';

import './App.css';
import TodoItem from './TodoItem'

function App() {
  return (
    <div className="todo">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default App;
