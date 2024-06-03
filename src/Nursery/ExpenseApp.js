import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseApp = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    id: 0,
    entity: '',
    quantity: 0,
    amount: 0,
    date: '',
    total: ''
  });

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('/api/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const addExpense = async () => {
    try {
      await axios.post('/api/expenses', newExpense);
      fetchExpenses();
      setNewExpense({
        id: 0,
        entity: '',
        quantity: 0,
        amount: 0,
        date: '',
        total: ''
      });
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`/api/expenses/${id}`);
      fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const editExpense = (expense) => {
    setNewExpense({ ...expense });
  };

  const updateExpense = async () => {
    try {
      await axios.put(`/api/expenses/${newExpense.id}`, newExpense);
      fetchExpenses();
      setNewExpense({
        id: 0,
        entity: '',
        quantity: 0,
        amount: 0,
        date: '',
        total: ''
      });
    } catch (error) {
      console.error('Error updating expense:', error);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
    return date.toLocaleDateString('en-GB');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Expense Management</h1>
      <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Edit Expense</h2>
        <input
          type="text"
          name="date"
          placeholder="Date (dd/mm/yyyy)"
          value={newExpense.date}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="entity"
          placeholder="Entity"
          value={newExpense.entity}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newExpense.quantity}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={handleInputChange}
          className="input-field"
        />
                <input
          type="text"
          name="total"
          placeholder="Total"
          value={newExpense.total}
          onChange={handleInputChange}
          className="input-field"
        />
        <div className="flex justify-between mt-4">
          <button onClick={addExpense} className="button-primary font-semibold mb-2">
            Add Expense
          </button>
          {newExpense.id !== 0 && (
            <button onClick={updateExpense} className="button-primary">
              Update Expense
            </button>
          )}
          <button
            onClick={() =>
              setNewExpense({
                id: 0,
                entity: '',
                quantity: 0,
                amount: 0,
                date: '',
                total: ''
              })
            }
            className="button-secondary h-7 size-6/12 font-semibold mb-2"
          >
            Clear
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Expenses List</h2>
        <ul className="bg-white shadow-md rounded-md p-4">
          {expenses.map((expense) => (
            <li key={expense.id} className="flex justify-between items-center py-2 border-b">
              <span>{expense.id} - {formatDate(expense.date)} - {expense.entity} - {expense.quantity} - {expense.amount} - {expense.total}</span>
              <div>
                <button onClick={() => editExpense(expense)} className="button-edit mr-2">Edit</button>
                <button onClick={() => deleteExpense(expense.id)} className="button-delete">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseApp;
