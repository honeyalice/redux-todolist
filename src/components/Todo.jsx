import React, {useState} from "react";
import { useDispatch } from "react-redux";

export default function Todo({ todo }) {
  const { id, title, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(title);

  const dispatch = useDispatch();

  const deleteById = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const editById = () => {
    setIsEditing(true)
  };
  const saveByID =(id)=>{
    dispatch({type:"SAVE_TODO", payload: {id, title: newText}});
    setIsEditing(false);
  }
  const handleTextChange=(e)=>{
    setNewText(e.target.value)
  }
  const checkboxChange = (id)=>{
    dispatch({type:"COMPLETE_TOGGLE", payload: id})
  }

  return (
    <div>
      {isEditing?
      (
        <input type="text" value={newText} onChange={handleTextChange}></input>
      ): <div>{title}</div>}
      
      <input type="checkbox" checked={completed} onChange={()=>checkboxChange(id)}/>
      
      {isEditing? <button onClick={()=>saveByID(id)}>Save </button>: <button onClick={editById}>Edit</button>}
      
      <button onClick={() => deleteById(id)}>Delete</button>
    </div>
  );
}
