import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import './Schedule.css'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Schedule = () => {
  const [event, setEvent] = useState({
    summary: "",
    location: "",
    description: "",
    startTime: "",
    endTime: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value })
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google"
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/create-event", event, {
        withCredentials: true,
      });
      toast.success("🎉 Event Created Successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error("❌ Failed to create event!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className='body'><div className="container">
      <h1>Google Calendar Scheduler</h1>
      <ToastContainer />
      <button onClick={handleGoogleLogin} className="google-button">
        Login with Google
      </button>
      <form onSubmit={handleSubmission} className="event-form">
        <div className="form-group">
          <label>Event Title</label>
          <input type="text" name="summary" value={event.summary} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input type="text" name="location" value={event.location} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={event.description} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Start Time</label>
          <input type="datetime-local" name="startTime" value={event.startTime} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>End Time</label>
          <input type="datetime-local" name="endTime" value={event.endTime} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Create Event</button>
      </form>
    </div>
    </div>
  );
};

export default Schedule;
