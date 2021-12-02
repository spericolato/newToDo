import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { IsAuthenticated } from '../auth'
const Login = () => {
  const navigate = useNavigate()
  const handlclick = () => {
    localStorage.setItem('login', true)
    navigate('/')
  }
  if (IsAuthenticated()) return <Navigate to="/" />

  return (
    <div>
      THIS IS LOGIN
      <button onClick={handlclick}>login </button>
    </div>
  )
}

export default Login
