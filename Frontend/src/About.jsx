import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="parent">
      <div className='links-to-techniques'>
          <Link to="/about/ikigai" className='ikigai-link'>Ikigai</Link>
          <Link to="/about/kaizen" className='ikigai-link'>Kaizen</Link>
          <Link to="/about/kanban" className='ikigai-link'>Kanban</Link>
          <Link to="/about/shokunin" className='ikigai-link'>Shokunin</Link>
          <Link to="/about/pomodro" className='ikigai-link'>Pomodoro</Link>
      </div>
      <div className='written-text'>
        <div className="major-data">
        <h1>
          Why Hybrid Hive?
        </h1>
        <p className="explain-about">
        <h2 className='subheading'>🌍 The Rise of Hybrid Work</h2>
          <br/>
          <p className='situation'> Hybrid work—a mix of remote and in-office work—became the new normal after the pandemic. 
           Companies realized that employees could be just as productive at home, but there was still value in face-to-face interactions.
           Today, many companies have hybrid work policies, where employees split their time between working from home and the office. 
           While this offers flexibility, it also brings challenges that can impact productivity, mental health, and work-life balance.
           Every day, hybrid workers must decide: "Should I work from home or go to the office?"
           Factors like weather, traffic, meetings, and personal energy levels make the decision stressful.
           Picking the wrong place can reduce productivity—for example, going to the office for deep work but getting distracted.
        </p>
        </p>

      </div>
      <div className='solution'>
        <h1 className='solution-explanation'>Solution</h1>
        <p className='solution-data'>
        HybridHive is an AI-powered recommendation system that helps hybrid workers:
        <br/>
       ✅ Decide where to work – Based on real-time traffic, weather, and meetings.
       <br/>
       ✅ Prevent burnout – By ensuring work-life balance with smart scheduling.
       <br/>
       ✅ Improve productivity – By suggesting optimal work environments.
       <br/>
       If bad weather + long meetings = Stay home today.
       <br/>
       If coworking space + deep work needed = Go to a quieter spot.
        </p>
      </div>
      <div className='conclusion'>
        <h1 className='conclusion-heading'>
        🌟 Hybrid Work Can Be Smarter
        </h1>
        <p className='conclusive-statement'>
         Hybrid work isn’t just about flexibility—it’s about making smarter decisions.
         HybridHive helps professionals work more efficiently while preventing burnout.

        🔗 Ready to improve your hybrid work experience?
         Start using HybridHive’s AI recommendations today! 🚀
        </p>
      </div>
    </div>
    </div>
  )
}

export default About
