import React, { useState, useEffect } from 'react';

const Expenses = () => {
  const [expenses, setExpenses] = useState(() => JSON.parse(localStorage.getItem('expenses')) || []);
  const [newExpense, setNewExpense] = useState({
    date: '',
    amount: '',
    productName: ''
  });

  const [irregularExpenses, setIrregularExpenses] = useState([]);

  useEffect(() => {
    analyzeExpenses();
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const analyzeExpenses = () => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const average = total / expenses.length;
    const squaredDiffs = expenses.map(expense => Math.pow(expense.amount - average, 2));
    const avgSquaredDiff = squaredDiffs.reduce((acc, val) => acc + val, 0) / squaredDiffs.length;
    const stdDeviation = Math.sqrt(avgSquaredDiff);
    const threshold = average + stdDeviation;

    const irregulars = expenses.filter(expense => expense.amount > threshold);
    setIrregularExpenses(irregulars);

    if (irregulars.length > 0) {
      alert(`Attention: There are irregular expenses. Check the list for details.`);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewExpense(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = expenses.length + 1;
    setExpenses(prevState => [...prevState, { id, ...newExpense }]);
    setNewExpense({ date: '', amount: '', productName: '' });
  };

  const handleEdit = (id) => {
    console.log("Edit expense with id:", id);
  };

  const handleDelete = (id) => {
    setExpenses(prevState => prevState.filter(expense => expense.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Expenses</h2>
      <form onSubmit={handleSubmit} className="mt-4 mb-4">
        <div className="flex justify-center items-center">
          <input
            type="date"
            name="date"
            value={newExpense.date}
            onChange={handleInputChange}
            className="mr-2 px-2 py-1 border rounded"
            required
          />
          <input
            type="number"
            name="amount"
            value={newExpense.amount}
            onChange={handleInputChange}
            className="mr-2 px-2 py-1 border rounded"
            placeholder="Amount"
            required
          />
          <input
            type="text"
            name="productName"
            value={newExpense.productName}
            onChange={handleInputChange}
            className="mr-2 px-2 py-1 border rounded"
            placeholder="Product Name"
            required
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Add Expense
          </button>
        </div>
      </form>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Irregular</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense.id}>
                <td className="border px-4 py-2">{expense.date}</td>
                <td className="border px-4 py-2">${expense.amount}</td>
                <td className="border px-4 py-2">{expense.productName}</td>
                <td className="border px-4 py-2">
                  {irregularExpenses.find(item => item.id === expense.id) ? 'Yes' : 'No'}
                </td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleEdit(expense.id)} className="mr-2 px-2 py-1 bg-green-500 text-white rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(expense.id)} className="px-2 py-1 bg-red-500 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Expenses;
