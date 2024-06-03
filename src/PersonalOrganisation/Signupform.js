import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SignUpForm() {
  // State variables to store user sign-up data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');
  const [nextId, setNextId] = useState(1); 

const navigator= useNavigate();
  
  // Event handler functions to update state variables
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Function to handle sign-up form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Mocking sign-up authentication - you may need to replace this with actual authentication logic
//     if (password !== confirmPassword) {
//       setSignupMessage('Passwords do not match');
//     } else {
//       // Perform sign-up action, such as sending data to server
//       setSignupMessage('Sign-up successful!');
//     }
//   };

const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: nextId,
            username,
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Sign-up successful
        setSignupMessage('Sign-up successful!');
        setNextId(nextId + 1);
      } else {
        // Sign-up failed, display error message
        setSignupMessage(data.message || 'Sign-up failed.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      setSignupMessage('An error occurred during sign-up.');
    }
  };
    
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button type="submit" onClick={()=> navigator("/Home")} className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">Sign Up</button>
      </form>
      {signupMessage && (
        <div className="mt-4 text-green-500">{signupMessage}</div>
      )}
      
    </div>
  );
}

export default SignUpForm;
