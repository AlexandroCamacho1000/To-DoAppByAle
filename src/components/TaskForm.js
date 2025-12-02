import React, { useState } from 'react';
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);
    //console.log(newTask)
  }

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        className='task-input'
        type='text'
        placeholder='Enter a task'
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>Add Task</button>
    </form>
  )
}

export default TaskForm;
