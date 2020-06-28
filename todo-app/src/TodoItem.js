import React from "react"

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <label>{props.label}</label>
    </div>
  )
}

export default TodoItem