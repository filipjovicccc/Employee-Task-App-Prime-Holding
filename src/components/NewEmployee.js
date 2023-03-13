import React from 'react';
import { useState } from 'react';
import Modal from './UI/Modal';
import { AiOutlineClose } from 'react-icons/ai';

function NewEmployee(props) {

  const [email, setEmail] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');

  const [birthDate, setBirthDate] = useState('');

  const [salary, setSalary] = useState('');

  const submitTask = (e) => {
    e.preventDefault();

    if (!isValidName(props.name)) {
      alert("Please enter a valid name (letters only)");
      return;
    }
    
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    
    if (!isValidPhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number (numbers only)");
      return;
    }
    
    if (!isValidSalary(salary)) {
      alert("Please enter a valid salary (numbers only)");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: props.name,
      email,
      phoneNumber,
      birthDate,
      salary,
    };

    props.onAddEmployee(newEmployee);

    props.setName('');
    setEmail('');
    setPhoneNumber('');
    setBirthDate('');
    setSalary('');
    props.closeAddButton()
  };
 const isValidName = (name) => /^[a-zA-Z]+$/.test(name);
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhoneNumber = (phoneNumber) => /^\d+$/.test(phoneNumber);
const isValidSalary = (salary) => /^\d+$/.test(salary);

const iconStyle= {fontSize: "1.6em"}
  return (
    <Modal>
    <form className='form' onSubmit={submitTask} >
     <AiOutlineClose style={iconStyle} onClick={props.closeAddButton} onSubmit={submitTask} />
      <div className="form-control">
        <label>Employee Name:</label>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
          placeholder="Name"
          required
        />
      </div>
      <div className="form-control">
        <label>Employee Email:</label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="form-control">
        <label>Employee phone number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone number"
          required
        />
      </div>

      <div className="form-control">
        <label>Employee Birth date:</label>
        <input
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          placeholder="Birth date"
          required
        />
      </div>
      <div className="form-control">
        <label>Employee salary:</label>
        <input
          type="text"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Employee salary"
          required
        />
      </div>

      <button
        style={{ backgroundColor: 'black' }}
        className="btn"
        type="submit"
      >
        Create task
      </button>
      </form>
    </Modal>
  );
}

export default NewEmployee;
