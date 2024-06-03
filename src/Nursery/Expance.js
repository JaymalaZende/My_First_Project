import React, { useState } from 'react';

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddEmployee = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: name,
      email: email,
    };

    if (editIndex !== -1) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = newEmployee;
      setEmployees(updatedEmployees);
      setEditIndex(-1);
    } else {
      setEmployees([...employees, newEmployee]);
    }

    setName('');
    setEmail('');
  };

  const handleEditEmployee = (index) => {
    const employeeToEdit = employees[index];
    setName(employeeToEdit.name);
    setEmail(employeeToEdit.email);
    setEditIndex(index);
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <h2>Employee Details</h2>
      <form onSubmit={handleAddEmployee}>
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
        <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
        <button type="submit">{editIndex === -1 ? 'Add' : 'Update'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>
                <button onClick={() => handleEditEmployee(index)}>Edit</button>
                <button onClick={() => handleDeleteEmployee(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
