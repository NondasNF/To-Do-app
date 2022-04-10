import './TaskBoard.css'

function Taskboard(props) {
  const { tasks } = props

  function handleChange(element) {
    let trElement = element.target.parentElement.parentElement
    const cssStyle = {
      colorGrey: '#636363',
      colorDefault: 'inherit', 
      textDecorationLineNone: 'none',
      textDecorationLineLT: 'line-through',
      }
    if (trElement.style.textDecorationLine === 'line-through') {
      trElement.style.textDecorationLine = cssStyle.textDecorationLineNone
      trElement.style.color = cssStyle.colorDefault      
    } else {
      trElement.style.textDecorationLine = cssStyle.textDecorationLineLT
      trElement.style.color = cssStyle.colorGrey
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
