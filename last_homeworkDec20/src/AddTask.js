import React from "react";

const AddTask = ({ newTask, setNewTask, addTask }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;