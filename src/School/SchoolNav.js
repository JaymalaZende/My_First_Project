import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SchoolNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-bold">Logo</a>
          </div>
          <div className="md:hidden">
            {/* Hamburger icon for mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#" onClick={() => navigate('/')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</a>
              <a href="#about" onClick={() => navigate('/about')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About Us</a>
              <a href="#information" onClick={() => navigate('/information')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Information</a>
              <a href="#news" onClick={() => navigate('/news')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">News</a>
              <a href="#contact" onClick={() => navigate('/contact')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" onClick={() => {navigate('/'); setIsOpen(false);}} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">Home</a>
          <a href="#about" onClick={() => {navigate('/about'); setIsOpen(false);}} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">About Us</a>
          <a href="#information" onClick={() => {navigate('/information'); setIsOpen(false);}} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">Information</a>
          <a href="#news" onClick={() => {navigate('/news'); setIsOpen(false);}} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">News</a>
          <a href="#contact" onClick={() => {navigate('/contact'); setIsOpen(false);}} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default SchoolNav;
