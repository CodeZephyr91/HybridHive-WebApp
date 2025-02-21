import React from 'react';
import Ikigaiimage from './assets/ikigai-circles-3.jpg';
import './Ikigai.css';

const Ikigai = () => {
  return (
    <div className='Ikigai-parent'>
      <div className='data-ikigai'>
        <h1 className='ikigai-heading'>📌 Ikigai (生き甲斐) – The Reason for Being</h1>
        
        <p>🌟 "Small daily improvements are the key to long-term success."</p>
        <p>🌟 "Find joy in what you do, and you will never work a day in your life."</p>

        <h2 className='ikigai-heading'>What is Ikigai?</h2>
        <p>Ikigai (生き甲斐) is the Japanese concept of a fulfilling and meaningful life. It is the sweet spot where passion, profession, mission, and vocation overlap.</p>

        <h3 className='ikigai-heading'>The Four Elements of Ikigai:</h3>
        <ul>
          <li>💖 <strong>What You Love</strong> – Your passion and interests.</li>
          <li>💡 <strong>What You Are Good At</strong> – Skills and expertise.</li>
          <li>🌍 <strong>What The World Needs</strong> – A meaningful contribution.</li>
          <li>💰 <strong>What You Can Be Paid For</strong> – Sustainability in work.</li>
        </ul>

        <h2 className='ikigai-heading'>Real-Life Applications of Ikigai:</h2>
        <ul>
          <li>✔ <strong>Okinawa, Japan</strong> – The people here, known for their long lifespans, attribute their happiness and longevity to Ikigai.</li>
          <li>✔ <strong>Artists & Creators</strong> – They align passion with their profession, creating fulfilling work.</li>
          <li>✔ <strong>Entrepreneurs & Innovators</strong> – Many successful business leaders follow Ikigai principles.</li>
        </ul>
      </div>
      
      <img src={Ikigaiimage} alt="Ikigai Concept Diagram" className='ikigai-image'/>
    </div>
  );
}

export default Ikigai;
