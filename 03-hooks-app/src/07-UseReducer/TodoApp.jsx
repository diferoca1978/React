import { useReducer } from "react"
import { todoReducerHook, TodoAdd, TodoList } from "./"




const initialState = [
  {
    id: new Date().getTime(),
    description: 'Collect the soul stone',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Collect the power stone',
    done: false
  }
]


export const TodoApp = () => {

   const [todos, dispatch] = useReducer(todoReducerHook, initialState) //! Warning: Not run the reducer, only pass it as a reference.

   const handleNewTodo = ( todo ) => {
    
    const action = {
      type: '[TODO] add todo',
      payload: todo
    }

    dispatch( action );
   }


  return (
    <>

    <h1>Reducer Hook</h1>
    <hr />

    <div className="row">
        <div className="col">
          <TodoList todos={ todos } />
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
