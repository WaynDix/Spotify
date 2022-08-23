import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Regestration from './pagess/Regestration'
import Home from './pagess/Home'
const MainRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/regestration' element={<Regestration/>}/>
    </Routes>

    </div>
  )
}

export default MainRoutes