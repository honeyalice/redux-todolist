import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import { fetchTodos } from "./redux/actions";
import React, { useEffect } from "react";


function App() {
  const count = useSelector((state) => {
    return state.count;
  });

  const theme = useSelector((state) => state.theme);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos()); // Fetch todos from server on mount
  }, [dispatch]);

  function toggleTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  return (
    <div className={theme === "light" ? "app--light" : "app--dark"}>
      <h1>Redux</h1>
      {/* <div>Count: {count.value}</div> */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Remaining todos: {todos.length}</h1>
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
