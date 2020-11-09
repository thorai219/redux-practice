import { v4 as uuidv4 } from 'uuid';

const INITIAL = {
  todos: []
}

function rootReducer(state=INITIAL, action) {
  if (action.type === 'ADD_TODO') {
    return { ...state, todos: [ ...state.todos, { task: action.task, id: uuidv4() } ] }
  }
  if (action.type === 'UPDATE_TODO') {
    const todos = state.todos.map(todo => {
      if (todo.id === action.id) {
        return { ...todo, task: action.updatedTask }
      }
      return todo
    })
    return {
      ...state, todos
    }
  }
  if (action.type === 'REMOVE_TODO') {
    return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }
  }

  return state
}

export default rootReducer