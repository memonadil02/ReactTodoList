import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
export const Todo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {
  
  return (
    <div className="Todo">
      <p
        onClick={() => toggleCompleted(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {localStorage.getItem(task.id)}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
