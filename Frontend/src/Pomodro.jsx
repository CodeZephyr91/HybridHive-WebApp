import React from 'react'
import './Pomodro.css'
import Pomodroimage from './assets/pomodro.jpeg'
const Pomodro = () => {
  return (
    <div className='Pomodro-parent'>
    <div className='data-pomodro'>
      <h1 className='pomodro-heading'>📌 Pomodoro (ポモドーロ) – The Art of Time Management</h1>
      
      <p>🌟 “Time management is the key to productivity.”</p>
      <p>🌟 “Work smarter, not harder.”</p>

      <h2 className='pomodro-heading'>⏳ What is the Pomodoro Technique?</h2>
      <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It is designed to improve focus and productivity by breaking work into short, timed intervals, called Pomodoros (Italian for "tomatoes"), separated by brief breaks.

</p>

      <h3 className='pomodro-heading'>🛠 How Does the Pomodoro Technique Work?</h3>
      <ul>
        <li>1️⃣<strong>Choose a task you want to work on.</strong></li>
        <li>2️⃣<strong> Set a timer for 25 minutes (one Pomodoro).</strong></li>
        <li>3️⃣<strong>Work with full focus</strong> –until the timer rings.</li>
        <li>4️⃣<strong> Take a 5-minute break</strong>–to relax.</li>
        <li>5️⃣<strong> After 4 Pomodoros, take a longer 15–30 minute break.</strong></li>
      </ul>

      <h2 className='pomodro-heading'>📌 Real-Life Applications of Pomodoro</h2>
      <ul>
        <li>✔ <strong> Software Developers & Designers</strong>-Increases focus during coding & design sessions.</li>
        <li>✔ <strong> Writers & Content Creators</strong> –  Helps in writing efficiently without burnout.</li>
        <li>✔ <strong>Students & Learners</strong> – Enhances study sessions and memory retention.</li>
      </ul>
    </div>
    
    <img src={Pomodroimage} alt="Pomodro" className='pomodro-image'/>
  </div>
  )
}

export default Pomodro
