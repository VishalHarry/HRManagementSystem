import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Components/Login'
import Dasboard from './Components/Employee/Dasboard'

function App() {
  return (
    <div>
      {/* <Outlet/> */}
      {/* <Login/> */}
      <Dasboard/>
    </div>
  )
}

export default App
