import React, { useState } from 'react'

function Todo({ task, updateTodo, id, deleteTodo }) {
  const [editingTask, setEditingTask] = useState(task)
  const [isEditiing, setIsEditing] = useState(false)

  function handleRemove() {
    deleteTodo(id)
  }

  function toggleEdit() {
    setIsEditing(e => !e)
  }

  function handleChange(e) {
    setEditingTask(e.target.value)
  }

  function stopEditing(e) {
    e.preventDefault()
    updateTodo(id, task)
    setIsEditing(false)
  }

  if (isEditiing) {
    return (
      <form onSubmit={stopEditing}>
        <label htmlFor='task'>Task</label>
        <input
          type='text'
          value={editingTask}
          onChange={handleChange}
        />
        <button>done</button>
      </form>
    )
  }

  return (
    <div className='todo-list'>
      <li>{editingTask}</li>
      <div>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={handleRemove}>X</button>
      </div>
    </div>
  )
}

export default Todo