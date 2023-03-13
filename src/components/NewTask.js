import React from 'react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from './UI/Modal';


function NewTask(props) {
 
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
   const [dueDate, setDueDate] = useState('');

   const isValidText = (text) => /^[a-zA-Z]+$/.test(text);

  const submitTask = (e) => {
    e.preventDefault();

    if (!isValidText(props.title)) {
      alert("Please enter a valid title (letters only)");
      return;
    }
    
    if (!isValidText(description)) {
      alert("Please enter a valid description (letters only)");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: props.title,
      description,
      assignee,
      dueDate,
    };

    props.onAddTask(newTask);

    props.setTitle('');
    setDescription('');
    setAssignee('');
    setDueDate('');
    props.closeAddButton()
  };

  return (
        <Modal  >
        <form className="form" onSubmit={submitTask}>
        <AiOutlineClose onClick={props.closeAddButton} />
          <div className="form-control">
            <label>Task title</label>
            <input
              type="text"
              value={props.title}
              name="title"
              onChange={(e) => props.setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          </div>
          <div className="form-control">
            <label>Task description</label>
            <input
              type="text"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
          </div>
    
          <div className="form-control">
            <label>Select from registered employees</label>
            <select name="assignee" onChange={(e) => setAssignee(e.target.value)}>
             {props.nameList.map((name) => (
           <option key={name} value={name}>
             {name}
            </option>
      ))}
    </select>
          </div>
          <div className="form-control">
            <label>Task due date</label>
            <input
              name="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder="Due date"
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
    
    export default NewTask;

