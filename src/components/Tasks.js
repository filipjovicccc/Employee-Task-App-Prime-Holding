import Task from './Task';
import NewTask from './NewTask';
import { useState } from 'react';

const Tasks = (props) => {
  const [showAddTask, setShowAddTask] = useState(false);

  const toggleAddButton = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <button onClick={toggleAddButton} className="btn">
        Add New
      </button>

      {showAddTask ? <NewTask onAddTask={props.onAddTask} /> : false}

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
