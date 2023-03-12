import React from 'react'
import InputSectionTasks from '../InputSectionTasks'
import Tasks from '../Tasks'

function TaskPage(props) {
   
return (
    <div>
      <InputSectionTasks 
        employees={props.employees}
      />
      <Tasks   
          tasks={props.tasks}
          employees={props.employees}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}/>
    </div>
  )
}

export default TaskPage
