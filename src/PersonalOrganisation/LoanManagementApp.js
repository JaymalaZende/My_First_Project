// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios'; 
// // import { useNavigate } from 'react-router-dom';

// // function Loan({ loanName, loanType, balance, interestRate }) {
// //   return (
// //     <div className="border p-4 rounded-md mb-4">
// //       <h3 className="text-lg font-semibold">Loan Name: {loanName}</h3>
// //       <p>Loan Type: {loanType}</p>
// //       <p>Balance: Rs{balance}</p>
// //       <p>Interest Rate: {interestRate}%</p>
// //     </div>
// //   );
// // }

// // function LoanManagementApp() {
// //   const [loans, setLoans] = useState([]);
// //   const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [newLoan, setNewLoan] = useState({ loanName: '', loanType: '', interestRate: '', balance: '' });
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isAddingNewLoan, setIsAddingNewLoan] = useState(false);
// //   const navigate = useNavigate(); // Correct usage of useNavigate

// //   const handleSearch = (e) => {
// //     setSearchQuery(e.target.value);
// //   };

// //   const toggleCalculator = () => {
// //     setIsCalculatorOpen(!isCalculatorOpen);
// //   };

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   const handleNewLoanChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewLoan((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const addNewLoan = (e) => {
// //     e.preventDefault();
// //     const formattedNewLoan = {
// //       name: newLoan.loanName,
// //       loantype: newLoan.loanType,
// //       interestRate: parseInt(newLoan.interestRate),
// //       balance: parseInt(newLoan.balance)
// //     };

// //     axios.post('http://localhost:8080/api/loans', formattedNewLoan, {
// //       headers: {
// //         'Content-Type': 'application/json'
// //       }
// //     })
// //       .then(response => {
// //         const addedLoan = response.data;
// //         setLoans(prevLoans => [...prevLoans, addedLoan]);
// //         setNewLoan({ loanName: '', loanType: '', interestRate: '', balance: '' });
// //         setIsMobileMenuOpen(false);
// //         setIsAddingNewLoan(false);
// //       })
// //       .catch(error => {
// //         console.error('Error adding new loan:', error);
// //         // Implement error handling here
// //       });
// //   };

// //   const filteredLoans = loans.filter((loan) => {
// //     const searchString = searchQuery.toLowerCase();
// //     return (
// //       (loan.name && loan.name.toLowerCase().includes(searchString)) ||
// //       (loan.loantype && loan.loantype.toLowerCase().includes(searchString)) ||
// //       (loan.balance && loan.balance.toString().includes(searchString)) ||
// //       (loan.interestRate && loan.interestRate.toString().includes(searchString))
// //     );
// //   });

// //   return (
// //     <div className="container mx-auto p-8">
// //       <h1 className="text-3xl font-semibold mb-8">Loan Management</h1>
// //       {/* Navigation bar */}
// //       <nav className="flex justify-between items-center bg-gray-600 mb-8">
// //         {/* Logo or brand */}
// //         <div className="text-xl font-semibold">Your Logo</div>

// //         {/* Mobile menu button */}
// //         <button
// //           onClick={toggleMobileMenu}
// //           className="block sm:hidden text-2xl focus:outline-none"
// //         >
// //           &#9776;
// //         </button>

// //         {/* Desktop menu */}
// //         <div className="hidden sm:flex space-x-4">
// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             value={searchQuery}
// //             onChange={handleSearch}
// //             className="border p-2 rounded-md"
// //           />
// //           <button onClick={toggleCalculator} className="bg-blue-500 text-white px-4 py-2 rounded-md">Toggle Calculator</button>
// //           <button onClick={() => setIsAddingNewLoan(true)} className="bg-green-500 text-white px-4 py-2 rounded-md">Add New Loan</button>
// //         </div>
// //       </nav>

// //       {/* Mobile menu */}
// //       {isMobileMenuOpen && (
// //         <div className="sm:hidden">
// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             value={searchQuery}
// //             onChange={handleSearch}
// //             className="border block p-2 rounded-md mb-4"
// //           />
// //           <button onClick={toggleCalculator} className="bg-blue-500 text-white px-4 py-2 rounded-md block w-full mb-4">Toggle Calculator</button>
// //           <button onClick={() => setIsAddingNewLoan(true)} className="bg-green-500 text-white px-4 py-2 rounded-md block w-full">Add New Loan</button>
// //         </div>
// //       )}

// //       {/* Conditionally render Loan Calculator */}
// //       {isCalculatorOpen && (
// //         <div className="mb-8">
// //           <h2 className="text-xl font-semibold mb-2">Loan Calculator</h2>
// //           {/* Render Loan Calculator component here */}
// //         </div>
// //       )}

// //       {/* Display individual loan details */}
// //       {filteredLoans.map((loan, index) => (
// //         <Loan key={index} loanName={loan.name} loanType={loan.loantype} balance={loan.balance} interestRate={loan.interestRate} />
// //       ))}

// //       {/* Form to add new loan */}
// //       {isAddingNewLoan && (
// //         <div className="mt-8">
// //           <h2 className="text-xl font-semibold mb-4">Add New Loan</h2>
// //           <form onSubmit={addNewLoan} className="flex flex-col">
// //             <input
// //               type="text"
// //               name="loanName"
// //               placeholder="Loan Name"
// //               value={newLoan.loanName}
// //               onChange={handleNewLoanChange}
// //               className="border p-2 rounded-md mb-2"
// //               required
// //             />
// //             <input
// //               type="text"
// //               name="loanType"
// //               placeholder="Loan Type"
// //               value={newLoan.loanType}
// //               onChange={handleNewLoanChange}
// //               className="border p-2 rounded-md mb-2"
// //               required
// //             />
// //             <input
// //               type="number"
// //               name="balance"
// //               placeholder="Balance"
// //               value={newLoan.balance}
// //               onChange={handleNewLoanChange}
// //               className="border p-2 rounded-md mb-2"
// //               required
// //             />
// //             <input
// //               type="number"
// //               name="interestRate"
// //               placeholder="Interest Rate"
// //               value={newLoan.interestRate}
// //               onChange={handleNewLoanChange}
// //               className="border p-2 rounded-md mb-2"
// //               required
// //             />
// //             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Loan</button>
// //           </form>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default LoanManagementApp;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios
// import { useNavigate } from 'react-router-dom';


// // Loan component to manage individual loan details
// function Loan({ name, loanType, balance, interestRate }) {
//   return (
//     <div className="border p-4 rounded-md mb-4">
//       <h3 className="text-lg font-semibold">
//         Loan Name: {name}</h3>
//       <p>Loan Type: {loanType}</p>
//       <p>Balance: Rs{balance}</p>
//       <p>Interest Rate: {interestRate}%</p>
//     </div>
//   );
// }




// // Main Loan Management App component
// function LoanManagementApp() {
//   // State to manage loan data, loan calculator visibility, search query, mobile menu visibility, and adding new loan state
//   const [loans, setLoans] = useState([]);
//   const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [newLoan, setNewLoan] = useState({ loanType: '', loanName: '', interestRate: '', balance: '' }); // Change loanname to loanName
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isAddingNewLoan, setIsAddingNewLoan] = useState(false);
// const navigator =(useState);
//   // Function to handle search
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Function to toggle calculator
//   const toggleCalculator = () => {
//     setIsCalculatorOpen(!isCalculatorOpen);
//   };

//   // Function to toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Function to handle input change for new loan
//   const handleNewLoanChange = (e) => {
//     const { name, value } = e.target;
//     setNewLoan((prev) => ({ ...prev, [name]: value }));
//   };

//   const addNewLoan = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
    
//     // Format the new loan object according to the desired format
//     const formattedNewLoan = {
//       name: newLoan.loanName, // Change loanname to loanName
//       loantype: newLoan.loanType, // Change loantype to loanType
//       interestRate: parseInt(newLoan.interestRate),
//       balance: parseInt(newLoan.balance)
//     };
  
//     // Example Axios request to add the new loan to the backend
//     axios.post('http://localhost:8080/api/loans', formattedNewLoan, {
//       headers: {
//         'Content-Type': 'application/json' // Set content type to JSON
//       }
//     })
//       .then(response => {
//         // Assuming the API returns the added loan in the correct format
//         const addedLoan = response.data;
//         setLoans(prevLoans => [...prevLoans, addedLoan]);
//         setNewLoan({ loanType: '', loanName: '', interestRate: '', balance: '' }); // Change loanname to loanName
//         setIsMobileMenuOpen(false);
//         setIsAddingNewLoan(false);
//       })
//       .catch(error => {
//         console.error('Error adding new loan:', error);
//       });
//   };

    

//   const filteredLoans = loans.filter((loan) => {
//     const searchString = searchQuery.toLowerCase();
//     return (
//       (loan.name && loan.name.toLowerCase().includes(searchString)) ||
//       (loan.loantype && loan.loantype.toLowerCase().includes(searchString)) ||
//       (loan.balance && loan.balance.toString().includes(searchString)) ||
//       (loan.interestRate && loan.interestRate.toString().includes(searchString))
//     );
//   });

//   // Render the UI
//   return (
//     <div className=" container mx-auto p-8">
//       <h1 className="text-3xl font-semibold mb-8">Loan Management</h1>
//       {/* Navigation bar */}
//       <nav className="flex justify-between items-center bg-gray-600 mb-8">
//         {/* Logo or brand */}
//         <div className="text-xl font-semibold">Your Logo</div>

//         {/* Mobile menu button */}
//         <button
//           onClick={toggleMobileMenu}
//           className="block sm:hidden text-2xl focus:outline-none"
//         >
//           &#9776;
//         </button>

//         {/* Desktop menu */}
//         <div className="hidden sm:flex space-x-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={handleSearch}
//             className="border p-2 rounded-md"
//           />
//           <button onClick={()=>navigator("/loancalculator")} className="bg-blue-500 text-white px-4 py-2 rounded-md">Toggle Calculator</button>
//           <button onClick={() => setIsAddingNewLoan(true)} className="bg-green-500 text-white px-4 py-2 rounded-md">Add New Loan</button>
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       {isMobileMenuOpen && (
//         <div className="sm:hidden">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={handleSearch}
//             className="border block p-2 rounded-md mb-4"
//           />
//           <button onClick={toggleCalculator} className="bg-blue-500 text-white px-4 py-2 rounded-md block w-full mb-4">Toggle Calculator</button>
//           <button onClick={() => setIsAddingNewLoan(true)} className="bg-green-500 text-white px-4 py-2 rounded-md block w-full">Add New Loan</button>
//         </div>
//       )}

//       {/* Conditionally render Loan Calculator */}
//       {isCalculatorOpen && (
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-2">Loan Calculator</h2>
//           {/* Render Loan Calculator component here */}
//         </div>
//       )}

//       {/* Display individual loan details */}
//       {filteredLoans.map((loan, index) => (
//         <Loan key={index} loanName={loan.name} loanType={loan.loantype} balance={loan.balance} interestRate={loan.interestRate} />
//       ))}

//       {/* Form to add new loan */}
//       {isAddingNewLoan && (
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Add New Loan</h2>
//           <form onSubmit={addNewLoan} className="flex flex-col">
//             <input
//               type="text"
//               name="loanname"
//               placeholder="Loan Name"
//               value={newLoan.loanname}
//               onChange={handleNewLoanChange}
//               className="border p-2 rounded-md mb-2"
//               required
//             />
//             <input
//               type="text"
//               name="loanType"
//               placeholder="Loan Type"
//               value={newLoan.loanType}
//               onChange={handleNewLoanChange}
//               className="border p-2 rounded-md mb-2"
//               required
//             />
//             <input
//               type="number"
//               name="balance"
//               placeholder="Balance"
//               value={newLoan.balance}
//               onChange={handleNewLoanChange}
//               className="border p-2 rounded-md mb-2"
//               required
//             />
//             <input
//               type="number"
//               name="interestRate"
//               placeholder="Interest Rate"
//               value={newLoan.interestRate}
//               onChange={handleNewLoanChange}
//               className="border p-2 rounded-md mb-2"
//               required
//             />
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Loan</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoanManagementApp;




import React, { useState } from "react";
import axios from "axios";

const LoanManagement = () => {
  // State to store loan details
  const [loans, setLoans] = useState([]);

  // State to store form input values
  const [loanName, setLoanName] = useState("");
  const [loanType, setLoanType] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [balance, setBalance] = useState("");
  const [totalamount, settotalamount] = useState("");

  // State to manage editing loan
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle form submission for loan
  const handleAddLoanSubmit = (e) => {
    e.preventDefault();

    if (loanName && loanType && interestRate && balance) {
      const newLoan = {
        loanName: loanName,
        loanType: loanType,
        interestRate: parseFloat(interestRate),
        balance: parseFloat(balance),
        totalamount: totalamount,
      };

      // Update local state
      setLoans([...loans, newLoan]);

      // Clear form inputs
      setLoanName("");
      setLoanType("");
      setInterestRate("");
      setBalance("");
      settotalamount("");

      // Make API call to save data to the database
      axios
        .post("http://localhost:8080/api/loans", { loan: newLoan })
        .then((response) => {
          console.log("Loan saved successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error saving loan:", error);
        });
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Function to handle editing a loan
  const handleEditLoan = (index) => {
    // Set editIndex state to the index of the loan to be edited
    setEditIndex(index);
    // Populate form fields with current loan details
    const loanToEdit = loans[index];
    setLoanName(loanToEdit.loanName);
    setLoanType(loanToEdit.loanType);
    setInterestRate(loanToEdit.interestRate.toString());
    setBalance(loanToEdit.balance.toString());
    settotalamount(totalamount.balance.toString());
    alert ("Data Update Sucesfully");
  // alert ("Fileds are update sucessfully")
  };

  // Function to handle deleting a loan
  const handleDeleteLoan = (index) => {
    // Display confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this loan?");
    if (isConfirmed) {
      // Remove the loan from the list
      const updatedLoans = [...loans];
      updatedLoans.splice(index, 1);
      setLoans(updatedLoans);
      // Clear editIndex state
      setEditIndex(null);
    }
  };

  // Function to handle form submission for editing a loan
  const handleEditLoanSubmit = (e) => {
    e.preventDefault();
    // Update the loan details in the list
    const editedLoan = {
      loanName: loanName,
      loanType: loanType,
      interestRate: parseFloat(interestRate),
      balance: parseFloat(balance),
      totalamount:totalamount(balance)
    };
    const updatedLoans = [...loans];
    updatedLoans[editIndex] = editedLoan;
    setLoans(updatedLoans);
    // Clear editIndex state and form inputs
    setEditIndex(null);
    setLoanName("");
    setLoanType("");
    setInterestRate("");
    setBalance("");
    settotalamount("");
  };

  return (
    <div className="container mx-auto p-2 bg-gray-400">
      <h1 className="text-3xl font-bold my-4 text-center">Loan Management</h1>

      {/* Add Loan Form */}
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Add Loan</h2>
        <form onSubmit={handleAddLoanSubmit}>
          <div className="mb-4">
            <label htmlFor="loanName" className="block text-gray-700">Loan Name:</label>
            <input
              id="loanName"
              type="text"
              value={loanName}
              onChange={(e) => setLoanName(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="loanType" className="block text-gray-700">Loan Type:</label>
            <input
              id="loanType"
              type="text"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="interestRate" className="block text-gray-700">Interest Rate:</label>
            <input
              id="interestRate"
              type="text"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="totalamount" className="block text-gray-700">Total Amount:</label>
            <input
              id="balance"
              type="text"
              value={totalamount}
              onChange={(e) => settotalamount(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="balance" className="block text-gray-700">Balance:</label>
            <input
              id="balance"
              type="text"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add Loan</button>
        </form>
      </div>

      {/* Loan List */}
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Loan List</h2>
        <ul>
          {loans.map((loan, index) => (
            <li key={index}>
              <strong>Loan Name:</strong> {loan.loanName}, <strong>Loan Type:</strong> {loan.loanType}, <strong>Balance:</strong> Rs{loan.balance}, <strong>Interest Rate:</strong> {loan.interestRate}%
              {/* Edit and delete buttons */}
              <button onClick={() => handleEditLoan(index)} className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2">Edit</button>
              <button onClick={() => handleDeleteLoan(index)} className="bg-red-500 text-white px-2 py-1 rounded-md ml-2">Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for editing loan */}
      {editIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Edit Loan</h2>
            <form onSubmit={handleEditLoanSubmit}>
              <div className="mb-4">
                <label htmlFor="editLoanName" className="block text-gray-700">Loan Name:</label>
                <input
                  id="editLoanName"
                  type="text"
                  value={loanName}
                  onChange={(e) => setLoanName(e.target.value)}
                  className="w-full px-4 py-2 rounded border outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editLoanType" className="block text-gray-700">Loan Type:</label>
                <input
                  id="editLoanType"
                  type="text"
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  className="w-full px-4 py-2 rounded border outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editInterestRate" className="block text-gray-700">Interest Rate:</label>
                <input
                  id="editInterestRate"
                  type="text"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full px-4 py-2 rounded border outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editBalance" className="block text-gray-700">Balance:</label>
                <input
                  id="editBalance"
                  type="text"
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
                  className="w-full px-4 py-2 rounded border outline-none"
                  required
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanManagement;
