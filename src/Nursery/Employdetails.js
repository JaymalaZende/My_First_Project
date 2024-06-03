import React, { useState } from 'react'


function Employdetails() {
  return (
  //   <div class="Container-fluid">
  //   <div className='mt-2 p-3 bg-primary text-black rounded text-center'>
  //       <h1>Employ Details</h1>
  //       </div>
  //       <div className='row pt-2'>
                
  //         <div className='col-12'>
  //         <div className='card'>
  //           <div className='card-header bg-success text-white'>
  //             <div className='row'>
  //               <div className='col-6'>New Employ</div>
  //               <div className='col-6 text-end'></div>
  //               <button className='btn btn-sm btn-sucess' >List</button>
  //                      </div>
  //         </div>
  //       </div>
  //       </div>
  //       <div className='card-body'>
  //       <div className='row'>
  //       <div className='col-7'>
  //       <div className='row'>
  //       <div className='col-6'>
  //         <label for=''> <b>Name</b></label>
  //         <input type='text' ></input>
  //         </div>
  //         </div>
  //         </div>
  //         </div>
  //         <div className='row'>
  //       <div className='col-12'>
  //         <div className='card'>
  //           <div className='card-header bg-primery'>
  //           <div className='row'>
  //           <div className='clo-6'>Empoly List</div>
  //           <div className='col-6 text-end'>
              
  //           </div>
            
  //           </div> 
  //           </div> 
  //           </div> 
  //           </div>
  //       </div>        
  //       <table className='table table-bordered'>
  //               <thead>
  //                   <tr>
  //                   <th>Sr NO</th>
  //                   <th>Name</th>
  //                   <th>Contact</th>
  //                   <th>Email</th>
  //                   <th>City</th>
  //                   <th>Designation</th> 
  //                   <th>Action</th>   
  //                   </tr>
  //               </thead>
  //               </table>
           
  //       </div>
        
  //     </div>
  // </div>
  

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default Employdetails