import React from 'react';
import axios from 'axios';
import toast  from 'react-hot-toast';
import { BASE_URL } from '../services/baseUrl';
const TaskList = ({ tasks, fetchTasks, setSelectedTask }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/tasks/${id}`);
      toast.success('Task deleted successfully!');
      fetchTasks();
    } catch (error) {
      toast.error('Error deleting task. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div key={task._id} className="bg-blue-400 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
            <p className="text-white">{task.description}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setSelectedTask(task)}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
