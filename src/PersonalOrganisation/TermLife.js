// src/components/QuoteForm.js
import React, { useState } from 'react';

const TermLife = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    area: '',
    year: '',
    principalAmount: '',
    premiumFrequency: '',
    premiumAmount: '',
    interestRate: '',
    agentName: '',
    agentEmail: '',
    agentMobileNumber: ''
  });

  const [policies, setPolicies] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPolicyIndex, setCurrentPolicyIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedPolicies = policies.map((policy, index) =>
        index === currentPolicyIndex ? formData : policy
      );
      setPolicies(updatedPolicies);
      setIsEditing(false);
      setCurrentPolicyIndex(null);
    } else {
      setPolicies([...policies, formData]);
    }
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      area: '',
      year: '',
      principalAmount: '',
      premiumFrequency: '',
      premiumAmount: '',
      interestRate: '',
      agentName: '',
      agentEmail: '',
      agentMobileNumber: ''
    });
  };

  const handleEdit = (index) => {
    setFormData(policies[index]);
    setIsEditing(true);
    setCurrentPolicyIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPolicies = policies.filter((_, i) => i !== index);
    setPolicies(updatedPolicies);
    alert('Data Delete Suscessfully');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">{isEditing ? 'Edit' : 'Request a'} Quote</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: 'Name', name: 'name', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Phone', name: 'phone', type: 'tel' },
          { label: 'Address', name: 'address', type: 'text' },
        //   { label: 'Car name', name: 'name', type: 'text' },
        //   { label: 'Car Number', name: 'carnumber', type: 'number' },
          { label: 'Tenure in Year', name: 'year', type: 'number' },
          { label: 'Principal Amount', name: 'principalAmount', type: 'number' },
          { label: 'Interest Rate', name: 'interestRate', type: 'number' },
          { label: 'Premium Frequency', name: 'premiumFrequency', type: 'number' },
          { label: 'Premium Amount', name: 'premiumAmount', type: 'number' },
          { label: 'Agent Name', name: 'agentName', type: 'text' },
          { label: 'Agent Email', name: 'agentEmail', type: 'email' },
          { label: 'Agent Mobile Number', name: 'agentMobileNumber', type: 'tel' }
        ].map((field, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-gray-700">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {isEditing ? 'Update' : 'Submit'}
        </button>
      </form>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Policy List</h2>
        <ul>
          {policies.map((policy, index) => (
            <li key={index} className="mb-4 p-4 bg-white rounded shadow-md">
              <div>
                <strong>Policy Holder Name:</strong> {policy.name}<br />
                <strong>Email:</strong> {policy.email}<br />
                <strong>Phone:</strong> {policy.phone}<br />
                <strong>Address:</strong> {policy.address}<br />
                <strong>Car Number:</strong> {policy.carnumber}<br />
                <strong>Car Name:</strong> {policy.carname}<br />
                <strong>Tenure in Year:</strong> {policy.year}<br />
                <strong>Principal Amount:</strong> {policy.principalAmount}<br />
                <strong>Premium Frequency:</strong> {policy.premiumFrequency}<br />
                <strong>Premium Amount:</strong> {policy.premiumAmount}<br />
                <strong>Interest Rate:</strong> {policy.interestRate}<br />
                <strong>Agent Name:</strong> {policy.agentName}<br />
                <strong>Agent Email:</strong> {policy.agentEmail}<br />
                <strong>Agent Mobile Number:</strong> {policy.agentMobileNumber}
              </div>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
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

export default TermLife;
