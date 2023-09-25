import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
// import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditToDoForm } from "./EditToDoForm";
export const Todowrapper = () => {
  const [Todos, setTodos] = useState([]);
  const addTodo = (todo, id) => {
    //Adding InputValue to a textarea this function pass as props to a TODOForm.js
    setTodos([
      ...Todos,
      { id: id, task: todo, completed: false, isEditable: false },
    ]);
    // console.log(Todos);
  };
  const toggleCompleted = (id) => {
    //this function pass as props to check the user value is completed or not if complted there will be class added with complteet
    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    ////this function pass as props to TODO.js to remove list its filter the value if todo.js is not equal given id then filter out 
    setTodos(Todos.filter((todo) => todo.id !== id));
    localStorage.removeItem(id);
  };
  const editTodo = (id) => {

    //this function pass as props to EditToDoForm.js 
    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, isEditable: !todo.isEditable } : todo
      )
    );
  };
  const editTask = (task, id) =>
    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditable: !todo.isEditable } : todo
      )
    );
  return (
    <div className="TodoWrapper">
      <ToDoForm addTodo={addTodo} />
      {Todos.map((todo, index) =>
        todo.isEditable ? (
          <EditToDoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={index}
            task={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
