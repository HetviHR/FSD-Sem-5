import { useState } from "react";
import "../assets/todo.css"; // Import our custom CSS

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index]);
  };

  const saveEdit = () => {
    if (editingText.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editingText;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="todo-container">
      <h1>✅ To-Do List</h1>

      {/* Input + Add Button */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {editingIndex === index ? (
              <div className="edit-section">
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button className="save" onClick={saveEdit}>
                  Save
                </button>
              </div>
            ) : (
              <>
                <span>{task}</span>
                <div className="btn-group">
                  <button className="edit" onClick={() => startEditing(index)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => deleteTask(index)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
