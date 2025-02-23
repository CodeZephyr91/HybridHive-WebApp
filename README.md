# 🐝 HybridHive – Smart Work Planning & Productivity 🚀  

## 🌍 **Live Now! Try HybridHive:**  
🔗 **Frontend:** [HybridHive WebApp](https://hybrid-hive-webapp-frontend.vercel.app/)  
🔗 **Flask Backend:** [AI Recommendation System](https://hybridhive-flask-backend-5.onrender.com)  
🔗 **Google API Backend (Express.js):** [Google Calendar & OAuth](https://hybridhive-express-backend.onrender.com)  

> **Note:** Google Calendar scheduling is **temporarily unavailable** due to Google's OAuth verification policy. We are working on getting it approved! 🛠️

---

## 🎯 **What is HybridHive?**  
HybridHive is an **AI-powered work planning app** that helps you manage your workday **smarter** by:  
✅ **Scheduling Meetings** 📅 *(Temporarily Unavailable – Awaiting Google OAuth Approval)*  
✅ **AI-Based Work Recommendations** 🤖 *(Work from home or commute? Get real-time weather & traffic-based insights!)*  
✅ **Finding Nearby Coworking Spaces** 🏢 *(Locate the best spots for a productive work environment!)*  
✅ **Burnout Prevention Strategies** ⚖️ *(Explore work-life philosophies like Ikigai, Kanban & more!)*  

---

## 🛠 **Tech Stack**  

### **Frontend** 🎨  
- React.js ⚛️  
- CSS 💅  

### **Backend** 🔥  
- Flask API (Python) 🐍  
- Express.js (Node.js) 🌿  

### **APIs Used**  
- **Google Calendar API** *(Temporarily Unavailable – OAuth verification pending)*  
- **Google OAuth** *(For authentication – undergoing verification)*  
- **Groq API** *(DeepSeek LLaMA for AI-based recommendations)*  
- **Open-Meteo API** *(For real-time weather updates)*  

---

## 🚀 **How It Works**  
1️⃣ **Enter your work & meeting details** 📝  
2️⃣ **AI analyzes real-time weather & traffic** ☀️🚦  
3️⃣ **Get a recommendation** – Work from home or go to a coworking space? 🤔  
4️⃣ **Find the best coworking spaces nearby** 🏢  
5️⃣ **Boost productivity & maintain work-life balance** ⚡  

---

## 📂 **Project Structure**  
```
HybridHive/
│── frontend/              # React frontend
│── backend/
│   │── server/            # Express.js API for Google Calendar
│   │── pythonflaskbackend/ # Flask AI recommendation system
│       │── ai_generate.py  # AI logic
│       │── .env            # Environment variables
│── README.md              # Project documentation
```

---

## 🔧 **Installation & Setup**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/CodeZephyr91/HybridHive-WebApp.git
cd HybridHive-Webapp
```

### **2️⃣ Setup Backend (Flask API & Express.js Server)**  
```bash
cd Backend/pythonflaskbackend
pip install -r requirements.txt
python ai_generate.py
```
```bash
cd Backend
npm install
node index.js
```

### **3️⃣ Setup Frontend (React)**  
```bash
cd Frontend
npm install
npm start
```

---

## ⚡ **Deployment Strategy**  
🚀 **Frontend Deployed on Vercel** ([Live Here](https://hybrid-hive-webapp-frontend.vercel.app/))  
🚀 **Flask Backend Deployed on Render** ([Live Here](https://hybridhive-flask-backend-5.onrender.com))  
🚀 **Express.js Google API Backend Deployed on Render** ([Live Here](https://hybridhive-express-backend.onrender.com))  
🛠️ **Flask Backend Auto-Pinged Every 15 min** *(To prevent sleep mode on Render, Google Apps Script pings the backend every 15 min! ⏳)*  

---

## 🎯 **Future Enhancements**  
🔹 **More AI-based insights** for work location recommendations.  
🔹 **Integration with public transport APIs** for better commute planning.  
🔹 **Enhanced UI/UX** for an even smoother user experience.  

---

## 🤝 **Contributing**  
We welcome contributions! 🚀 Feel free to submit issues and pull requests to improve HybridHive.  

---

## 🐝 **License**  
MIT License © 2025 HybridHive  

---

**📢 HybridHive: Work Smarter, Not Harder!** 🚀🐝
