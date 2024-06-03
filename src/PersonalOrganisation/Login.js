// Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users', {
        username,
        password
      });
      // Assuming successful login redirects to dashboard or sets token
      console.log(response.data);
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-1/3 p-4 bg-gray-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block">Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-1" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-1" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
};

export default Login;
