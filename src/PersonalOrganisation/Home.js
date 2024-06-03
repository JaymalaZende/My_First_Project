import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigator = useNavigate();
  const navigate1 = useNavigate();
  
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Desktop navigation */}
      <nav className="bg-gray-900 p-4 hidden sm:flex">
        <h1 className="text-white text-xl font-bold">App Name</h1>
        <div className="ml-auto">
          <button className="text-white text-lg" onClick={() => navigator("/InsurancePolicy")}>
            Insurance Tracker
          </button>
          <button className="text-white text-lg ml-4" onClick={() => navigator("/Loan")}>
            Loan Management
          </button>
          <button onClick={()=>navigator("/CarManagement")} className="text-white text-lg ml-4" >
            Car Management
          </button>
          <button className="text-white text-lg ml-4" onClick={() => navigator("/ToDo1")}>
            To-Do List
          </button>
          <button className="text-white text-lg ml-4" onClick={() => navigator("/loancalculator")}>
           Calculator Loan
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <nav className="bg-gray-900 p-4 sm:hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">App Name</h1>
          <button className="text-white text-3xl" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </nav>

      {/* Side menu */}
      {showMenu && (
        <div className="bg-gray-900 p-4 sm:hidden">
          <button className="block text-white mb-2" onClick={() => navigator("/InsurancePolicy")}>
            Insurance Tracker
          </button>
          <button className="block text-white mb-2" onClick={() => navigator("/Loan")}>
            Loan Management
          </button>
          <button onClick={()=>navigator("/CarManagement")} className="block text-white mb-2" >
            Car Management
          </button>
          <button className="block text-white mb-2" onClick={() => navigator("/ToDo1")}>
            To-Do List
          </button>
          <button className="block text-white mb-2" onClick={() => navigator("/loancalculator")}>
           Calculator Loan
          </button>
        </div>
      )}

      {/* Main content */}
      <div className="bg-gray-800 h-auto text-white py-20 px-4">
        {/* Hero section */}
        <div className="bg-gray-800 h-96 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to our App!</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tortor eget mauris lacinia condimentum at vel odio.
          </p>
        </div>

        {/* Image and View button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Loan Management */}
          <div className="flex flex-col bg-gray-700 rounded-lg p-4">
            <div className="flex justify-center items-center mb-4">
              <img
                src="https://img.freepik.com/free-vector/estate-tax-composition_98292-7428.jpg?w=740&t=st=1711523389~exp=1711523989~hmac=31ea730f832db65319f76ffc16c708f3fd5ad19386795613a9386e06b64efe66"
                alt="Loan Management"
                className="mr-2"
              />
            </div>
            <button className="rounded-lg">Loan Management</button>
            <div className="flex justify-center items-center">
              <button onClick={() => navigator("/Loan")} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View More
              </button>
            </div>
          </div>

          {/* Car Management */}
          <div className="flex flex-col bg-gray-700 rounded-lg p-4">
            <div className="flex justify-center items-center mb-4">
              <img
                src="https://img.freepik.com/free-vector/top-view-futuristic-autonomous-car-with-flat-design_23-2147886341.jpg?w=740&t=st=1711523261~exp=1711523861~hmac=4f7b17906ee8767d0b362954531e0ca8407e510d1a897ea3a8be9b359e709b4e"
                alt="Car Management"
                className="mr-2"
              />
            </div>
            <button className="rounded-lg">Car Management</button>
            <div className="flex justify-center items-center">
              <button onClick={() => navigator("/CarManagement")} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View More
              </button>
            </div>
          </div>

          {/* Insurance Tracker */}
          <div className="flex flex-col bg-gray-700 rounded-lg p-4">
            <div className="flex justify-center items-center mb-4">
              <img
                src="https://acsgbl.com/wp-content/uploads/2023/03/Insurance-Digital-Priorities-Acsgbl.jpg"
                alt="Insurance Tracker"
                className="mr-2"
              />
            </div>
            <button className="rounded-lg">Insurance Tracker</button>
            <div className="flex justify-center items-center">
              <button onClick={() => navigator("/InsurancePolicy")} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View More
              </button>
            </div>
          </div>

          {/* To-Do List */}
          <div className="flex flex-col bg-gray-700 rounded-lg p-4">
            <div className="flex justify-center items-center mb-4">
              <img
                src="https://img.freepik.com/free-photo/time-organization-concept-with-planner_23-2149046741.jpg?w=740&t=st=1711523517~exp=1711524117~hmac=a738f3d90eb416d9cf5f50804102b5a58b3c04f9e647f49ebae3f4e74a48cf06"
                alt="To-Do List"
                className="mr-2"
              />
            </div>
            <button className="rounded-lg">To Do Task</button>
            <div className="flex justify-center items-center">
              <button onClick={() => navigator("/ToDo1")} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
