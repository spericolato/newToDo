import React from 'react'
import { Link } from 'react-router-dom'
import Taskpinned from './Taskpinned'
const Sidebar = () => {
  return (
    <aside>
      <div className="logo">
        <div className="logo-icon">+</div>
        <div className="logo-url">
          <Link to="/">taskly</Link>
        </div>
      </div>
      <Taskpinned />
    </aside>
  )
}

export default Sidebar
