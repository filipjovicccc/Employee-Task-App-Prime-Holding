import React from 'react'
import InputSectionEmployee from '../InputSectionEmployee'
import Employees from '../Employees'

function EmployeePage(props) {
  return (
    <div>
      <InputSectionEmployee onAddEmployee={props.onAddEmployee}/>

      <Employees 
          employees={props.employees}
          deleteEmployee={props.deleteEmployee}
          updateEmployee={props.updateEmployee}
      />
    
    </div>
  )
}

export default EmployeePage
