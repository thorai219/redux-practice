import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector(store => store.todos)
  
  function handleCreate(task) { dispatch({ type: 'ADD_TODO', task }) }
  function handleUpdate(id, updatedTask) { dispatch({ type: 'UPDATE_TODO', id, updatedTask }) }
  function handleRemove(id) { dispatch({ type: 'REMOVE_TODO', id }) }

  const todoJSX = todos.map(todo => (
    <Todo
      deleteTodo={handleRemove}
      id={todo.id}
      key={todo.id}
      task={todo.task}
      updateTodo={handleUpdate}
    />
  ))

  return (
    <div>
      <NewTodoForm createTodo={handleCreate}/>
      <ul>{todoJSX}</ul>
    </div>
  )
}

export default TodoList