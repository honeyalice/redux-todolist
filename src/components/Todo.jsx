import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo, removeTodo, toggleComplete } from "../redux/actions";

export default function Todo({ todo }) {
  const { id, title, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(title);

  const dispatch = useDispatch();

  const deleteById = () => {
    dispatch(removeTodo(id));
  };

  const editById = () => {
    setIsEditing(true);
  };

  const saveByID = () => {
    if (newText.trim()) {
      dispatch(saveTodo(id, { title: newText }));
      setIsEditing(false);
    } else {
      alert("Todo title cannot be empty.");
    }
  };

  const handleTextChange = (e) => {
    setNewText(e.target.value);
  };

  const checkboxChange = () => {
    console.log("Checkbox clicked:", id, { completed: !completed });
    dispatch(toggleComplete(id, { completed: !completed }));
  };
  
  

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={handleTextChange}
        />
      ) : (
        <span
        >
          {title}
        </span>
      )}

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={checkboxChange}
      />

      {isEditing ? (
        <button onClick={saveByID}>
          Save
        </button>
      ) : (
        <button onClick={editById}>
          Edit
        </button>
      )}

      <button onClick={deleteById}>
        Delete
      </button>
    </div>
  );
}
