import React from 'react'
import { useState } from 'react';
import NewEmployee from './NewEmployee';
import Statistic from './Statistic';


function InputSectionEmployee(props) {
    const [showAddEmployee, setShowAddEmployee] = useState(false);
    const [name, setName] = useState('');
 
    const toggleAddButton = () => {
        setShowAddEmployee(true);
      };
      const closeAddButton = () => {
        setShowAddEmployee(false)
      }
  return (
    
   <div className='input-wrapper'>
    <section className='input-section'>
     <h1>Employee and Task Tracker App</h1>
     <h4>Employee Tracker Page</h4>
     <p>Employee Task Tracker, it helps u organize task of your employees</p>
       <div className='input-button'>
       <input onChange={(e) => setName(e.target.value)} className='input' placeholder='Type your new employee name here'></input>
       <button onClick={toggleAddButton} className="btn">
         Add Employee
       </button>
       </div>
      {showAddEmployee ? <NewEmployee name={name} setName={setName} closeAddButton={closeAddButton}   onAddEmployee={props.onAddEmployee} /> : false}
    <Statistic   getNamesOfYoungerThan30={props.getNamesOfYoungerThan30}  getTopEmployees = {props.getTopEmployees}/>
     </section>
    </div>
  )
}

export default InputSectionEmployee