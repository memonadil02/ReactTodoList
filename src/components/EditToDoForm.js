import React from 'react'

export const EditToDoForm = ({task,editTodo}) => {
  const [InputChange,setInputChange]=React.useState(task.task)
  const handleSubmit=(e)=>{
    e.preventDefault()
    editTodo(InputChange,task.id);
    setInputChange('')
    localStorage.setItem(task.id,InputChange)

  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update Task"
        className="todo-input"
        value={InputChange}
        onChange={(e)=> setInputChange(e.target.value)}
      />
      <button className="todo-btn">Update Task</button>
    </form>
  )
}
