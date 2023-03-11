import React from 'react';
import { useState } from 'react';
import Modal from './UI/Modal';

function NewTask({ onAddTask }) {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [assignee, setAssignee] = useState('');

  const [dueDate, setDueDate] = useState('');

  const submitTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      assignee,
      dueDate,
    };

    onAddTask(newTask);

    setTitle('');
    setDescription('');
    setAssignee('');
    setDueDate('');
  };

  return (
    <Modal>
    <form className="form" onSubmit={submitTask}>
      <div className="form-control">
        <label>Task title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
      </div>
      <div className="form-control">
        <label>Task description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </div>

      <div className="form-control">
        <label>Task assignee</label>
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder="Assignee"
          required
        />
      </div>
      <div className="form-control">
        <label>Task due date</label>
        <input
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
