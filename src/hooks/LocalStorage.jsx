import React, { useState } from 'react'

export const LocalSignUp = () => {
  const [login, ] = useState(() => {
    return localStorage.getItem('user') ? localStorage.getItem('user') : false
  })
  return [login]
}
