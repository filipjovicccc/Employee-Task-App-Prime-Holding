import React from 'react'
import Employee from './Employee'

function Employees({employees}) {

  return (
    <div className="container">
    <h1>Employee Tracker</h1>
      <div>

       {employees.map((employee) => (
        <Employee key={employee.id} employee={employee}/>
      ))}


      </div>
      <button className='btn'>Add</button>
    </div>
  )
}

export default Employees
