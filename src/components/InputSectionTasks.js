import React from 'react'
import { useState } from 'react';
import NewTask from './NewTask';
import Statistic from './Statistic';

function InputSectionTasks(props) {
    const [showAddTask, setShowAddTask] = useState(false);
      const [title, setTitle] = useState('');
    
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
    <h1>Employee and Task Tracker App</h1>
      <h4>Task Tracker Page</h4>
       <p>Employee Task Tracker, it helps u organize task of your employees</p>
       <div className='input-button'>
       <input onChange={(e) => setTitle(e.target.value)} className='input' placeholder='Type your new task title'></input>
       <button onClick={toggleAddButton} className="btn">
         Add Task
       </button>
       </div>
      
       {showAddTask ? <NewTask nameList={nameList} setTitle={setTitle} title={title} showAddTask={showAddTask}  closeAddButton={closeAddButton}  onAddTask={props.onAddTask} /> : false}
        <Statistic getNamesOfYoungerThan30={props.getNamesOfYoungerThan30}  getTopEmployees = {props.getTopEmployees}/>
     </section>
    </div>
  )
}

export default InputSectionTasks
