import React from "react";
import DoneLink from "./DoneLink";

function Items({ tasks, onDelete }) {
  return (
    <div>
      <h3>To Do List:</h3>
      {tasks.map((task, index) => (
        <div key={index}>
          <strong>{task.taskName}</strong>: {task.taskDescription}
          <DoneLink onClick={() => onDelete(index)} />
        </div>
      ))}
    </div>
  );
}

export default Items;
