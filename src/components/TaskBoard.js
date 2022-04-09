import './TaskBoard.css'

function Taskboard(props) {
  const { tasks } = props

  function handleChange(element) {
    let trElement = element.target.parentElement.parentElement
    if (trElement.style.textDecorationLine === 'line-through') {
      trElement.style.textDecorationLine = 'none'
      trElement.style.color = 'inherit'      
    } else {
      trElement.style.textDecorationLine = 'line-through'
      trElement.style.color = '#000000' //black
    }
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
            <tr className="task-table-row" key={index} >
              <td className="table-td">
                <input className="table-row-checkbox" type="checkbox" onClick={(element) => handleChange(element)}></input>
                {task.name}</td>
              <td>{task.time}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default Taskboard
