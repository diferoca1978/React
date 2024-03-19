import PropTypes from 'prop-types'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo}) => {

  return (
    <>
     <li className="list-group-item d-flex justify-content-between align-items-center" >
      <span
      className={`${(todo.done) ? 'text-success text-decoration-line-through': ''}`}
      onClick={() => onToggleTodo( todo.id ) } 
      >
      {todo.description}</span>
      <button 
        className="btn btn-danger"
        onClick={() => onDeleteTodo( todo.id )}
      > Delete </button>
    </li>
    </>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func
}
