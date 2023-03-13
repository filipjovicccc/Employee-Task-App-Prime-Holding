import Task from './Task';
const Tasks = (props) => {

return (
 
   <div className="container-items">
  {props.tasks.map((task) => (
    <Task
     className="Item"
      key={task.id}
      task={task}
      deleteTask={props.deleteTask}
      updateTask={props.updateTask}
      reminder={props.reminder}
      toggleReminderTasks={props.toggleReminderTasks}

    />
  ))}
</div>
   
  );
};

export default Tasks;
