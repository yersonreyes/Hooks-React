import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, handleDeleteTodo, handleToogleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          handleDeleteTodo={handleDeleteTodo}
          handleToogleTodo={handleToogleTodo}
        />
      ))}
    </ul>
  );
};
