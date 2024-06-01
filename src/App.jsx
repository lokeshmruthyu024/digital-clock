import React from 'react'
import './App.css'
import Heading from './components/Heading'
import Clock from './components/Clock'
import ClockTitle from './components/ClockTitle'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <center className='container'>
      <Heading />
      <ClockTitle />
      <Clock />
    </center>
  )
}

export default App
