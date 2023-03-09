import Task from "./Task"


const Tasks = ({tasks}) => {

  return(
    <div className="container">
      <h1>Task Tracker</h1>
      <button className="btn">Add</button>
     <div>
       {tasks.map((task) => (
        <Task key={task.id} task={task}/>
      ))}

     </div>

    </div>
  )


}

export default Tasks