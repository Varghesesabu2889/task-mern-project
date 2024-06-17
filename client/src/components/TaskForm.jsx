import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../services/baseUrl';
const TaskForm = ({ fetchTasks, selectedTask, setSelectedTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [selectedTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title, description };

    try {
      if (selectedTask) {
        await axios.put(`${BASE_URL}/api/tasks/${selectedTask._id}`, task);
        toast.success('Task updated successfully!');
      } else {
        await axios.post(`${BASE_URL}/api/tasks`, task);
        toast.success('Task added successfully!');
      }

      setTitle('');
      setDescription('');
      setSelectedTask(null);
      fetchTasks();
    } catch (error) {
      toast.error('Error saving task. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-blue-700 rounded-lg shadow-md">
      <ToastContainer />
      <h2 className="text-2xl font-semibold mb-4 block text-white">{selectedTask ? 'Edit Task' : 'Add Task'}</h2>
      <div className="mb-4">
        <label className="block text-white">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border text-gray-600 rounded focus:outline-none "
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border text-gray-600 rounded focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {selectedTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
