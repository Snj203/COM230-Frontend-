import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;