import React from 'react'
import { useState } from 'react';
import NewTask from './NewTask';

function InputSection(props) {
    const [showAddTask, setShowAddTask] = useState(false);

    const toggleAddButton = () => {
      setShowAddTask(!showAddTask);
    };
  return (
    <div className='input-wrapper'>
    <section className='input-section'>
      <h1>Task Tracker</h1>
      <p>Task tracker, it helps u track your tasks</p>
      <input className='input' placeholder='Type your new task title'></input>
      <button onClick={toggleAddButton} className="btn">
        Add New
      </button>
      {showAddTask ? <NewTask onAddTask={props.onAddTask} /> : false}
    </section>
    </div>
  )
}

export default InputSection
