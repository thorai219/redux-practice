import React, { useState } from 'react'

function NewTodoForm({ createTodo }) {
  const [task, setTask] = useState('')

  function handleChange(e) {
    setTask(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    createTodo(task)
    setTask('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='task'>Task</label>
        <input
          type='text'
          name='task'
          onChange={handleChange}
          value={task}
        />
        <button type='submit' onSubmit={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default NewTodoForm