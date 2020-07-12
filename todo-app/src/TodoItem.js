import React from "react"

function TodoItem(props) {
  function showAlert(chore) {
    const choreDetails = `${chore.name} (${chore.priority}) - ${chore.due}`
    alert(choreDetails)
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.chore.completed} onChange={() => props.handleChange(props.chore.id)}/>
      <label>{props.chore.name}</label>
    </div>
  )
}

export default TodoItem