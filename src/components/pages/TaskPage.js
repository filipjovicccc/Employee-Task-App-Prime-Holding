import React from 'react'
import InputSectionTasks from '../InputSectionTasks'
import Tasks from '../Tasks'

function TaskPage(props) {
   
return (
    <div>
      <InputSectionTasks 
        employees={props.employees}
        getTopEmployees = {props.getTopEmployees}
        getNamesOfYoungerThan30={props.getNamesOfYoungerThan30}
        onAddTask={props.onAddTask}
        
      />
      <Tasks   
          tasks={props.tasks}
          employees={props.employees}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
          toggleReminderTasks={props.toggleReminderTasks}
          
          />

    </div>
  )
}

export default TaskPage
