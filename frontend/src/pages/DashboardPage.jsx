import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken, removeToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks', {
      headers: { 'x-auth-token': getToken() },
    });
    setTasks(res.data);
  };

  const createTask = async () => {
    if (!newTitle) return;
    await axios.post('http://localhost:5000/api/tasks', { title: newTitle }, {
      headers: { 'x-auth-token': getToken() },
    });
    setNewTitle('');
    fetchTasks();
  };

  const updateStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { status }, {
      headers: { 'x-auth-token': getToken() },
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { 'x-auth-token': getToken() },
    });
    fetchTasks();
  };

  const logout = () => {
    removeToken();
    navigate('/login');
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const renderTasks = (status) => (
    tasks.filter(t => t.status === status).map(task => (
      <div key={task._id} className="p-2 border-b flex justify-between items-center">
        <span>{task.title}</span>
        <div className="flex gap-2">
          {status !== 'todo' && <button onClick={() => updateStatus(task._id, 'todo')} className="text-xs bg-gray-300 px-2">ToDo</button>}
          {status !== 'inprogress' && <button onClick={() => updateStatus(task._id, 'inprogress')} className="text-xs bg-yellow-300 px-2">Progress</button>}
          {status !== 'done' && <button onClick={() => updateStatus(task._id, 'done')} className="text-xs bg-green-300 px-2">Done</button>}
          <button onClick={() => deleteTask(task._id)} className="text-xs bg-red-400 px-2">Delete</button>
        </div>
      </div>
    ))
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Task Dashboard</h2>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-1 rounded">Logout</button>
      </div>

      <div className="mb-4 flex gap-2">
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="New Task" className="border p-2 w-full" />
        <button onClick={createTask} className="bg-blue-500 text-white px-4">Add</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold text-lg">To Do</h3>
          <div>{renderTasks('todo')}</div>
        </div>
        <div>
          <h3 className="font-bold text-lg">In Progress</h3>
          <div>{renderTasks('inprogress')}</div>
        </div>
        <div>
          <h3 className="font-bold text-lg">Done</h3>
          <div>{renderTasks('done')}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;