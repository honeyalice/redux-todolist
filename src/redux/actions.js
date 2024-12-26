import todoAPI from "../todoAPI";

const { getTodo, postTodo, deleteTodo, updateTodo } = todoAPI;

// Load initial todos from the server
export const fetchTodos = () => async (dispatch) => {
  try {
    const todos = await getTodo(); // Use helper method from todoAPI
    dispatch({ type: "SET_TODOS", payload: todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

// Add a new todo
export const createTodo = (todo) => async (dispatch) => {
  try {
    const newTodo = await postTodo(todo); // Correct function from todoAPI
    dispatch({ type: "ADD_TODO", payload: newTodo });
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

// Update a todo
export const saveTodo = (id, updatedTodo) => async (dispatch) => {
  try {
    const updated = await updateTodo(id, updatedTodo); // Returns updated todo
    dispatch({ type: "SAVE_TODO", payload: updated });
  } catch (error) {
    console.error("Error saving todo:", error);
  }
};

// Delete a todo
export const removeTodo = (id) => async (dispatch) => {
  try {
    await deleteTodo(id); 
    dispatch({ type: "DELETE_TODO", payload: id });
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

// Toggle completion status
export const toggleComplete = (id, todo) => async (dispatch) => {
  try {
    const updated = await updateTodo(id, { completed: !todo.completed });
    dispatch({ type: "COMPLETE_TOGGLE", payload: updated });

  } catch (error) {
    console.error("Error toggling todo:", error);
  }
};
