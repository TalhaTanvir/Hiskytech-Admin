import React from 'react'
import { Routes, Route} from 'react-router'
import Home from './layouts/Home'
import Dashboard from './pages/Dashboard'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Prices from './pages/Prices'
import Team from './pages/Team'
import Videos from './pages/Videos'
import News from './pages/News'
import Messages from './pages/Messages'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home><Dashboard /></Home>} />
        <Route path="/services" element={<Home><Services /></Home>} />
        <Route path="/projects" element={<Home><Projects /></Home>} />
        <Route path="/prices" element={<Home><Prices /></Home>} />
        <Route path="/team" element={<Home><Team /></Home>} />
        <Route path="/videos" element={<Home><Videos /></Home>} />
        <Route path="/news" element={<Home><News /></Home>} />
        <Route path="/messages" element={<Home><Messages /></Home>} />
    </Routes>
  )
}

export default App