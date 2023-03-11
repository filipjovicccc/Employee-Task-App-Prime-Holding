import React from 'react';
import { useState } from 'react';

function NewEmployee({ onAddEmployee }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');

  const [birthDate, setBirthDate] = useState('');

  const [salary, setSalary] = useState('');

  const submitTask = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),
      name,
      email,
      phoneNumber,
      birthDate,
      salary,
    };

    onAddEmployee(newEmployee);

    setName('');
    setEmail('');
    setPhoneNumber('');
    setBirthDate('');
    setSalary('');
  };

  return (
    <form className="form" onSubmit={submitTask}>
      <div className="form-control">
        <label>Employee Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </div>
      <div className="form-control">
        <label>Employee Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="form-control">
        <label>Employee phone number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone number"
          required
        />
      </div>

      <div className="form-control">
        <label>Employee Birth date</label>
        <input
          type="text"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          placeholder="Birth date"
          required
        />
      </div>
      <div className="form-control">
        <label>Employee salary</label>
        <input
          type="date"
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
  );
}

export default NewEmployee;
