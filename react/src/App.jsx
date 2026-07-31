import React from 'react'
import Student from './components/Student'

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Student />
      <Student />
      <Student />
    </div>
  )
}

export default App

