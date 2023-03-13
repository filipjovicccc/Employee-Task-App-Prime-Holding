import { useState, useEffect } from 'react';
import { employeeData } from './components/data';
import { tasksData } from './components/data';
import {
  addToStorage,
  deleteStorage,
  getStorage,
  updateStorage,
  setStorage,
} from './service/storageService';
import Header from './components/UI/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskPage from './components/pages/TaskPage';
import EmployeePage from './components/pages/EmployeePage';

function App() {
  const [employees, setEmployee] = useState(employeeData);
  const [tasks, setTasks] = useState(tasksData);

  setStorage('tasks', tasks);
  useEffect(() => {
    const storedTasks = getStorage('tasks');

    if (storedTasks) {
      setTasks(storedTasks);
    } else {
      console.log('No tasks found in local storage.');
    }
  }, []);

  const addTask = (newTask) => {
    const createTasks = addToStorage('tasks', newTask);
    setTasks(createTasks);
  };

  const deleteTask = (id) => {
    const updateTasks = deleteStorage(id, 'tasks');
    setTasks(updateTasks);
  };

  const updateTask = (id, updatedTask) => {
    const updatingTasks = updateStorage(id, updatedTask, 'tasks');
    setTasks(updatingTasks);
  };

  setStorage('employees', employees);
  useEffect(() => {
    const storedEmployees = getStorage('employees');

    if (storedEmployees) {
      setEmployee(storedEmployees);
    } else {
      console.log('No employees found in local storage.');
    }
  }, []);

  const addEmployee = (newEmployee) => {
    const createEmployee = addToStorage('employees', newEmployee);
    setEmployee(createEmployee);
  };

  const deleteEmployee = (id) => {
    const updateEmployees = deleteStorage(id, 'employees');
    setEmployee(updateEmployees);
  };

  const updateEmployee = (id, updatedEmployee) => {
    const updatingEmployee = updateStorage(id, updatedEmployee, 'employees');
    setEmployee(updatingEmployee);
  };

  const getTopEmployees = () => {
    const pastMonth = new Date();
    pastMonth.setMonth(pastMonth.getMonth() - 1);

    const employeeTaskCounts = employees.map((employee) => {
      const tasksCompleted = tasks.filter(
        (task) => task.assignee === employee.name
      ).length;
      return { employeeName: employee.name, tasksCompleted, employeeId: employee.id};
    });

    employeeTaskCounts.sort((a, b) => b.tasksCompleted - a.tasksCompleted);

    return employeeTaskCounts.slice(0, 5);
  };
 

  function getNamesOfYoungerThan30() {
    const names = [];
  
    employees.forEach((person) => {
      const birthYear = parseInt(person.birthDate.split('/')[2]);
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;
      if (age < 30) {
        names.push(person.name);
      }
    });
  
    return names;
  }

  const toggleReminderTasks = (id) => {
   setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  const toggleReminderEmployee = (id) => {
    setEmployee(employees.map((employee) => employee.id === id ? {...employee, reminder: !employee.reminder} : employee))
   }

  return (
    <div >
    
     <Router>
   <Header />

     <Routes>
      <Route path="/" element={
      <TaskPage 
          tasks={tasks}
          employees={employees}
          onAddTask={addTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleReminderTasks={toggleReminderTasks}
          getTopEmployees = {getTopEmployees}
          getNamesOfYoungerThan30={getNamesOfYoungerThan30}

          />
          
          }/>
      
      <Route path="/employee" element={
      <EmployeePage 
        employees={employees}
        onAddEmployee={addEmployee}
        deleteEmployee={deleteEmployee}
        updateEmployee={updateEmployee}
        toggleReminderEmployee={toggleReminderEmployee}
        getTopEmployees = {getTopEmployees}
        getNamesOfYoungerThan30={getNamesOfYoungerThan30}
             />}/>
   
     </Routes>
   </Router>

    
    </div>
  );
}

export default App;
