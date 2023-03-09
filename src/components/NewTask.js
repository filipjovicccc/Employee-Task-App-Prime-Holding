import React from 'react'
import { useState } from 'react'

function NewTask({onAddTask}) {

  const [title, setTitle] = useState("")

  const [description, setDescription] = useState("")

  const [assignee, setAssignee] = useState("")

  const [dueDate, setDueDate] = useState("")

  const submitTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      assignee,
      dueDate
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setAssignee("");
    setDueDate("");
  };

 

  return (
    <form onSubmit={submitTask}>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
    <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} placeholder="Assignee" required />
    <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder="Due date" required />
    <button type="submit">Create task</button>
  </form>
  )
}

export default NewTask
