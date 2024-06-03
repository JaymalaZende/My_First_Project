import React, { useState } from "react";
import axios from "axios";

const PolicyTrackerForm = () => {
  // State to store form input values
  const [policyType, setPolicyType] = useState("");
  const [premiumFrequency, setPremiumFrequency] = useState("");
  const [premiumAmount, setPremiumAmount] = useState("");
  const [policyDocument, setPolicyDocument] = useState(null);
  const [agentName, setAgentName] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [agentMobileNumber, setAgentMobileNumber] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  // Function to reset form fields
  const resetForm = () => {
    setPolicyType("");
    setPremiumFrequency("");
    setPremiumAmount("");
    setPolicyDocument(null);
    setAgentName("");
    setAgentEmail("");
    setAgentMobileNumber("");
  };

  // Function to handle file input change for policy document
  const handlePolicyDocumentChange = (e) => {
    setPolicyDocument(e.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      policyType,
      premiumFrequency,
      premiumAmount: parseFloat(premiumAmount),
      policyDocument: policyDocument ? policyDocument.name : null,
      agentName,
      agentEmail,
      agentMobileNumber: parseInt(agentMobileNumber),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/policies",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data submitted successfully:", response.data);
      setSubmittedData(postData);
      // Reset form fields after successful submission
      resetForm();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-3xl font-bold my-4 text-center">Insurance Tracker Form</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="policyType" className="block text-gray-700">Policy Type:</label>
          <select
            id="policyType"
            value={policyType}
            onChange={(e) => setPolicyType(e.target.value)}
            className="w-full px-4 py-2 rounded border outline-none"
            required
          >
            <option value="">Select Policy Type</option>
            <option value="Home">Home</option>
            <option value="Car">Car</option>
            <option value="TermLife">Term Life</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="premiumFrequency" className="block text-gray-700">Premium Frequency:</label>
          <input
            type="text"
            id="premiumFrequency"
            value={premiumFrequency}
            onChange={(e) => setPremiumFrequency(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="premiumAmount" className="block text-gray-700">Premium Amount:</label>
          <input
            type="number"
            id="premiumAmount"
            value={premiumAmount}
            onChange={(e) => setPremiumAmount(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="policyDocument" className="block text-gray-700">Policy Document:</label>
          <input
            type="file"
            id="policyDocument"
            onChange={handlePolicyDocumentChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="agentName" className="block text-gray-700">Agent Name:</label>
          <input
            type="text"
            id="agentName"
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="agentEmail" className="block text-gray-700">Agent Email:</label>
          <input
            type="email"
            id="agentEmail"
            value={agentEmail}
            onChange={(e) => setAgentEmail(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="agentMobileNumber" className="block text-gray-700">Agent Mobile Number:</label>
          <input
            type="tel"
            id="agentMobileNumber"
            value={agentMobileNumber}
            onChange={(e) => setAgentMobileNumber(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>

      {/* Display submitted data */}
      <div className="align-middle justify-center">
        {submittedData && (
          <div className="bg-green-200 text-green-800 px-4 py-2 rounded mb-4">
            <p>Insurance Tracker details:</p>
            <p>Policy Type: {submittedData.policyType}</p>
            <p>Premium Frequency: {submittedData.premiumFrequency}</p>
            <p>Premium Amount: {submittedData.premiumAmount}</p>
            <p>Policy Document: {submittedData.policyDocument}</p>
            <p>Agent Name: {submittedData.agentName}</p>
            <p>Agent Email: {submittedData.agentEmail}</p>
            <p>Agent Mobile Number: {submittedData.agentMobileNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PolicyTrackerForm;
