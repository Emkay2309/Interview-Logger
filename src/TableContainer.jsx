import React, { useState } from 'react'
import './App.css'

function TableContainer() {

  return (
    <div className='table-container'>
        <input className="search"
        type='text' 
        placeholder='search by name'
        onChange={()=>{}}/>

        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Company</th>
                    <th>Platform</th>
                    <th>Link</th>
                    <th>Refernce</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {/* <tr>
                   <td>05-01-2024</td> 
                   <td>Fractual</td>
                   <td>LinkedIn</td>
                   <td>https://www.keka.com/best-job-portals-in-india</td>
                   <td>None</td>
                   <td className='actions'>
                    <button className='edit'>Edit</button>
                    <button className='delete'>Delete</button>
                   </td>
                </tr> */}
            </tbody>
        </table>

        <div className='pagination'></div>
    </div>
  )
}

export default TableContainer