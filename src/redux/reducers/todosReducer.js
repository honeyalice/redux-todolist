const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: action.payload };

    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "SAVE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

      case "COMPLETE_TOGGLE":
  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, completed: !todo.completed } // Toggle the completed value
        : todo
    ),

  };
  console.log("State before update:", state);


      

    default:
      return state;
  }
};

export default todoReducer;
