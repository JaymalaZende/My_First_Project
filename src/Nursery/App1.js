import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App1.css";
import data from "./Db.json";
// import ReadOnlyRow from "./components/ReadOnlyRow";
// import EditableRow from "./components/EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const App1 = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Designation: "",
    MonthlySalary: "",
    TotalDays: "",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Designation: "",
    MonthlySalary: "",
    TotalDays: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Name: addFormData.Name,
      Designation: addFormData.Designation,
      MonthlySalary: addFormData.MonthlySalary,
      TotalDays: addFormData.TotalDays,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Name: editFormData.Name,
      Designation: editFormData.Designation,
      MonthlySalary: editFormData.MonthlySalary,
      TotalDays: editFormData.TotalDays,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: contact.Name,
      Designation: contact.Designation,
      MonthlySalary: contact.MonthlySalary,
      TotalDays: contact.TotalDays,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>MonthlySalary</th>
              <th>Total Days</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Designation"
          required="required"
          placeholder="Enter an Designation..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="MonthlySalary"
          required="required"
          placeholder="Enter a salary..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="TotalDays"
          required="required"
          placeholder="Enter an Days..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App1;