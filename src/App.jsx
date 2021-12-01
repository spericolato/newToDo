import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { IsAuthenticated } from './auth'
/* --------------import components ---------------- */
import { Sidebar } from './components'

import { Container, Row, Col } from 'react-bootstrap'
/* --------------import pages --------------------- */
import { Home, Login, Todos, NotFound } from './pages'

/* */
import { Provider } from 'react-redux'
import { store } from './redux/store'

const Layout = ({ children }) => {
  if (!IsAuthenticated()) {
    return <Navigate to="/login" />
  }

  return (
    <Container>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>{children}</Col>
        <Col>Footer</Col>
      </Row>
    </Container>
  )
}

const App = () => {
  return (
    <>
      <Routes>
        <Provider store={store}>
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
            path="/todos"
            element={
              <Layout>
                <Todos />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Provider>
      </Routes>
    </>
  )
}

export default App
