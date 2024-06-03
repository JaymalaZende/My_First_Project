import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigator=useNavigate();
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-bold">Insurance Tracker</a>
          </div>
          <div className="md:hidden">
            {/* Hamburger icon for mobile */}
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <a href="/PolicyTracker1" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Policy</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
