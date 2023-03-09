import React from 'react'

function Task({task}) {
  return (
    <div className='item'>
    <h3>{task.title}</h3>
    <h3>{task.description}</h3>
    <h3>{task.assignee}</h3>
    <h3>{task.dueDate}</h3>


  </div>
  )
}

export default Task
