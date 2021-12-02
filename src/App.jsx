import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LocalSignUp } from './hooks/LocalStorage'
import { Home, Login, Todos, NotFound } from './pages'

const RequireAuth = ({ children }) => {
  const [login] = LocalSignUp()
  if (!login) {
    return <Navigate to="/login" />
  }

  return children
}

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/todos"
          element={
            <RequireAuth>
              <Todos />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
