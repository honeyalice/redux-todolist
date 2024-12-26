const todoAPI = (() => {
    const Todo_API_URL = "http://localhost:3000/todos";
    async function getTodo() {
      // GET request to the server
      const response = await fetch(Todo_API_URL);
  
      // response.json also returns a promise
      const todos = await response.json();
      //   console.log(todos);
      return todos;
    }
    // add a new event 
    async function postTodo(newTodo) {
      const response = await fetch(Todo_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
  
      const todo = await response.json();
      //   console.log(todo.id);
      return todo;
    }
  
    async function deleteTodo(id) {
      const response = await fetch(`${Todo_API_URL}/${id}`, {
        method: "DELETE",
      });
  
      await response.json();
      return id;
    }
  
    async function updateTodo(id, newTodo) {
      const response = await fetch(`${Todo_API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
  
      const updatedTodo = await response.json();
      return updatedTodo;
    }
  
    return {
      getTodo,
      postTodo,
      deleteTodo,
      updateTodo,
    };
  })();
  export default todoAPI;