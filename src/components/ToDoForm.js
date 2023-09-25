import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export const ToDoForm = ({addTodo}) => {
  const id=uuidv4()
  const [InputChange,setInputChange]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    addTodo(InputChange,id);
    setInputChange('')
    localStorage.setItem(id,InputChange)
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="what's the today's task?"
        className="todo-input"
        value={InputChange}
        onChange={(e)=> setInputChange(e.target.value)}
      />
      <button className="todo-btn">Add Task</button>
    </form>
  );
};
