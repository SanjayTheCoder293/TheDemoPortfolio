import React, { useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'

export default function App() {
  const[tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(task);
  }
  return (
    <div>
      <header>
        <h1>The taskbuddy </h1>
        <p><i>Your friendly task manager</i></p>
      </header>
      <Taskform addTask = {addTask} />
      <Tasklist />
      <Progresstracker />
      <button>clear all tasks</button>
    </div>
  )
}
