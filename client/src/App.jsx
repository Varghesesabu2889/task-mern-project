import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BASE_URL } from './services/baseUrl';
function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get(`${BASE_URL}/api/tasks`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    
    <div className="min-h-screen bg-blue-200 py-8" >
    <Navbar/>
      <h1 className="text-center text-2xl font-bold mb-8">Task Management</h1>
     
      <TaskForm fetchTasks={fetchTasks} selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} setSelectedTask={setSelectedTask} />
      <Footer/>
    </div>
  );
}

export default App;
