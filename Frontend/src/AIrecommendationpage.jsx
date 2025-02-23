import React, { useState } from "react";
import './AIrecommendationpage.css'
const AIrecommendationpage = () => {
  const [meetingLocation, setMeetingLocation] = useState("")
  const [meetingTime, setMeetingTime] = useState("")
  const [currentLocation, setCurrentLocation] = useState("")
  const [responseData, setResponseData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const requestData = {
      meeting_location: meetingLocation || undefined,
      meeting_time: meetingTime || undefined,
      current_location: currentLocation || undefined,
    }

    try {
      const response = await fetch("https://hybridhive-flask-backend-5.onrender.com/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong!")
      }
      setResponseData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="body-of-page">
    <div className="recommendation-container">
      <h2>Hybrid Work Location Recommendation</h2>
      
      <form onSubmit={handleSubmit}>
        <label>Meeting Location (optional):</label>
        <input
          type="text"
          value={meetingLocation}
          onChange={(e) => setMeetingLocation(e.target.value)}
          placeholder="Enter meeting location"
        />

        <label>Meeting Time:</label>
        <input
          type="datetime-local"
          value={meetingTime}
          onChange={(e) => setMeetingTime(e.target.value)}
        />

        <label>Current Location:</label>
        <input
          type="text"
          value={currentLocation}
          onChange={(e) => setCurrentLocation(e.target.value)}
          placeholder="Enter current location"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Fetching..." : "Get Recommendation"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {responseData && (
        <div className="recommendation-result">
          <h3>Recommendation:</h3>
          <p><strong>Weather:</strong> {JSON.stringify(responseData.weather)}</p>
          <p><strong>Nearby Coworking Spaces:</strong> {responseData.coworking_spaces.join(", ")}</p>
          <p><strong>AI Suggestion:</strong> {responseData.recommendation}</p>
        </div>
      )}
    </div>
    </div>
  )
}

export default AIrecommendationpage
