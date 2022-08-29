import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Regestration from './pages/Registration'
import Home from './pages/Home'
import Support from './components/Support'
import SupportConnect from './components/SupportConnect'
import Premium from './components/Premium'
import Pay from './components/Pay'
import MusicsList from './components/MusicsList'
import Player from './components/Player'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regestration" element={<Regestration />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support-connect" element={<SupportConnect />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/pay-premium" element={<Pay />} />
        <Route path="/music-list" element={<MusicsList />} />
        <Route path="/music-player" element={<Player />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
