import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import { TaskContext } from "./TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;