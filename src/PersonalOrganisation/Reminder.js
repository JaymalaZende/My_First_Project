import React, { useState } from 'react';

function ReminderForm() {
  const [reminder, setReminder] = useState({
    type: '',
    date: ''
  });
  const [addedReminder, setAddedReminder] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReminder(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle the submission of the reminder
    console.log('Submitted Reminder:', reminder);
    // Update the state to display the added reminder details
    setAddedReminder(reminder);
    // Clear the form fields after submission
    setReminder({
      type: '',
      date: ''
    });

    // Call functions to send reminders via SMS, email, and mobile app
    sendSMSReminder(reminder);
    sendEmailReminder(reminder);
    sendMobileAppReminder(reminder);
  };

  const sendSMSReminder = (phoneNumber, message) => {
    // Integration with SMS gateway provider (e.g., Twilio)
    // Make HTTP request to send SMS
    
  };
  
  const sendEmailReminder = (email, subject, body) => {
    // Integration with email delivery service provider (e.g., SendGrid)
    // Send email using provider's API
  };
  
  const sendMobileAppReminder = (deviceToken, title, body) => {
    // Integration with push notification service (e.g., Firebase Cloud Messaging)
    // Send push notification to device using provider's API
  };
  
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Set Reminder</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Reminder Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={reminder.type}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter reminder type"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Reminder Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={reminder.date}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Set Reminder
          </button>
        </div>
      </form>

      {/* Display added reminder details */}
      {addedReminder && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Added Reminder Details:</h2>
          <p>Type: {addedReminder.type}</p>
          <p>Date: {addedReminder.date}</p>
        </div>
      )}
    </div>
  );
}

export default ReminderForm;
