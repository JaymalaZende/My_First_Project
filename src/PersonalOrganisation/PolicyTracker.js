import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PolicyTracker = () => {
  const navigate = useNavigate();
  // State to store policy details
  const [policies, setPolicies] = useState([]);
  // State to store form input values
  const [policyType, setPolicyType] = useState("");
  const [premiumFrequency, setPremiumFrequency] = useState("");
  const [premiumAmount, setPremiumAmount] = useState("");
  const [principalAmount, setPrincipalAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [policyDocument, setPolicyDocument] = useState(null);
  const [agentName, setAgentName] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [agentMobileNumber, setAgentMobileNumber] = useState("");
  // State to store the index of the policy being edited
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to handle form submission for policy
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (policyType && premiumFrequency && premiumAmount && agentName && agentEmail && agentMobileNumber) {
      const newPolicy = {
        policyType,
        premiumFrequency,
        premiumAmount,
        principalAmount,
        interestRate,
        policyDocument: policyDocument ? policyDocument.name : null,
        agentName,
        agentEmail,
        agentMobileNumber,
      };
      if (editingIndex !== null) {
        // If editing an existing policy, update it in the policies array
        const updatedPolicies = [...policies];
        updatedPolicies[editingIndex] = newPolicy;
        setPolicies(updatedPolicies);
        setEditingIndex(null); // Reset editingIndex after editing
      } else {
        // If adding a new policy, append it to the policies array
        setPolicies([...policies, newPolicy]);
      }
      // Clear form inputs
      setPolicyType("");
      setPremiumFrequency("");
      setPremiumAmount("");
      setPrincipalAmount("");
      setInterestRate("");
      setPolicyDocument(null);
      setAgentName("");
      setAgentEmail("");
      setAgentMobileNumber("");
      // Make API call to save data to the database
      axios
        .post("http://localhost:8080/api/policies", newPolicy)
        .then((response) => {
          console.log("Policy saved successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error saving policy:", error);
        });
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Function to handle file input change for policy document
  const handlePolicyDocumentChange = (e) => {
    setPolicyDocument(e.target.files[0]);
  };

  // Function to handle editing a policy
  const handleEditPolicy = (index) => {
    // Set the form fields with the data of the selected policy
    const policyToEdit = policies[index];
    setPolicyType(policyToEdit.policyType);
    setPremiumFrequency(policyToEdit.premiumFrequency);
    setPremiumAmount(policyToEdit.premiumAmount);
    setPrincipalAmount(policyToEdit.principalAmount);
    setInterestRate(policyToEdit.interestRate);
    setAgentName(policyToEdit.agentName);
    setAgentEmail(policyToEdit.agentEmail);
    setAgentMobileNumber(policyToEdit.agentMobileNumber);
    setEditingIndex(index);
    alert ("Data Update Sucesfully");
  };

  // Function to handle deleting a policy
  const handleDeletePolicy = (index) => {
    // Update local state to remove the policy at the specified index
    const updatedPolicies = [...policies];
    updatedPolicies.splice(index, 1);
    setPolicies(updatedPolicies);
    alert ("Data Delete Sucesfully");
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Policy and Agent Tracker</h1>

      {/* Add Policy Form */}
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">{editingIndex !== null ? "Edit Policy" : "Add Policy"}</h2>
        <form onSubmit={handleAddSubmit}>
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
              <option value="Insurance1">Insurance1</option>
              <option onClick={()=>navigate("/PolicyPage")} value="Home">Home</option>
              <option value="Car">Car</option>
              <option value="TermLife">Term Life</option>
              <option value="Health">Health</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="premiumFrequency" className="block text-gray-700">Premium Frequency:</label>
            <input
              id="premiumFrequency"
              type="text"
              value={premiumFrequency}
              onChange={(e) => setPremiumFrequency(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="principalAmount" className="block text-gray-700">Principal Amount:</label>
            <input
              id="principalAmount"
              type="text"
              value={principalAmount}
              onChange={(e) => setPrincipalAmount(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="premiumAmount" className="block text-gray-700">Premium Amount:</label>
            <input
              id="premiumAmount"
              type="text"
              value={premiumAmount}
              onChange={(e) => setPremiumAmount(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="interestRate" className="block text-gray-700">Interest Rate:</label>
            <input
              id="interestRate"
              type="text"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="policyDocument" className="block text-gray-700">Policy Document:</label>
            <input
              id="policyDocument"
              type="file"
              onChange={handlePolicyDocumentChange}
              className="w-full px-4 py-2 rounded border outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="agentName" className="block text-gray-700">Agent Name:</label>
            <input
              id="agentName"
              type="text"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="agentEmail" className="block text-gray-700">Agent Email:</label>
            <input
              id="agentEmail"
              type="email"
              value={agentEmail}
              onChange={(e) => setAgentEmail(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="agentMobileNumber" className="block text-gray-700">Agent Mobile Number:</label>
            <input
              id="agentMobileNumber"
              type="tel"
              value={agentMobileNumber}
              onChange={(e) => setAgentMobileNumber(e.target.value)}
              className="w-full px-4 py-2 rounded border outline-none"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            {editingIndex !== null ? "Update Policy" : "Add Policy"}
          </button>
        </form>
      </div>

      {/* Policy List */}
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Policy List</h2>
        <ul>
          {policies.map((policy, index) => (
            <li key={index} className="mb-4 p-4 bg-white rounded shadow-md">
              <div>
                <strong>Policy Type:</strong> {policy.policyType}<br />
                <strong>Premium Frequency:</strong> {policy.premiumFrequency}<br />
                <strong>Principal Amount:</strong> {policy.principalAmount}<br />
                <strong>Premium Amount:</strong> {policy.premiumAmount}<br />
                <strong>Interest Rate:</strong> {policy.interestRate}<br />
                <strong>Policy Document:</strong> {policy.policyDocument}<br />
                <strong>Agent Name:</strong> {policy.agentName}<br />
                <strong>Agent Email:</strong> {policy.agentEmail}<br />
                <strong>Agent Mobile Number:</strong> {policy.agentMobileNumber}
              </div>
              {/* Edit and Delete buttons */}
              <div className="mt-2">
                <button
                  onClick={() => handleEditPolicy(index)}
                  className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2 hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePolicy(index)}
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

export default PolicyTracker;
