import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'

function UserRouter() {
  return (
    <Routes>
      <Route index='true' path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default UserRouter
