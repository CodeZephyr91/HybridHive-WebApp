const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { google } = require('googleapis');
require('dotenv').config();
const app = express();
app.use(cors({ origin: process.env.frontend_uri, credentials: true }));
app.use(cookieParser());
app.use(express.json());
const port = process.env.PORT || 5000;
const oauth2client = new google.auth.OAuth2(
  process.env.google_client_id,
  process.env.google_client_secret,
  process.env.google_redirect_uri_production
);
app.get("/auth/google", (req, res) => {
  const authUrl = oauth2client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/calendar"]
  });

  try {
    console.log("Google Auth URL:", authUrl);
    res.redirect(authUrl);
  } catch (error) {
    console.error("Failed to connect", error);
    res.status(500).send('Authentication failed');
  }
});
app.get("/auth/callback", async (req, res) => {
  try {
    const { code } = req.query;
    const { tokens } = await oauth2client.getToken(code);
    res.cookie("googleAuth", JSON.stringify(tokens), {
      httpOnly: true,
      sameSite: "None",
      secure: true
    });

    res.redirect("https://hybrid-hive-webapp-frontend.vercel.app/schedule");
  } catch (error) {
    console.error("OAuth callback failed:", error);
    res.status(500).send("Authentication failed");
  }
});
app.post("/create-event", async (req, res) => {
  try {
    const { summary, location, description, startTime, endTime } = req.body;
    const tokenString = req.cookies.googleAuth;
    if (!tokenString) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    const tokens = JSON.parse(tokenString);
    oauth2client.setCredentials(tokens);
    const calendar = google.calendar({ version: "v3", auth: oauth2client });
    const event = {
      summary,
      location,
      description,
      start: { dateTime: new Date(startTime).toISOString(), timeZone: "UTC" },
      end: { dateTime: new Date(endTime).toISOString(), timeZone: "UTC" }
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event
    });

    res.status(200).json({ message: "Event created!", event: response.data });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Event creation failed." });
  }
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
