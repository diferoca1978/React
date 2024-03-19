

import { useTodo } from "../hooks";
import {TodoAdd, TodoList } from "./";


export const TodoApp = () => {

   const {todos, todosCount, pendingTodos, handleNewTodo, handleToggleTodo, handleDeleteTodo } = useTodo();


  return (
    <>

    <h1>Reducer Hook</h1>
    <h3>Total todos: {todosCount} </h3> <small>Pending: {pendingTodos}</small>
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
