import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Regestration from './pages/Registration'
import Home from './pages/Home'
import Support from './components/Support'
import SupportConnect from './components/SupportConnect'
import Premium from './components/Premium'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regestration" element={<Regestration />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support-connect" element={<SupportConnect />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
