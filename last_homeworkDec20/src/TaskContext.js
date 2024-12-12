import React, { createContext, useState } from "react";
import useTaskManager from "./CustomTaskManager";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const { tasks, addTask, deleteTask } = useTaskManager();

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };