import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';


function Task(props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.task.title);
  const [description, setDescription] = useState(props.task.description);
  const [assignee, setAssignee] = useState(props.task.assignee);
  const [dueDate, setDueDate] = useState(props.task.dueDate);

  const handleUpdate = () => {
    const updatedTask = {
      ...props.task,
      title,
      description,
      assignee,
      dueDate,
    };
    props.updateTask(updatedTask);
    setEditing(false);
  };

  return (
    <div className='item'>
      {editing ? (
        <>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
          <input type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{title} <AiOutlineClose onClick={() => props.deleteTask(props.task.id)}/></h3>
          <h3>{description}</h3>
          <h3>{assignee}</h3>
          <h3>{dueDate}</h3>
          <button onClick={() => setEditing(true)}>Update</button>
        </>
      )}
    </div>
  );
}

export default Task;