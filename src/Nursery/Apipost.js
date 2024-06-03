import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Apipost() {
    useEffect(()=>{
        axios.get('192.168.0.102:3000/products')
        .then((Response)=>setInputdata(Response.data))
        .catch(er=>console.log(er));
    })
    const data ={EmpolyName : "", Designation : "" , Attaindence:"", Leave:"",HalfDay:"",TotalDays:"",MonthlySalary:"",AdvanceSalary:"" };
    const [inputdat, setInputdata] = useState(data);


const handledata =(e)=> {
        setInputdata({inputdat, [e.target.name]:e.target.value})
    }


    const handleSubmit =(e)=>{
        e.preventDefault();
        const id= data.length +1;
        axios.post('192.168.0.102:3000/products', inputdat)
        .then((Response)=>{
        console.log(Response)})
        alert('form Submitted succesfully');
    }
const handleAdd= (e)=>{
    e.preventDefault();
}
const [EmployName, setEmployName] = useState("")
const [Designation, setDesignation] = useState("")
  return (
    <>
    <div className=' flex whitespace-nowrap font-medium text-gray-900 dark:text-white h-56 w-56 p-0 m-0 object-center  ' >
    
          

        <form action=''>
            <input type='text' placeholder='EmployName 'onChange={e=>setEmployName(e.target.value)}/>
            <input type='text' placeholder='Designation ' onChange={e=>setDesignation(e.target.value)}/>
            <button> Add</button>
        </form>

    <div><lable className="flex columns-1 m-auto table-auto rounded-sm divide-x-3 ">EmpolyName</lable>
    <input type='text' name='EmpolyName' value={inputdat.EmpolyName} onChange={handledata} min-w-5></input></div>
    <div><lable className="flex columns-2 overflow-hidden">Designation</lable>
    <input type='text' name='Designation' value={inputdat.Designation} onChange={handledata}></input></div>
    <div><label className=' flex columns-3'>Attaindence </label>
    <input type='number' name='Attaindence' ></input></div>
    <div><label className=' columns-4 flex'>Leave </label>
    <input type='number' name='Leave' value={inputdat.Leave} onChange={handledata}></input></div>
    <div><label className=' columns-5 flex'>HalfDay </label>
    <input type='number' name='HalfDay' value={inputdat.HalfDay} onChange={handledata}></input></div>
    <div><label className=' columns-6 flex'>TotalDays </label>
    <input type='number' name='TotalDays' value={inputdat.TotalDays} onChange={handledata}></input></div>
    <div><label className=' columns-7 flex'>MonthlySalary </label>
    <input type='number' name='MonthlySalary' value={inputdat.MonthlySalary} onChange={handledata}></input></div>
    <div> <label className=' columns-7 flex'>AdvanceSalary </label>
    <input type='number' name='Advance Salary' value={inputdat.AdvanceSalary} onChange={handledata}></input></div>
<div className=' columns-8 flex'><button value={handleAdd}>Add</button></div>
   <div>
    <tr className='columns-1'>
        <td>
            <button onClick={handleSubmit}>Submit
   
   
   </button>
   </td>
   </tr>
   </div>
    </div>
    </>
  )
}

export default Apipost