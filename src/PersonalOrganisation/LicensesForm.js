import React, { useState } from 'react';

const LicensesForm = () => {
    // State variables to store form input values
    const [licenseType, setLicenseType] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [issuingAuthority, setIssuingAuthority] = useState('');
    const [licenseDocument, setLicenseDocument] = useState(null);
    const [holderName, setHolderName] = useState('');
    const [holderEmail, setHolderEmail] = useState('');
    const [holderPhoneNumber, setHolderPhoneNumber] = useState('');

    // State to store submitted licenses
    const [licenses, setLicenses] = useState([]);

    // State to track the record being edited
    const [editingIndex, setEditingIndex] = useState(null);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new license object
        const newLicense = {
            licenseType,
            licenseNumber,
            issueDate,
            expiryDate,
            issuingAuthority,
            licenseDocument: licenseDocument ? licenseDocument.name : 'N/A',
            holderName,
            holderEmail,
            holderPhoneNumber,
        };

        if (editingIndex !== null) {
            // Update existing license
            const updatedLicenses = [...licenses];
            updatedLicenses[editingIndex] = newLicense;
            setLicenses(updatedLicenses);
            setEditingIndex(null);
            alert ("Data Update Sucesfully");
        } else {
            // Add new license
            setLicenses([...licenses, newLicense]);
        }

        // Clear the form input fields
        setLicenseType('');
        setLicenseNumber('');
        setIssueDate('');
        setExpiryDate('');
        setIssuingAuthority('');
        setLicenseDocument(null);
        setHolderName('');
        setHolderEmail('');
        setHolderPhoneNumber('');
    };

    // Function to handle editing a license
    const handleEdit = (index) => {
        const license = licenses[index];
        setLicenseType(license.licenseType);
        setLicenseNumber(license.licenseNumber);
        setIssueDate(license.issueDate);
        setExpiryDate(license.expiryDate);
        setIssuingAuthority(license.issuingAuthority);
        setLicenseDocument(null); // Reset file input
        setHolderName(license.holderName);
        setHolderEmail(license.holderEmail);
        setHolderPhoneNumber(license.holderPhoneNumber);
        setEditingIndex(index);
       
    };

    // Function to handle deleting a license
    const handleDelete = (index) => {
        const updatedLicenses = licenses.filter((_, i) => i !== index);
        setLicenses(updatedLicenses);
        alert("Data Deletes Sucessfully");       
    };

    // Function to handle file input change for license document
    const handleFileChange = (e) => {
        setLicenseDocument(e.target.files[0]);
    };

    return (
        <div className="container mx-auto p-4 bg-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-center">Licenses Form</h1>

            {/* Form to add/edit a license */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
                {/* License Type Input */}
                <div className="mb-4">
                    <label htmlFor="licenseType" className="block text-gray-700 mb-2">License Type:</label>
                    <select
                        id="licenseType"
                        value={licenseType}
                        onChange={(e) => setLicenseType(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    >
                        <option value="" disabled>Select a license type</option>
                        <option value="Two-Wheeler">Two Wheeler</option>
                        <option value="Four Wheeler">Four Wheeler</option>
                        <option value="Property">Property</option>
                        <option value="Company">Company</option>
                    </select>
                </div>

                {/* License Number Input */}
                <div className="mb-4">
                    <label htmlFor="licenseNumber" className="block text-gray-700 mb-2">License Number:</label>
                    <input
                        type="text"
                        id="licenseNumber"
                        value={licenseNumber}
                        onChange={(e) => setLicenseNumber(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Enter license number"
                        required
                    />
                </div>

                {/* Issue Date Input */}
                <div className="mb-4">
                    <label htmlFor="issueDate" className="block text-gray-700 mb-2">Issue Date:</label>
                    <input
                        type="date"
                        id="issueDate"
                        value={issueDate}
                        onChange={(e) => setIssueDate(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>

                {/* Expiry Date Input */}
                <div className="mb-4">
                    <label htmlFor="expiryDate" className="block text-gray-700 mb-2">Expiry Date:</label>
                    <input
                        type="date"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>

                {/* Issuing Authority Input */}
                <div className="mb-4">
                    <label htmlFor="issuingAuthority" className="block text-gray-700 mb-2">Issuing Authority:</label>
                    <input
                        type="text"
                        id="issuingAuthority"
                        value={issuingAuthority}
                        onChange={(e) => setIssuingAuthority(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Enter issuing authority"
                        required
                    />
                </div>

                {/* License Document Input */}
                <div className="mb-4">
                    <label htmlFor="licenseDocument" className="block text-gray-700 mb-2">License Document:</label>
                    <input
                        type="file"
                        id="licenseDocument"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>

                {/* License Holder's Name Input */}
                <div className="mb-4">
                    <label htmlFor="holderName" className="block text-gray-700 mb-2">License Holder's Name:</label>
                    <input
                        type="text"
                        id="holderName"
                        value={holderName}
                        onChange={(e) => setHolderName(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Enter holder's name"
                        required
                    />
                </div>

                {/* License Holder's Email Input */}
                <div className="mb-4">
                    <label htmlFor="holderEmail" className="block text-gray-700 mb-2">License Holder's Email:</label>
                    <input
                        type="email"
                        id="holderEmail"
                        value={holderEmail}
                        onChange={(e) => setHolderEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Enter holder's email"
                        required
                    />
                </div>

                {/* License Holder's Phone Number Input */}
                <div className="mb-4">
                    <label htmlFor="holderPhoneNumber" className="block text-gray-700 mb-2">License Holder's Phone Number:</label>
                    <input
                        type="tel"
                        id="holderPhoneNumber"
                        value={holderPhoneNumber}
                        onChange={(e) => setHolderPhoneNumber(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        placeholder="Enter holder's phone number"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    {editingIndex !== null ? 'Update' : 'Submit'}
                </button>
            </form>

            {/* Display the submitted licenses */}
            <div className="max-w-md mx-auto mt-6">
                <h2 className="text-2xl font-bold mb-4">Submitted Licenses:</h2>
                <ul>
                    {licenses.map((license, index) => (
                        <li key={index} className="mb-4 p-4 bg-white rounded shadow-md">
                            <div><strong>License Type:</strong> {license.licenseType}</div>
                            <div><strong>License Number:</strong> {license.licenseNumber}</div>
                            <div><strong>Issue Date:</strong> {license.issueDate}</div>
                            <div><strong>Expiry Date:</strong> {license.expiryDate}</div>
                            <div><strong>Issuing Authority:</strong> {license.issuingAuthority}</div>
                            <div><strong>License Document:</strong> {license.licenseDocument}</div>
                            <div><strong>Holder's Name:</strong> {license.holderName}</div>
                            <div><strong>Holder's Email:</strong> {license.holderEmail}</div>
                            <div><strong>Holder's Phone Number:</strong> {license.holderPhoneNumber}</div>
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

export default LicensesForm;
