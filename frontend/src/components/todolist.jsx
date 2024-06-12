import React from "react";
import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  function handleOnChange(event) {
    setNewTask(event.target.value);
  }

  function fetchAllData() {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Fehler beim API-Aufruf", error));
  }
  useEffect(() => {
    fetchAllData();
  }, []);

  function addTask() {
    if (newTask !== "") {
      fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: newTask }),
      });
      fetchAllData();
    }
  }
  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index); // quasi das gleiche, nur anders geschrieben
    setTasks(updatedTasks);
  }

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
                  <button
                    className="up-button"
                    onClick={() => moveTaskUp(index)}
                  >
                    UP
                  </button>
                  <button
                    className="down-button"
                    onClick={() => moveTaskDown(index)}
                  >
                    DOWN
                  </button>
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
