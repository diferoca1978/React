import { useEffect, useReducer } from "react";
import { todoReducerHook } from "../07-UseReducer";





export const useTodo = () => {

//* Here we are set the function that often is used to start our reducer if we don't give a value in our initial state,
//* Then we're parced the todos object that was set in to local storage, because the local storage only can record strings, so if we shipment an objet we obtain a [objectObjet].  
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const [todos, dispatch] = useReducer(todoReducerHook, [], init) //! Warning: Not run the reducer, only pass it as a reference.


//* To record the todos in the local storage.
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])
  
const handleNewTodo = ( todo ) => {
  const action = {
    type: '[TODO] add todo',
    payload: todo
  }
  dispatch( action );
 }


 const handleDeleteTodo = (id) => {
   dispatch({
    type: '[TODO] delete todo',
    payload: id
   })
 }

 const handleToggleTodo = (id) => {
   dispatch({
    type: '[TODO] toggle todo',
    payload: id
   })
 }

 return {
  todos,
  todosCount: todos.length,
  pendingTodos: todos.filter((todo) => !todo.done ).length,
  handleNewTodo,
  handleToggleTodo,
  handleDeleteTodo
 }

}


