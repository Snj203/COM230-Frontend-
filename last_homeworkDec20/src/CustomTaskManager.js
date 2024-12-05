import { useState } from "react";

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), name: task }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, deleteTask };
};

export default useTaskManager;