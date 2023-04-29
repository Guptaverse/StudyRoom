import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage'

export default function Home() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        {/* <Route exact path='/GroupRoom' element={< />} /> */}
      </Routes>
    </div>
  )
}
