import React from "react";
import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  function handleOnChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask !== "") {
      setTasks(() => [...tasks, newTask]);
      setNewTask("");
    }
  }
  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index); // quasi das gleiche, nur anders geschrieben
    setTasks(updatedTasks);
  }

  function archiveTask() {}

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <h2>Today</h2>
      <main>
        <div className="container">
          <div>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  <span className="text">{task}</span>
                  <button className="remove" onClick={() => removeTask(index)}>
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Enter new task..."
              className="input-field"
              value={newTask}
              onChange={handleOnChange}
            />
            <button className="add" onClick={addTask}>
              +
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default TodoList;
