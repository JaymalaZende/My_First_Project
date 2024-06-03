import React, { useState, useEffect } from 'react';

// Sample data for bills (replace with actual data)
const bills = [
  { id: 1, name: 'Bill A', amount: 100, dueDate: '2024-02-15' },
  { id: 2, name: 'Bill B', amount: 200, dueDate: '2024-02-10' }, // Overdue
  { id: 3, name: 'Bill C', amount: 150, dueDate: '2024-02-20' },
  // Add more bills as needed
];

const OverdueBills = () => {
  const [overdueBills, setOverdueBills] = useState([]);

  useEffect(() => {
    checkOverdueBills();
  }, []);

  const checkOverdueBills = () => {
    const today = new Date();
    const overdue = bills.filter(bill => new Date(bill.dueDate) < today);
    setOverdueBills(overdue);
    if (overdue.length > 0) {
      alert(`You have ${overdue.length} overdue bills!`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Overdue Bills</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {overdueBills.map(bill => (
              <tr key={bill.id}>
                <td className="border px-4 py-2">{bill.id}</td>
                <td className="border px-4 py-2">{bill.name}</td>
                <td className="border px-4 py-2">${bill.amount}</td>
                <td className="border px-4 py-2">{bill.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OverdueBills;
