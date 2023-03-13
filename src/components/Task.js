import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
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
     <div className={`card ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => props.toggleReminderTasks(props.task.id)} >
     {editing ? (
        <>
        <form className='update-form'>
        <label className='custom-color'>Task title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className='custom-color'>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className='custom-color'>Assignee:</label>
          <input
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
          <label className='custom-color'>Due date:</label>
          <input
            type="text"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button className="small-btn" onClick={handleUpdate}>
            Save
          </button>
        </form>
         
        </>
      ) : (
        <>
        <div className="header-section">
        <div className='items-title'>
          <h3>{title}</h3>
         <AiOutlineClose onClick={() => props.deleteTask(props.task.id)} />
         </div>
         </div>
         <h3><span className="custom-color">Task description:</span> {description}</h3>
        <h3><span className="custom-color">Task assignee:</span> {assignee}</h3>
        <h3><span className="custom-color">Task Due date:</span> {dueDate}</h3>
      <div className="actions">
        <button className="small-btn" onClick={() => setEditing(true)}>
         Update
     </button>
  </div>
        </>
      )} 
     </div>
  );
}

export default Task;
