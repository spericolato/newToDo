import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const signout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div>
      this is Home
      <br />
      <button onClick={signout}>sign out</button>
    </div>
  )
}

export default Home
