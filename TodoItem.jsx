export function TodoItem({ id, title, priority, completed, toggleTodo, deleteTodo }) {
  return (
    <li className={completed ? "completed" : ""}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <p id="priority"> #:{priority}</p>
        {  title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}
