export const TodoItem = ({ todo, handleDeleteTodo, handleToogleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between ">
      <span
        onClick={() => handleToogleTodo(todo.id)}
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
      >
        {todo.description}
      </span>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className=" btn btn-danger"
      >
        borrar
      </button>
    </li>
  );
};
