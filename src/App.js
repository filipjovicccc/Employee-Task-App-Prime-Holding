import './App.css';
import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import Employees from './components/Employees';
import { employeeData } from './components/data';
import { tasksData } from './components/data';

function App() {

const [employees, setEmployee] = useState(employeeData)


const [tasks, setTasks] = useState(tasksData)

localStorage.setItem('tasks', JSON.stringify(tasks))
useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));

  if (storedTasks) {
    setTasks(storedTasks);
  } else {
  
    console.log("No tasks found in local storage.");
  }
}, []);

const addTask = (newTask) => {

  const createTasks = [...tasks, newTask];
  setTasks(createTasks)

  localStorage.setItem('tasks', JSON.stringify(createTasks))

}

const deleteTask =(id) =>{
  
  const updateTasks = tasks.filter(task => task.id !== id);

  setTasks(updateTasks)

  localStorage.setItem('tasks', JSON.stringify(updateTasks))

}

const updateTask = (id, updatedTask) => {
  const updatingTasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, ...updatedTask };
    }
    return task;
  });

  setTasks(updatingTasks);
  localStorage.setItem('tasks', JSON.stringify(updatingTasks));
};



localStorage.setItem('employees', JSON.stringify(employees))
useEffect(() => {
  const storedEmployees = JSON.parse(localStorage.getItem('employees'));

  if (storedEmployees) {
    setTasks(storedEmployees);
  } else {
  
    console.log("No employees found in local storage.");
  }
}, []);

const addEmployee = (newEmployee) => {

  const createEmployee = [...employees, newEmployee];
  setEmployee(createEmployee)

  localStorage.setItem('employees', JSON.stringify(createEmployee))

}

const deleteEmployee =(id) =>{
  
  const updateEmployees = employees.filter(task => task.id !== id);

  setEmployee(updateEmployees)

  localStorage.setItem('employees', JSON.stringify(updateEmployees))

}

const updateEmployee= (id, updatedEmploye) => {
  const updatingEmployee = employees.map(employee => {
    if (employee.id === id) {
      return { ...employee, ...updatedEmploye };
    }
    return employee;
  });

  setEmployee(updatingEmployee);
  localStorage.setItem('tasks', JSON.stringify(updatingEmployee));

}

const getTopEmployees = () => {
  const pastMonth = new Date();
  pastMonth.setMonth(pastMonth.getMonth() - 1);

  const employeeTaskCounts = employees.map(employee => {
    const tasksCompleted = tasks.filter(task => task.assignee === employee.name).length;
    return { employeeName: employee.name, tasksCompleted}
  });

  employeeTaskCounts.sort((a,b) => b.tasksCompleted - a.tasksCompleted);

  return employeeTaskCounts.slice(0, 5)

}
const topEmployees = getTopEmployees();
topEmployees.forEach(employee => console.log(`${employee.employeeName}: ${employee.tasksCompleted} tasks completed`));
  
return (

    <div className="App">
      <h1 className='text-center'>Employee task app</h1>
      
     <div className='wrapper'>
    
      <Tasks tasks={tasks} onAddTask={addTask} deleteTask={deleteTask} updateTask={updateTask}/>
      <Employees
       employees={employees}
       onAddEmployee={addEmployee} 
       deleteEmployee={deleteEmployee}
       updateEmployee={updateEmployee}

       />

     </div>

    </div>
  );
}

export default App;