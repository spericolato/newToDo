import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
      <Container>
        <div className="logo">
          <div className="logo-icon">+</div>
          <div className="logo-url">
            <Link to="/">taskly</Link>
          </div>
        </div>
        
      </Container>
    </aside>
  )
}

export default Sidebar
