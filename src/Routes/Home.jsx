import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import Dashboard from '../Components/Dashboard'

export default function Home() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route exact path='/GroupRoom' element={< />} /> */}
      </Routes>
    </div>
  )
}
