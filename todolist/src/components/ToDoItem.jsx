import React from "react";
function TodoItem({ task, deleteTask, toggleCompleted, updateTask }) {
  function handleChange() {
    toggleCompleted(task.id);
    console.log(task);
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      {
        task.completed ?  <p style={{textDecoration:' line-through'}}>{task.text}</p> : <p>{task.text}</p>
      }
      
      <div className="operationBtn d-flex gap-2 ">
        <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Del</button>
        <button className="btn btn-warning text-white" onClick={() => updateTask(task.id)}>Upd</button>
      </div>
    </div>
  );
}
export default TodoItem;
