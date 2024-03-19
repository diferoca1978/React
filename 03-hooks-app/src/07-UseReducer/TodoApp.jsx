import { useEffect, useReducer } from "react"
import { todoReducerHook, TodoAdd, TodoList } from "./";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Collect the soul stone',
  //   done: false
  // },
  
];

//* Here we are set the function that often is used to start our reducer if we don't give a value in our initial state,
//* Then we're parced the todos object that was set in to local storage, because the local storage only can record strings, so if we shipment an objet we obtain a [objectObjet].  
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

   const [todos, dispatch] = useReducer(todoReducerHook, initialState, init) //! Warning: Not run the reducer, only pass it as a reference.

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


  return (
    <>

    <h1>Reducer Hook</h1>
    <hr />

    <div className="row">
        <div className="col">
          <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={handleToggleTodo} />
        </div>

        <div className="col">
            <h4>Add TODO</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
    </div>

        
        
    
    </>
  )
}
