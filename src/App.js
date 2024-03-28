import "./App.css";
import React, { useState } from "react";
import InputTask from "./components/InputTask";
import Items from "./components/Items";

function App() {
  const [tasks, setTask] = useState([]);
  const handleAddTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTask(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <InputTask onAdd={handleAddTask} />
      <Items tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
