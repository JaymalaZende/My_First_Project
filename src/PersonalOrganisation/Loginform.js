import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm({ onLogin, onForgotPassword }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/users', {username: username,password: password });
      
      // Assuming the response data contains a token or some indication of successful login
      if (response.data.success) {
        console.log("Logged in successfully!"); // Placeholder for actual login logic
        
        // Redirect to the home page or some other route
        navigator('/home');
      } else {
        console.log("Login failed!"); // Placeholder for handling failed login
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="max-w-xs mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button onClick={()=>navigator('Home')}
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
      <div className="mt-4 flex justify-between">
        <button className="text-blue-500 hover:underline" onClick={onForgotPassword}>Forgot Password?</button>
        <button onClick={() => navigator('/signup')} className="text-blue-500 hover:underline">Sign Up</button>
      </div>
    </div>
  );
}

export default LoginForm;
