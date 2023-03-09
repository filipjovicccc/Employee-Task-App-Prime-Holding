import './App.css';
import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import Employees from './components/Employees';
import NewTask from './components/NewTask';

function App() {

const [employees, setEmployee] = useState([
  {
   id: 1,
   name: "John",
   email: "john@gmail.com",
   phoneNumber: 61092380092,
   birthDate: 1101990, 
   salary: 1200

  },

  {
    id: 2,
    name: "Mark",
    email: "mark@gmail.com",
    phoneNumber: 67512234134,
    birthDate: 11011989,
    salary: 2000

  },
  {
    id: 3,
    name: "Maria",
    email: "maria@gmail.com",
    phoneNumber: 689102830912,
    birthDate: 1101995,
    salary: 3000

  },

])


const [tasks, setTasks] = useState([
  {
   id: 1,
   title: "Papers",
   description: "Handelging documentation",
   assignee: "Maria",
   dueDate:  11062023

  },

  {
    id: 2,
   title: "Maintenance",
   description: "In proces",
   assignee: "John",
   dueDate:  11022023

  },
  {
    id: 3,
    title: "Work evaluation",
    description: "Assesment of employes",
    assignee: "John",
    dueDate:  2072023

  },
  
])

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

  return (
    <div className="App">
      <h1 className='text-center'>Employee task app</h1>
      
     <div className='wrapper'>
      <NewTask onAddTask = {addTask}/>
      <Tasks tasks={tasks}/>
      <Employees employees={employees}/>
     </div>

    </div>
  );
}

export default App;
