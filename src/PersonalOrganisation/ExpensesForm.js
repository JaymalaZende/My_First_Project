import React, { useState } from 'react';

const ExpensesForm = () => {
    // State variables to store form input values
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    // State to store submitted expenses
    const [expenses, setExpenses] = useState([]);

    // State to track the record being edited
    const [editingIndex, setEditingIndex] = useState(null);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new expense object
        const newExpense = {
            category,
            date,
            amount,
            description,
        };

        if (editingIndex !== null) {
            // Update existing expense
            const updatedExpenses = [...expenses];
            updatedExpenses[editingIndex] = newExpense;
            setExpenses(updatedExpenses);
            setEditingIndex(null);
            alert ("Data Update Sucesfully");
        } else {
            // Add new expense
            setExpenses([...expenses, newExpense]);
        }

        // Clear the form input fields
        setCategory('');
        setDate('');
        setAmount('');
        setDescription('');
    };

    // Function to handle editing an expense
    const handleEdit = (index) => {
        const expense = expenses[index];
        setCategory(expense.category);
        setDate(expense.date);
        setAmount(expense.amount);
        setDescription(expense.description);
        setEditingIndex(index);
    };

    // Function to handle deleting an expense
    const handleDelete = (index) => {
        const updatedExpenses = expenses.filter((_, i) => i !== index);
        setExpenses(updatedExpenses);
    };

    return (
        <div className="container mx-auto p-4 bg-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-center">Expenses Form</h1>

            {/* Form to add/edit an expense */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
                {/* Category Input */}
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 mb-2">Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="Home">Home</option>
                        <option value="Car">Car</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Service">Service</option>
                        <option value="Licenses">Licenses</option>
                    </select>
                </div>

                {/* Date Input */}
                <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700 mb-2">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-gray-700 mb-2">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Enter amount"
                        required
                    />
                </div>

                {/* Description Input */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 mb-2">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Enter description"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    {editingIndex !== null ? 'Update' : 'Submit'}
                </button>
            </form>

            {/* Display the submitted expenses */}
            <div className="max-w-md mx-auto mt-6">
                <h2 className="text-2xl font-bold mb-4">Submitted Expenses:</h2>
                <ul>
                    {expenses.map((expense, index) => (
                        <li key={index} className="mb-4 p-4 bg-white rounded shadow-md">
                            <div><strong>Category:</strong> {expense.category}</div>
                            <div><strong>Date:</strong> {expense.date}</div>
                            <div><strong>Amount:</strong> RS: {expense.amount}</div>
                            <div><strong>Description:</strong> {expense.description}</div>
                            <div className="mt-2">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="bg-yellow-500 text-white py-1 px-2 rounded-md mr-2 hover:bg-yellow-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpensesForm;
