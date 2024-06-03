// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// // import db from db.json

// function Loginpage() {
//     const [data, setData] = useState([]);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [uname, setUName] = useState("");
//     const [uemail, setUEmail] = useState("");
//     const [Designation, setDesignation] = useState("");
//     const [MonthlySalary, setMonthlySalary] = useState("");
//     const [AdvanceSalary, setAdvanceSalary] = useState("");
//     const [Attaindence, setAttaindence] = useState("");
//     const [Leave, setLeave] = useState("");
//     const [HalfDay, setHalfDay] = useState("");
//     const [TotalDays, setTotalDays] = useState("");

//     const [editId, setEditId] = useState(-1);

//     useEffect(() => {
//         axios.get("http://localhost:3000/users")
//             .then(res => setData(res.data))
//             .catch(err => console.error('Error fetching users:', err))
//             return res.json;
//     }, []);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios.post("http://192.168.1.11:3000/users", {
//             name: name,
//             email: email,
//             Designation: Designation,
//             MonthlySalary: MonthlySalary,
//             AdvanceSalary: AdvanceSalary,
//             Attaindence: Attaindence,
//             Leave: Leave,
//             HalfDay: HalfDay,
//             TotalDays: TotalDays
//         })
//             .then(response => {
//                 console.log(response);
//                 // Refresh data after adding user
//                 axios.get("http://192.168.1.11:3000/users")
//                     .then(res => setData(res.data))
//                     .catch(err => console.error('Error fetching users:', err));
//             })
//             .catch(err => console.error('Error adding user:', err));
//     }

//     const handleEdit = (id) => {
//         axios.get("http://192.168.1.11:3000/users" + id)
//             .then(res => {
//                 console.log(res.data)
//                 setUName(res.data.name)
//                 setUEmail(res.data.email)
//             })
//             .catch(err => console.error('Error fetching user for edit:', err));
//         setEditId(id)
//     }

//     const handleUpdate = () => {
//         axios.put("http://192.168.1.11:3000/users" + editId, {
//             name: uname,
//             email: uemail
//         })
//             .then(result => {
//                 console.log(result);
//                 // Refresh data after updating user
//                 axios.get("http://192.168.1.11:3000/users")
//                     .then(res => setData(res.data))
//                     .catch(err => console.error('Error fetching users:', err));
//                 setEditId(-1);
//             })
//             .catch(err => console.error('Error updating user:', err));
//     }

//     const handleDelete = (id) => {
//         axios.delete("http://192.168.1.11:3000/users" + id)
//             .then(res => {
//                 console.log(res);
//                 // Refresh data after deleting user
//                 axios.get("http://192.168.1.11:3000/users")
//                     .then(res => setData(res.data))
//                     .catch(err => console.error('Error fetching users:', err));
//             })
//             .catch(err => console.error('Error deleting user:', err));
//     }

//     return (
//         <div className='overflow-x-auto'>
//             <div className='flex flex-col md:flex-row'>
//                 <form className='flex flex-wrap gap-2 p-2' onSubmit={handleSubmit}>
//                     <input className='p-2 border border-gray-300 rounded-lg w-full md:w-auto' type='text' placeholder='Enter Name' onChange={e => setName(e.target.value)} />
//                     <input className='p-2 border border-gray-300 rounded-lg w-full md:w-auto' type='text' placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
//                     <input className='p-2 border border-gray-300 rounded-lg w-full md:w-auto' type='text' placeholder='Enter Designation' onChange={e => setDesignation(e.target.value)} />
//                     <input className='p-2 border border-gray-300 rounded-lg w-full md:w-auto' type='text' placeholder='Enter Monthly Salary' onChange={e => setMonthlySalary(e.target.value)} />
//                     <input className='p-2 border border-gray-300 rounded-lg w-full md:w-auto' type='text' placeholder='Enter Advance Salary' onChange={e => setAdvanceSalary(e.target.value)} />
//                     <input className='p-2 border border-gray-300 rounded-lg w-full md:w-auto' type='text' placeholder='Enter Attendance' onChange={e => setAttaindence(e.target.value)} />
//                     <input className='p-2 border border-gray-300 rounded-lg w-full md:w-auto' type='text' placeholder='Enter Leave' onChange={e => setLeave(e.target.value)} />
//                     <input className='p-2 border border-gray-300 rounded-lg w-full md:w-auto' type='text' placeholder='Enter Half Day' onChange={e => setHalfDay(e.target.value)} />
//                     <input className='p-2 border border-gray-300 rounded-lg w-full md:w-auto' type='text' placeholder='Enter Total Days' onChange={e => setTotalDays(e.target.value)} />

//                     <button className='p-2 bg-blue-500 text-white rounded-lg w-full md:w-auto' onClick={handleUpdate}>Add</button>
//                 </form>
//             </div>
//             <div className="overflow-x-auto">
//                 <table className="w-full border-collapse">
//                     <thead className="text-xs text-gray-700  first-letter:uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full md:w-auto">
//                         <tr>
//                             <th scope="col" className="px-4 py-2">Id</th>
//                             <th scope="col" className="px-4 py-2">Name</th>
//                             <th scope="col" className="px-4 py-2">Email</th>
//                             <th scope="col" className="px-4 py-2">Designation</th>
//                             <th scope="col" className="px-4 py-2 w-full md:w-auto">MonthlySalary</th>
//                             <th scope="col" className="px-4 py-2">AdvanceSalary</th>
//                             <th scope="col" className="px-4 py-2">Attendance</th>
//                             <th scope="col" className="px-4 py-2">Leave</th>
//                             <th scope="col" className="px-4 py-2">HalfDay</th>
//                             <th scope="col" className="px-4 py-2">TotalDays</th>
//                             <th scope="col" className="px-4 py-2">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((user) => (
//                             user.id === editId ? (
//                                 <tr key={user.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
//                                     <td>{user.id}</td>
//                                     <td><input type='text' value={uname} onChange={e => setUName(e.target.value)} /></td>
//                                     <td><input type='text' value={uemail} onChange={e => setUEmail(e.target.value)} /></td>
//                                     <td><button onClick={handleUpdate}>Update</button></td>
//                                 </tr>
//                             ) : (
//                                 <tr key={user.id}>
//                                     <td className='border px-4 py-2'>{user.id}</td>
//                                     <td className='border px-4 py-2'>{user.name}</td>
//                                     <td className="border px-4 py-2">{user.email}</td>
//                                     <td className="border px-4 py-2">{user.Designation}</td>
//                                     <td className="border px-4 py-2">{user.MonthlySalary}</td>
//                                     <td className="border px-4 py-2">{user.AdvanceSalary}</td>
//                                     <td className="border px-4 py-2">{user.Attaindence}</td>
//                                     <td className="border px-4 py-2">{user.Leave}</td>
//                                     <td className="border px-4 py-2">{user.HalfDay}</td>
//                                     <td className="border px-4 py-2">{user.TotalDays}</td>
//                                     <td>
//                                         <button onClick={() => handleEdit(user.id)}>Edit</button>
//                                         <button onClick={() => handleDelete(user.id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             )
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default Loginpage
