import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = []}) => {
  return (
    <div>
      <ul className="list-group">
          {
            todos.map( todo => (
              <TodoItem key={todo.id} todo={todo}/>
            ))
          } 
        </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array
}