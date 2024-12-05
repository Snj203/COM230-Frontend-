import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;