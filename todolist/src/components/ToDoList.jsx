import { useState } from "react";
import TodoItem from "./ToDoItem";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: false,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed};
        } else {
          return task;
        }
      })
      );
      
  }
  function updateTask(id){
    alert('add new task');
    deleteTask(id);
    addTask(text);
  }
  return (
    <div className="todo-list d-flex flex-column gap-2">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
          updateTask={updateTask}
        />
      ))}
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="add Task..." className="border rounded p-2"/>
      <div className="operationBtn d-flex justify-content-center gap-2">
        <button className="btn btn-success w-25 align-self-center" onClick={() => addTask(text)}>Add</button>
      </div>
      
    </div>
  );
}
export default TodoList;
