import React from 'react'
import { AiOutlineClose } from "react-icons/ai";


function Task({task}) {
  return (
    <div className='item'>
    <h3>{task.title} <AiOutlineClose /></h3>
    <h3>{task.description}</h3>
    <h3>{task.assignee}</h3>
    <h3>{task.dueDate}</h3>


  </div>
  )
}

export default Task
