import React from 'react'
import { useState } from 'react';
import NewTask from './NewTask';

function InputSectionTasks(props) {
    const [showAddTask, setShowAddTask] = useState(false);
 

    const toggleAddButton = () => {
      setShowAddTask(true);
    };
    const closeAddButton = () => {
      setShowAddTask(false)
    }

    const nameList = props.employees.map((employee) => employee.name);
  return (
    
   <div className='input-wrapper'>
    <section className='input-section'>
     <h1>Task Tracker</h1>
       <p>Task tracker, it helps u organize your day</p>
       <div className='input-button'>
       <input className='input' placeholder='Type your new task title'></input>
       <button onClick={toggleAddButton} className="btn">
         Add Task
       </button>
       </div>
       {showAddTask ? <NewTask closeAddButton={closeAddButton} nameList={nameList} onAddTask={props.onAddTask} /> : false}
     </section>
    </div>
  )
}

export default InputSectionTasks
