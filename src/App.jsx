import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { IsAuthenticated } from './auth'

/* --------------import components ---------------- */
import { Sidebar } from './components'

import { Container, Row, Col } from 'react-bootstrap'
/* --------------import pages --------------------- */
import { Home, Login, Tasks, NotFound } from './pages'

const Layout = ({ children }) => {
  if (!IsAuthenticated()) {
    return <Navigate to="/login" />
  }

  return (
    <Container className="container-app">
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={6}>{children}</Col>
        <Col md={3}>Footer</Col>
      </Row>
    </Container>
  )
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/tasks"
          element={
            <Layout>
              <Tasks />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
