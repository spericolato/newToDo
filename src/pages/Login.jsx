import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { LocalSignUp } from '../hooks/LocalStorage'
const Login = () => {
  const navigate = useNavigate()
  const [login] = LocalSignUp()
  const handlclick = () => {
    localStorage.setItem('user', true)
    navigate('/')
  }
  if (login) return <Navigate to="/" />

  return (
    <div>
      THIS IS LOGIN
      <button onClick={handlclick}>login </button>
    </div>
  )
}

export default Login
