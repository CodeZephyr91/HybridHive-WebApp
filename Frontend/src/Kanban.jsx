import React from 'react'
import './Kanban.css'
import Kanbanimage from './assets/kanban.png'
const Kanban = () => {
  return (
    <div className='Kanban-parent'>
    <div className='data-kanban'>
    <h1 className='kanban-heading'>📌Kanban (看板) – Visual Workflow Management</h1>
     🌟 "A clear system leads to clear results."
   <br/>

  <h2 className='kanban-heading'>What is Kanban?</h2>
  Kanban (看板) translates to "signboard" and is a workflow management method that ensures efficiency and organization in work.
  Developed in Toyota’s production system, it has since been adopted in software development, business operations, and personal productivity.
  <br/>
  Principles of Kanban:
   <br/>
   🔹 Visualizing work – Tracking tasks using a board (To Do → In Progress → Done).<br/>
   🔹 Limiting Work in Progress (WIP) – Preventing overload by focusing on fewer tasks.<br/>
   🔹 Optimizing workflow – Continuous movement and prioritization of tasks.<br/>

  <h2 className='kanban-heading'>Real-Life Applications of Kanban:</h2><br/>
  ✔ Toyota Manufacturing – Uses Kanban to manage parts and production schedules.<br/>
  ✔ Agile Development – Teams use Kanban boards in software projects (e.g., Trello, Jira).<br/>
  ✔ Daily Productivity – Individuals use Kanban to track personal or professional goals.<br/>
    </div>
    <img src={Kanbanimage} alt="Kanban" className='kanban-image'/>
  </div>
  )
}

export default Kanban
