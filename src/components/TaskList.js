import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import '../stylesheets/TaskList.css';

function TaskList() {

  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = task => {
    if (task.text.trim()) {
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  // Delete task by ID
  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  // Toggle completed state
  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='main-tasklist'>
      <TaskForm onSubmit={addTask} />

      <div className='task-list-container'>
        {tasks.map(task =>
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        )}
      </div>
    </div>
  );
}

export default TaskList;
