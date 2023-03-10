import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';


function Task(props) {

  const [editingEmployee, setEditingEmployee] = useState(false);
  const [name, setName] = useState(props.employee.name);
  const [email, setEmail] = useState(props.employee.email);
  const [phoneNumber, setPhoneNumber] = useState(props.employee.phoneNumber);
  const [ birthDate, setBirthDate] = useState(props.employee.birthDate);
  const [salary, setSalary] = useState(props.employee.salary);

  const handleUpdate = () => {
    const updatedEmployee = {
      ...props.employee,
      name,
      email,
      phoneNumber,
      birthDate:new Date(Date.parse(birthDate)),
      salary,
    };
    props.updateEmployee(updatedEmployee);
    setEditingEmployee(false);
  };

  return (
    <div className='item'>
      {editingEmployee ? (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <input type="text" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
         
          <button style={{backgroundColor: "black"}} className='small-btn' onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{name} <AiOutlineClose onClick={() => props.deleteEmployee(props.employee.id)}/></h3>
          <h3>{email}</h3>
          <h3>{phoneNumber}</h3>
          <h3>{birthDate}</h3>
          <h3>{salary}</h3>
          <button className='small-btn' onClick={() => setEditingEmployee(true)}>Update</button>
        </>
      )}
    </div>
  );
}

export default Task;
