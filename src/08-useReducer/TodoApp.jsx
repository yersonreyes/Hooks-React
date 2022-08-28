import { useTodos } from "./hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const {
    todos,
    handleToogleTodo,
    handleDeleteTodo,
    handleNewTodo,
    todosCount,
    pendingTodos,
  } = useTodos();
  return (
    <>
      <h1>
        TodoApp total {todosCount} <span>pendientes {pendingTodos}</span>{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleToogleTodo={handleToogleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
