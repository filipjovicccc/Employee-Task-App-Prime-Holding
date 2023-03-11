import React from 'react'
import InputSection from '../InputSection'
import Tasks from '../Tasks'

function TaskPage(props) {
   
    console.log(props)
  return (
    <div>
      <InputSection onAddTask={props.onAddTask}/>
      <Tasks   
          tasks={props.tasks}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}/>
    </div>
  )
}

export default TaskPage
