import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoRecuer";

export const useTodos = () => {
  const initalState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initalState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] remove",
      payload: id,
    });
  };

  const handleToogleTodo = (id) => {
    dispatch({
      type: "[TODO] toggle",
      payload: id,
    });
  };

  const todosCount = () => {
    return todos.length;
  };

  const pendingTodos = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  return {
    todos,
    handleToogleTodo,
    handleDeleteTodo,
    handleNewTodo,
    todosCount: todosCount(),
    pendingTodos: pendingTodos(),
  };
};
