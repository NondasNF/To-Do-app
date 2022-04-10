import './App.css'
import { useState } from 'react'
import TaskBoard from './components/TaskBoard.js'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskName, setTaskName] = useState('')
  const [taskTime, setTaskTime] = useState('00:00')

  function addTask() {
    if (taskName && taskTime !== '') {
      setTasks([...tasks, { name: taskName, time: taskTime }])
      setTaskName('')
      setTaskTime('00:00')
    }
  }

  function handleChangeTaskName(taskName) {
    setTaskName(taskName)
  }

  function handleChangeTime(time) {
    setTaskTime(time)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>To-Do List</h1>
      </header>
      <main className="app-main">
        <div className="app-task-form">
          <input className="app-task-text" type="text" placeholder="Task name" value={taskName} onChange={(element) => handleChangeTaskName(element.target.value)} />
          <input className="app-task-time" type="time" placeholder="00:00" value={taskTime} onChange={(element) => handleChangeTime(element.target.value)} />
          <button className="app-task-button" type="button" onClick={addTask}>Add</button>
        </div>
        <div className="app-task-board">
          <TaskBoard tasks={tasks} setTasks={setTasks} />
        </div>
      </main>
    </div>
  )
}

export default App
