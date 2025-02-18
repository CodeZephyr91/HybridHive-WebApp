import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './homepage'
import Schedule from './Schedule'
import AIrecommendationpage from './AIrecommendationpage'
import About from './About'
import ThoughtSpace from './ThoughtSpace'
const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/recommendations" element={<AIrecommendationpage/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/thoughtspace" element={<ThoughtSpace/>}/>
      </Routes>
    </div>
  )
}

export default Approutes