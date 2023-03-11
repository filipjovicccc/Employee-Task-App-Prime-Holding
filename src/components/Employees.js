import React from 'react';
import Employee from './Employee';
import NewEmployee from './NewEmployee';
import { useState } from 'react';

function Employees(props) {
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  const toggleAddButton = () => {
    setShowAddEmployee(!showAddEmployee);
  };

  return (
    <div className="container">
      <h1>Employee Tracker</h1>
      <button onClick={toggleAddButton} className="btn">
        Add New
      </button>

      {showAddEmployee ? (
        <NewEmployee onAddEmployee={props.onAddEmployee} />
      ) : (
        false
      )}

      <div>
        {props.employees.map((employee) => (
          <Employee
            key={employee.id}
            employee={employee}
            deleteEmployee={props.deleteEmployee}
            updateEmployee={props.updateEmployee}
          />
        ))}
      </div>
    </div>
  );
}

export default Employees;
