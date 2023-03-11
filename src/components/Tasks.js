import Task from './Task';
import NewTask from './NewTask';
import { useState } from 'react';

const Tasks = (props) => {
 

  return (
    <div className="container">
      <h1>Task Tracker</h1>
    
      <div>
        {props.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={props.deleteTask}
            updateTask={props.updateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
