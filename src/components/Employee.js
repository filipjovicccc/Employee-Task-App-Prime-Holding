import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';


function Employee(props) {
  const [editingEmployee, setEditingEmployee] = useState(false);
  const [name, setName] = useState(props.employee.name);
  const [email, setEmail] = useState(props.employee.email);
  const [phoneNumber, setPhoneNumber] = useState(props.employee.phoneNumber);
  const [birthDate, setBirthDate] = useState(props.employee.birthDate);
  const [salary, setSalary] = useState(props.employee.salary);

  const handleUpdate = () => {
    const updatedEmployee = {
      ...props.employee,
      name,
      email,
      phoneNumber,
      birthDate,
      salary,
    };
    props.updateEmployee(updatedEmployee);
    setEditingEmployee(false);
  };

  return (
    <div  className={`card ${props.employee.reminder ? 'reminder' : ''}`} onDoubleClick={() => props.toggleReminderEmployee(props.employee.id)} >
      {editingEmployee ? (
        <>
        <form className='update-form'>
        <label className='custom-color'>Employee Name </label>
         <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
         <label className='custom-color'>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='custom-color'> Phone Number: </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label className='custom-color'>Birth Date: </label>
          <input
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <label className='custom-color'>Salary: </label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
         <button
            className="small-btn"
            onClick={handleUpdate}
          >
            Save
          </button>

        </form>
         
        </>
      ) : (
        <>
        <div className="header-section">
        <div className='items-title'>
          <h3>{name}</h3>
         <AiOutlineClose onClick={() => props.deleteEmployee(props.employee.id)} />
         </div>
         </div>
         <h3><span className="custom-color">Employee email:</span> {email}</h3>
        <h3><span className="custom-color">Employee phone number:</span> {phoneNumber}</h3>
        <h3><span className="custom-color">Employee birth date:</span> {birthDate}</h3>
        <h3><span className="custom-color">Employee salary:</span> {salary}$</h3>
      <div className="actions">
        <button className="small-btn" onClick={() => setEditingEmployee(true)}>
         Update
     </button>
  </div>
        </>
      )}
    </div>
  );
}

export default Employee;
