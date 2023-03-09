import React from 'react'
import { AiOutlineClose } from "react-icons/ai";


function Employee({employee}) {
  return (
    <div className="item">
    
    <h3>{employee.email} <AiOutlineClose /></h3>
    <h3>{employee.phoneNumber}</h3>
    <h3>{employee.dueDate}</h3>
    <h3>{employee.salary}</h3>

   
    </div>
  )
}

export default Employee
