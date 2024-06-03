import React, { useState } from 'react';
import axios from 'axios';

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('Pending');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
//   const [reminder, setReminder] = useState('');
  const categories = ["Work", "Personal", "Study", "Other"];

  const Task = async () => {
    if (newTask.trim() === '' || deadline.trim() === '') return;

    const task = {
      description: newTask,
      deadline,
      priority,
      category,
      status
    };

    try {
      const response = await axios.post('http://localhost:8080/tasks', task);
      setTasks([...tasks, response.data]);
      clearInputs();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = {
      description: newTask,
      deadline,
      priority,
      category,
      status
    };
    setTasks([...tasks, task]);
    clearInputs();
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setNewTask(taskToEdit.description);
    setDeadline(taskToEdit.deadline);
    setPriority(taskToEdit.priority);
    setCategory(taskToEdit.category);
    setStatus(taskToEdit.status);
    // setReminder(taskToEdit.reminder);
    setEditingTaskIndex(index);
  };

  const saveEditedTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingTaskIndex] = {
      description: newTask,
      deadline,
      priority,
      category,
      status
    };
    setTasks(updatedTasks);
    clearInputs();
    setEditingTaskIndex(null);
alert("Task update sucessfully")  
};

  const handleDelete = (index) => {
    const confirmation = window.confirm("Are you sure you want to delete this task?");
    if (confirmation) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };

  const clearInputs = () => {
    setNewTask('');
    setDeadline('');
    setPriority('');
    setCategory('');
    setStatus('Pending');
    // setReminder('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>

      <div className="mb-4"> Task Name
        <input
          type="text"
          placeholder="Enter Task Description"
          className="w-full px-4 py-2 rounded border outline-none"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>

      <div className="mb-4 relative">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          className="w-full px-4 py-2 rounded border"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Priority</label>
        <select
          className="w-full px-4 py-2 rounded border outline-none"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <select
          id="category"
          className="w-full px-4 py-2 rounded border outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <select
          id="status"
          className="w-full px-4 py-2 rounded border outline-none"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Input field for reminder
      <input
        type="datetime-local"
        className="w-full px-4 py-2 rounded border outline-none mb-4"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
      /> */}

      {editingTaskIndex !== null ? (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
          onClick={saveEditedTask}
        >
          Save Task
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
          onClick={addTask}
        >
          Add Task
        </button>
      )}

      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex flex-col bg-gray-100 px-4 py-2 rounded">
            <div className="mb-2">
              <p>{task.description}</p>
              <p>Deadline:  {new Date(task.deadline).toLocaleDateString('en-GB')}</p>
              <p>Priority:  {task.priority}</p>
              <p>Category:  {task.category}</p>
              <p>Status:  {task.status}</p>
              {/* <p>Reminder:  {new Date(task.reminder).toLocaleDateString('en-GB')}</p> */}
            </div>
            <div>
              <button className="rounded-full bg-white border border-blue-500 text-blue-500 px-4 py-2 mr-2" onClick={() => editTask(index)}>Edit</button>
              <button className="rounded-full bg-white border border-red-500 text-red-500 px-4 py-2" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default TodoListApp;
