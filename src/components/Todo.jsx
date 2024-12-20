import React from "react";
import { useDispatch } from "react-redux";

export default function Todo({ todo }) {
  const { id, title, completed } = todo;

  const dispatch = useDispatch();

  const deleteById = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const editById = (id) => {
    console.log("update");
  };

  return (
    <div>
      {/* <input type="checkbox" checked={completed} /> */}
      <div>{title}</div>
      <input type="checkbox" checked={completed} />

      <button onClick={() => editById(id)}>Edit</button>
      <button onClick={() => deleteById(id)}>Delete</button>
      <button>Complete</button>
    </div>
  );
}
