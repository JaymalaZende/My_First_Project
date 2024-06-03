//import axios from 'axios'

// import { useState, useEffect } from 'react';

// function Table() {
//   const [data, setData] = useState([])
//   const [Name, setName] =useState("")
//   const [Designation, setDesignation] =useState('')
//   const [Edit, setEditSr] = useState(-1)

// useEffect(()=>
//   axios.get("http://localhost:3000/users")
//   .then(res => setData(res.data))
//   .catch(er => console.log(er))
//   )
//   const handleSubmit = (Event) => {
//     Event.preventDefault();
//     const Sr = data.length +1;
//     axios.post("http://localhost:3000/users" , {Sr ,Name : Name, Designation: Designation})
//     .then(res=> console.log(res))
//     .catch(er =>console.log(er));
//   }
  
  
//     return (
      
//     <div className='container'>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder='Enter Name'  onChange={e => setName(e.target.value)} />
//           <input type="text" placeholder='Enter Designation' onChange={e => setDesignation(e.target.value)} />
//           <button>Add</button>
//         </form>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Sr</th>
//             <th>Name</th>
//             <th>Designation</th>
//             <th>Attaindence</th>
//             <th>Leave</th>
//             <th>Leave</th>
//             <th>Action</th>
//           </tr>
//         </thead >
//                {
//                 data.map((user, index) =>(
//                   user.Sr==EditSr ?
//                   <tr>
//                     <td>{user.Sr}</td>
//                     <td><input type="text" value={user.Name}/></td>
//                     <td><input type="text" value={user.Designation}/></td>
//                     <td><button>Update</button></td>
//                   </tr>                  :
//                   <tr  key={index}>
//                     <td>{user.Sr}</td>
//                     <td>{user.Name }</td>
//                     <td>{user.Designation }</td>
//                     <td>{user.Attaindence }</td>
//                     <td>{user.Leave }</td>
//                     <td>{user.Action }</td>
//                     <td>
//                       <button onClick={()=> handleEdit(user.sr)}>Edit</button>
//                       <button>delete</button>
//                     </td>


//                   </tr>
//                 )
//                 )
//                }
//         <tbody>

//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Table