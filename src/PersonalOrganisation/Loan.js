import React, { useState } from 'react';
import axios from 'axios';

const LoanManagement = () => {
  const [loans, setLoans] = useState([]);
  const [loanName, setLoanName] = useState('');
  const [loanType, setLoanType] = useState('');
  const [balance, setBalance] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [error, setError] = useState(null);

  const resetForm = () => {
    setLoanName('');
    setLoanType('');
    setBalance('');
    setInterestRate('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLoan = {
      loanName,
      loanType,
      balance: parseFloat(balance),
      interestRate: parseFloat(interestRate)
    };

    try {
      const response = await axios.post('http://localhost:8080/api/policies', newLoan, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setLoans([...loans, newLoan]);
      resetForm();
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      // setError('Error submitting data. Please try again.');
      // console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Loan Management System</h1>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Loan Name</label>
          <input type="text" value={loanName} onChange={(e) => setLoanName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Loan Type</label>
          <input type="text" value={loanType} onChange={(e) => setLoanType(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Balance</label>
          <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Interest Rate (%)</label>
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Loan</button>
      </form>
      {/* Loan List */}
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Loan List</h2>
        <ul>
          {loans.map((loan, index) => (
            <li key={index}>
              <strong>Loan Name:</strong> {loan.loanName}, <strong>Loan Type:</strong> {loan.loanType}, <strong>Balance:</strong> Rs{loan.balance}, <strong>Interest Rate:</strong> {loan.interestRate}%
            </li>
          ))}
        </ul>
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default LoanManagement;
