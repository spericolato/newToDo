import React from 'react'
import { Link } from 'react-router-dom'

const Taskpinned = () => {
  return (
    <div>
      <div>
        <h2>Task pinned</h2>
        <Link to="/painned-task">view all</Link>
      </div>
      <div className="task-painned"></div>
    </div>
  )
}

export default Taskpinned
