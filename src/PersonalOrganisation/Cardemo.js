import React, { useState } from 'react';

// Sample data for demonstration purposes
const sampleServicingData = [
  { id: 1, date: '2024-03-15', description: 'Oil Change', cost: 50 },
  { id: 2, date: '2024-02-10', description: 'Tire Rotation', cost: 80 },
  // Add more sample data as needed
];

const sampleInsuranceData = {
  provider: 'ABC Insurance',
  policyNumber: '12345',
  renewalDate: '2024-05-01',
  coverageInfo: 'Comprehensive coverage',
};

const sampleReminders = [
  { id: 1, type: 'PUC Renewal', date: '2024-04-15' },
  // Add more reminders as needed
];

const sampleExpenses = [
  { id: 1, type: 'Battery Replacement', date: '2024-01-20', cost: 200 },
  { id: 2, type: 'Tire Change', date: '2023-11-05', cost: 300 },
  // Add more expenses as needed
];

function Cardemo() {
  // State variables to manage data
  const [servicingData, setServicingData] = useState(sampleServicingData);
  const [insuranceData, setInsuranceData] = useState(sampleInsuranceData);
  const [reminders, setReminders] = useState(sampleReminders);
  const [expenses, setExpenses] = useState(sampleExpenses);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Car Maintenance Tracker</h1>

      {/* Servicing Schedule */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Servicing Schedule</h2>
        <ul>
          {servicingData.map((service) => (
            <li key={service.id}>
              {service.date} - {service.description} - ${service.cost}
            </li>
          ))}
        </ul>
      </div>

      {/* Insurance Details */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Insurance Details</h2>
        <p>
          Provider: {insuranceData.provider}<br/>
          Policy Number: {insuranceData.policyNumber}<br/>
          Renewal Date: {insuranceData.renewalDate}<br/>
          Coverage Info: {insuranceData.coverageInfo}
        </p>
      </div>

      {/* Reminders */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Reminders</h2>
        <ul>
          {reminders.map((reminder) => (
            <li key={reminder.id}>
              {reminder.date} - {reminder.type} Renewal
            </li>
          ))}
        </ul>
      </div>

      {/* Expenses */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Expenses</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.date} - {expense.type} - ${expense.cost}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cardemo;
