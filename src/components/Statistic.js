import React from 'react'

function Statistic(props) {
    const topEmployees = props.getTopEmployees();
    const employeesYoungerThan30 = props.getNamesOfYoungerThan30()
  return (
    <div className='statistic'>
      <h4>Statistic:</h4>
      <h4>This are 5 employees that completed largest number of tasks in past month:</h4>
       {topEmployees.map((employee) => (
      <div key={employee.employeeId}>
        {employee.employeeName}: {employee.tasksCompleted} tasks completed
      </div>
      
    ))}
        <h4>This is a list of employees that are younger than 30, in employee task:</h4>
    {employeesYoungerThan30.map((employee, index) => (
        <div key={`${employee.name}-${index}`}>
         {employee}
    
        </div>
    ))}
    </div>
  )
}

export default Statistic
