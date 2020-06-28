import React from 'react';

import './App.css';
import TodoItem from './TodoItem'

function App() {
  return (
    <div className="todo">
      <TodoItem label="Do the dishes" />
      <TodoItem label="Cook dinner" />
      <TodoItem label="Sweep the floor" />
    </div>
  )
}

export default App;
