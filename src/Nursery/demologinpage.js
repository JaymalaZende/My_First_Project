import React from 'react'

// const [data, setdata]= useState([])
// const [name, setName]= useState("")
// const [email, setEmail]= useState("")
// const [editId, setEditId]=useState(-1)
// useEffect(()=>{})


function demologinpage() {
  return (
    <div className='relative overflow-x-auto'>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
        
        <th scope="col" class="px-6 py-3"><input type='text'/>Id</th>
        <th scope="col" class="px-6 py-3"> <input type='text'/>Name</th>
        <th scope="col" class="px-6 py-3"> <input type='text'/>Email</th>
        <th scope="col" class="px-6 py-3"> Action</th>
    </tr>
    </thead>
    <tbody> 
    <tr >
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">Id</th>
            {/* <td scope="row" class="px-6 py-4">{id}</td> */}
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">Name</th>
            <td scope="row" class="px-6 py-4">name</td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">Email</th>
            <td scope="row" class="px-6 py-4">email</td>
    {/* <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={Id}>edit</button> */}
    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={"delete"}> delete</button>

        </tr>
      </tbody>
  </table>
    </div>
  )
}

export default demologinpage