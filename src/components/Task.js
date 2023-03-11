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
    <div className="item large-item">
      {editing ? (
        <>
          <label>Task title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Assignee:</label>
          <input
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
          <label>Due date:</label>
          <input
            type="text"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button className="small-btn" onClick={handleUpdate}>
            Save
          </button>
        </>
      ) : (
        <>
          <h3>
            {title}{' '}
            <AiOutlineClose onClick={() => props.deleteTask(props.task.id)} />
          </h3>
          <h3>{description}</h3>
          <h3>{assignee}</h3>
          <h3>{dueDate}</h3>

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
