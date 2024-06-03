import React, { useState } from 'react';
import axios from 'axios';

const ServiceRecordForm = () => {
  // State variables to store form input values
  const [serviceType, setServiceType] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [pucRenewalDate, setPucRenewalDate] = useState('');

  // State to store submitted service records
  const [serviceRecords, setServiceRecords] = useState([]);

  // State to track the record being edited
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newServiceRecord = {
      serviceType,
      serviceDate,
      serviceDescription,
      pucRenewalDate,
    };

    if (editingIndex !== null) {
      // Update existing record
      const updatedRecords = [...serviceRecords];
      updatedRecords[editingIndex] = newServiceRecord;
      setServiceRecords(updatedRecords);
      setEditingIndex(null);
      alert ("Data Update Sucesfully");
    } else {
      // Add new record
      setServiceRecords([...serviceRecords, newServiceRecord]);
    }

    // Clear the form input fields
    setServiceType('');
    setServiceDate('');
    setServiceDescription('');
    setPucRenewalDate('');

    // Uncomment to make an API call to save data to the server
    // try {
    //   const response = await axios.post('/api/service', newServiceRecord);
    //   console.log('Service record saved:', response.data);
    // } catch (error) {
    //   console.error('Error saving service record:', error);
    // }
  };

  // Function to handle editing a record
  const handleEdit = (index) => {
    const record = serviceRecords[index];
    setServiceType(record.serviceType);
    setServiceDate(record.serviceDate);
    setServiceDescription(record.serviceDescription);
    setPucRenewalDate(record.pucRenewalDate);
    setEditingIndex(index);
  };

  // Function to handle deleting a record
  const handleDelete = (index) => {
    const updatedRecords = serviceRecords.filter((_, i) => i !== index);
    setServiceRecords(updatedRecords);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center">Service Record Form</h1>
      
      {/* Form to add/edit a service record */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        {/* Service Type Input */}
        <div className="mb-4">
          <label htmlFor="serviceType" className="block text-gray-700 mb-2">Service Type:</label>
          <input
            type="text"
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter service type"
            required
          />
        </div>

        {/* Service Date Input */}
        <div className="mb-4">
          <label htmlFor="serviceDate" className="block text-gray-700 mb-2">Service Date:</label>
          <input
            type="date"
            id="serviceDate"
            value={serviceDate}
            onChange={(e) => setServiceDate(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Service Description Input */}
        <div className="mb-4">
          <label htmlFor="serviceDescription" className="block text-gray-700 mb-2">Service Description:</label>
          <textarea
            id="serviceDescription"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter service description"
            required
          />
        </div>

        {/* PUC Renewal Date Input */}
        <div className="mb-4">
          <label htmlFor="pucRenewalDate" className="block text-gray-700 mb-2">PUC Renewal Date:</label>
          <input
            type="date"
            id="pucRenewalDate"
            value={pucRenewalDate}
            onChange={(e) => setPucRenewalDate(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {editingIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>

      {/* Display the submitted service records */}
      <div className="max-w-md mx-auto mt-6">
        <h2 className="text-2xl font-bold mb-4">Submitted Service Records:</h2>
        <ul>
          {serviceRecords.map((record, index) => (
            <li key={index} className="mb-4 p-4 bg-white rounded shadow-md">
              <div><strong>Service Type:</strong> {record.serviceType}</div>
              <div><strong>Service Date:</strong> {record.serviceDate}</div>
              <div><strong>Service Description:</strong> {record.serviceDescription}</div>
              <div><strong>PUC Renewal Date:</strong> {record.pucRenewalDate}</div>
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

export default ServiceRecordForm;
