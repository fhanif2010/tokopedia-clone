import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Routers from './routers/routers'

function App() {
  return (
    <>
    <Router>
      <Routers/>
    </Router>
    </>
  )
}

export default App
