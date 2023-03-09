import './App.css';
import { useState } from 'react';
import Tasks from './components/Tasks';
import Employees from './components/Employees';

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


  return (
    <div className="App">
      <h1 className='text-center'>Employee task app</h1>
      
     <div className='wrapper'>

      <Tasks tasks={tasks}/>
      <Employees employees={employees}/>
     </div>

    </div>
  );
}

export default App;
