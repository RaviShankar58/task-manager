import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../utils/auth';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', form);
      alert(res.data.msg);
      setToken(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-600">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-green-200" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-green-200" onChange={handleChange} required />
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-md transition">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
