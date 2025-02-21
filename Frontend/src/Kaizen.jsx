import React from 'react'
import Kaizenimage from './assets/kaizen.webp'
import './Kaizen.css'
const Kaizen = () => {
  return (
    <div className='Kaizen-parent'>
    <div className='data-kaizen'>
    <h1 className='kaizen-heading'>📌Kaizen (改善) – Continuous Improvement</h1>
   🌟 "Small daily improvements are the key to long-term success."
   <br/>

  <h2 className='kaizen-heading'>What is Kaizen?</h2>
  Kaizen (改善) translates to "change for the better" or "continuous improvement." It’s a philosophy rooted in Japanese business culture, focusing on making small, incremental improvements rather than large, radical changes.
  <br/>
  Core Principles of Kaizen:
   <br/>
   🔹 Eliminate waste – Identify inefficiencies and remove them.<br/>
   🔹 Standardization – Maintain consistent processes for long-term improvement.<br/>
   🔹 Feedback-driven change – Encourage employees to contribute ideas for improvement.<br/>
   🔹 Gradual progress – Even the smallest refinements accumulate into significant advancements.<br/>

  <h2 className='kaizen-heading'>Real-Life Examples:</h2><br/>
  ✔ Toyota Production System – Pioneered Kaizen by continuously refining manufacturing processes.<br/>
  ✔ Healthcare – Hospitals use Kaizen to improve patient care and reduce wait times.<br/>
  ✔ Personal Growth – Adopting Kaizen in daily habits (e.g., improving fitness or learning skills).<br/>
    </div>
    <img src={Kaizenimage} alt="Kaizen" className='kaizen-image'/>
  </div>
  )
}

export default Kaizen
