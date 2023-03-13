import React from 'react'
import InputSectionEmployee from '../InputSectionEmployee'
import Employees from '../Employees'

function EmployeePage(props) {
  return (
    <div>
      <InputSectionEmployee 
         onAddEmployee={props.onAddEmployee}
          getTopEmployees = {props.getTopEmployees}
          getNamesOfYoungerThan30={props.getNamesOfYoungerThan30}
      />

      <Employees 
          employees={props.employees}
          deleteEmployee={props.deleteEmployee}
          updateEmployee={props.updateEmployee}
          toggleReminderEmployee={props.toggleReminderEmployee}
          
      />
    
    </div>
  )
}

export default EmployeePage
