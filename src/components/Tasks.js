import Task from './Task';
const Tasks = (props) => {

return (
 
   <div className="container-items">
  {props.tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      deleteTask={props.deleteTask}
      updateTask={props.updateTask}
      className="Item"
    />
  ))}
</div>
   
  );
};

export default Tasks;
