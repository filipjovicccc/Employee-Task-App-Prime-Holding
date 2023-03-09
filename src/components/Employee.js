import React from 'react'

function Employee({employee}) {
  return (
    <div className="item">
    
    <h3>{employee.name}</h3>
    <h3>{employee.email}</h3>
    <h3>{employee.phoneNumber}</h3>
    <h3>{employee.dueDate}</h3>
    <h3>{employee.salary}</h3>

   
    </div>
  )
}

export default Employee
