import Task from "./Task"


const Tasks = ({tasks}) => {

  return(
    <div className="container">
      <h1>Task Tracker</h1>
     <div>
       {tasks.map((task) => (
        <Task key={task.id} task={task}/>
      ))}

     </div>
      <button className="btn">Add</button>

    </div>
  )


}

export default Tasks