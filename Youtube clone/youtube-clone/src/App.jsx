import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react'

const App = () => {
  const [sidebar,setSidebar]=useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video/>} />
      </Routes>
      
    </div>
  )
}

export default App
