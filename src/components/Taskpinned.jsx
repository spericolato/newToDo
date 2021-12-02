import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addTaskPinned } from '../features/taskPinned'
const Taskpinned = () => {
  const pinned = useSelector((state) => state.taskpinned.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <h2>Task pinned</h2>
        <Link to="/painned-task">view all</Link>
      </div>
      <div className="task-painned">
        {pinned.map((val, index) => {
          if (index === 0 || index === 1)
            return (
              <div key={index}>
                <h2>{val.title}</h2>
                <span>{val.date}</span>
                <p>{val.descreption}</p>
              </div>
            )
        })}
      </div>
      <div className="add-pinned-todo">
        <button
          onClick={(e) =>
            dispatch(
              addTaskPinned({
                id: 1,
                title: 'test',
                description: 'haii',
                done: 'false',
                date: new Date().toString(),
              }),
            )
          }
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Taskpinned
