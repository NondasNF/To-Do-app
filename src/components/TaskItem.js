import './TaskItem.css'
import {ReactComponent as TrashIcon} from '../assets/trash.svg'
import { useState } from 'react'

function TaskItem({name, trkey, time, deleteTask}){
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

export default TaskItem
