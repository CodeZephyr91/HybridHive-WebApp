import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './homepage'
import Schedule from './Schedule'
import AIrecommendationpage from './AIrecommendationpage'
import About from './About'
import Ikigai from './Ikigai'
import Kaizen from './Kaizen'
import Kanban from './Kanban'
import Shokunin from './Shokunin'
import Pomodro from './Pomodro'
const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/recommendations" element={<AIrecommendationpage/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about/ikigai" element={<Ikigai/>}/>
        <Route path="/about/kaizen" element={<Kaizen/>}/>
        <Route path="/about/kanban" element={<Kanban/>}/>
        <Route path="/about/shokunin" element={<Shokunin/>}/>
        <Route path="/about/pomodro" element={<Pomodro/>}/>
      </Routes>
    </div>
  )
}

export default Approutes