
const initialState = [{
  id: 1,
  todo: 'Find the soul Stone',
  done: false 
}]

// The reducer is a simple function that receive two arguments, the first is the state as a initial state and, the second is an action. //! The main fuction of a reducer is to return a new state, so we must be careful with no mutating the state.
//! Important: Don't use the method push insert the new todo, because it always will mutate the array wich is our initial state.
// The better way to do this is through the spread operator.
const todoReducer = (state = initialState, action = {}) => {

  if (action.type === '[TODO] addTodo') {
     return [...state, action.payload]
  }

  return state;

}


let todos = todoReducer(); // This is our initial state.

const newTodo = {
  id:2,
  todo: 'Find the power Stone',
  done: false
}

// This is how display an action. The convention is building like this.
const addTodoAction = {
  type: '[TODO] addTodo',
  payload: newTodo
}


todos = todoReducer(todos, addTodoAction);

console.log(todos);