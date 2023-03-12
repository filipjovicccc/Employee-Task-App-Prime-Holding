import React from 'react'
import { useState } from 'react';
import NewEmployee from './NewEmployee';


function InputSectionEmployee(props) {
    const [showAddEmployee, setShowAddEmployee] = useState(false);

    const toggleAddButton = () => {
      setShowAddEmployee(!showAddEmployee);
    };
  return (
    
   <div className='input-wrapper'>
    <section className='input-section'>
     <h1>Employee Tracker</h1>
       <p>Employee tracker, it helps u organize your day</p>
       <div className='input-button'>
       <input className='input' placeholder='Type your new employee name here'></input>
       <button onClick={toggleAddButton} className="btn">
         Add Employee
       </button>
       </div>
       {showAddEmployee ? <NewEmployee onAddTask={props.onAddEmployee} /> : false}
     </section>
    </div>
  )
}

export default InputSectionEmployee