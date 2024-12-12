import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskItem = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <li>
      {task.name}{" "}
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
};
export default TaskItem;