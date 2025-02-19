const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const fs=require('fs')
const path=require('path')
require('dotenv').config()
const { google }=require('googleapis')
const cookieParser=require('cookie-parser')
const app=express()
app.use(cors({origin:process.env.frontenduri, credentials: true}))
app.use(cookieParser())
app.use(express.json())
const port=process.env.port||5000
const oauth2client=new google.auth.OAuth2(
    process.env.google_client_id,
    process.env.google_client_secret,
    process.env.google_redirect_uri
)
app.get("/auth/google",(req,res)=>{
    const authurl=oauth2client.generateAuthUrl(
        {
            access_type:"offline",
            scope:["https://www.googleapis.com/auth/calendar"]
        }
    )
    res.redirect(authurl)
})
app.get("/auth/callback", async(req,res)=>{
    try{
        const { code }=req.query
        const { tokens }=await oauth2client.getToken(code)
        res.cookie("googleAuth",JSON.stringify(tokens),{ httpOnly: true})
        res.redirect("http://localhost:5173/schedule")
    }
    catch(error){
        console.error("Oauth callback failed")
        res.status(500).send("Authentication failed")
    }
})
app.post("/create-event", async (req, res) => {
    try {
      const { summary, location, description, startTime, endTime } = req.body;
      const tokens = JSON.parse(req.cookies.googleAuth)
      oauth2Client.setCredentials(tokens)
      const calendar = google.calendar({ version: "v3", auth: oauth2Client })
      const event = {
        summary,
        location,
        description,
        start: { dateTime: startTime, timeZone: "UTC" },
        end: { dateTime: endTime, timeZone: "UTC" },
      }
      const response = await calendar.events.insert({
        calendarId: "primary",
        resource: event,
      })
      res.status(200).json({ message: "Event created!", event: response.data })
    } 
    catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ error: "Event creation failed." })
    }
  })

app.listen(port,()=>{
    console.log(`App listening on port: ${port}`)
})
