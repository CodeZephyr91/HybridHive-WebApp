import React from 'react'
import './Shokunin.css'
import Shokuninimage from './assets/shokunin.webp'
const Shokunin = () => {
    return (
      <div className='Shokunin-parent'>
        <div className='data-shokunin'>
        <h1 className='shokunin-heading'>📌Shokunin (職人) – The Path of Mastery</h1>
        🌟 "A true craftsman finds honor in their work, not in their status."
       <br/>
  
      <h2 className='shokunin-heading'>What is Shokunin?</h2>
      Shokunin (職人) translates to "master craftsman" or "artisan." It represents the dedication to lifelong learning, precision, and perfection in a craft or profession.
      <br/>
      Core Principles of Shokunin:
       <br/>
       🔹 Commitment to excellence – Focus on perfecting one’s craft.<br/>
       🔹 Discipline & perseverance – Years (sometimes decades) of practice.<br/>
       🔹 Pride in craftsmanship – Seeing work as an art rather than a task.<br/>
  
      <h2 className='shokunin-heading'>Real-Life Examples:</h2><br/>
      ✔ Sushi Masters – Chefs in Japan spend years perfecting rice preparation alone before making sushi.<br/>
      ✔ Japanese Woodworkers – Create furniture without nails using traditional joinery techniques.<br/>
      ✔ Samurai & Martial Arts – The Bushido code emphasizes discipline and perfection in skill.<br/>
        </div>
        <img src={Shokuninimage} alt="Shokunin" className='shokunin-image'/>
      </div>
  )
}

export default Shokunin
