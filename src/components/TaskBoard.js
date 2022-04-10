import './TaskBoard.css'
import {ReactComponent as TrashIcon} from '../assets/trash.svg'
import { useState } from 'react'

function Item({name, trkey, time, deleteTask}){
  const [isChecked, setIsChecked] = useState(false)
  return (
    <tr style={{  
      color: isChecked? '#636363' : '#fff',
      textDecorationLine: isChecked? 'line-through' : 'none',
      }} className="task-table-row">
      <td className="table-td">
        <input className="table-row-checkbox" type="checkbox" onClick={() => setIsChecked(ele=>(!ele))}></input>
        {name}</td>
      <td className="table-td">
        {time}
        <TrashIcon className="table-row-delete" onClick={() => deleteTask(trkey)}/>
      </td>
    </tr>
  )
}

function Taskboard(props) {
  const { tasks, setTasks } = props

  function deleteTask(index){
    setTasks(tasks=>tasks.filter((task, i) => i !== index))
  }

  return (
    <><h2>Tasks:</h2>
    <table className="task-table">
      <thead className="task-table-head">
        <tr className="table-head">
          <th>Task</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => {
          return (
            <Item name={task.name} time={task.time} key={index} trkey={index} deleteTask={deleteTask}/>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default Taskboard
