import React from 'react';
import Employee from './Employee';

function Employees(props) {

return (
   
     <div className='container-items'>
        {props.employees.map((employee) => (
          <Employee
            key={employee.id}
            employee={employee}
            deleteEmployee={props.deleteEmployee}
            updateEmployee={props.updateEmployee}
            toggleReminderEmployee={props.toggleReminderEmployee}
            className="Item"
          />
        ))}
      </div>

  );
}

export default Employees;
