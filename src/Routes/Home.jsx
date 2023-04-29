import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import NewUser from '../Components/NewUser'

export default function Home() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/GroupRoom' element={<NewUser />} />
      </Routes>
    </div>
  )
}
