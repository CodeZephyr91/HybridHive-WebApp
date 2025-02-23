# HybridHive 🐝  
**A Smarter Way to Plan & Work Efficiently**  

🚀 **HybridHive** is an AI-powered productivity web app designed to optimize your work-life balance. It helps users efficiently plan their workdays by:  

✅ **Scheduling Meetings** 📅 – (Temporarily Unavailable) Seamless meeting scheduling via **Google Calendar API**. *(Currently pending Google OAuth verification.)*  
✅ **AI-Based Work Recommendations** 🤖 – Get personalized suggestions on whether to **work from home or commute** based on real-time **weather, traffic, and meeting locations**.  
✅ **Finding Nearby Coworking Spaces** 🏢 – Discover coworking spaces close to your meeting locations to boost productivity.  
✅ **Burnout Prevention Techniques** 🌿 – Learn about **Ikigai, Pomodoro, Kanban**, and other work-life balance strategies.  

---

## 🌍 Live Deployment 🌟  
HybridHive is **publicly deployed** and accessible online! 🎉  

- **Frontend:** [HybridHive Web App](https://hybrid-hive-webapp-frontend.vercel.app/)  
- **Flask Backend (AI Recommendations):** [HybridHive Flask API](https://hybridhive-flask-backend-5.onrender.com) *(kept awake using Google App Script pings every 15 minutes)*  
- **Google API Backend (Express.js):** [HybridHive Express API](https://hybridhive-express-backend.onrender.com)  

---

## 🛠️ Tech Stack  
### **Frontend:**  
- React.js ⚛️  
- CSS 🎨  

### **Backend:**  
- Python Flask API 🐍  
- Express.js (Node.js) 🌿  

### **APIs Used:**  
- **Google Calendar API** *(Temporarily Unavailable due to OAuth verification)*  
- **Google OAuth** – User authentication  
- **Groq API (DeepSeek LLaMA)** – AI-based recommendations  
- **Open-Meteo API** – Real-time weather updates  

---

## 📂 Project Structure  
```
HybridHive/
│── Frontend/              # React frontend
│── Backend/
│   │── index.js           # Express.js API for Google Calendar
│   │── pythonflaskbackend/ # Flask AI recommendation system
│       │── app.py         # AI recommendation logic
│       │── requirements.txt # Python dependencies
│       │── runtime.txt    # Runtime configuration
│── README.md              # Project documentation
|── .gitignore #For secure .env addition
```

---

## 🚀 Installation & Setup  

### **1. Clone the Repository**  
```bash
git clone https://github.com/CodeZephyr91/HybridHive-WebApp.git
cd HybridHive-Webapp
```

### **2. Setup Backend (Flask API & Express.js Server)**  
```bash
cd Backend/pythonflaskbackend
pip install -r requirements.txt
python app.py
```
```bash
cd Backend
npm install
node index.js
```

### **3. Setup Frontend (React)**  
```bash
cd Frontend
npm install
npm start
```

---

## 🎯 Features & Functionality  
✅ **Meeting Scheduling** *(Temporarily Unavailable)* – Google Calendar API integration.  
✅ **AI-Based Work Recommendations** – Uses **DeepSeek LLaMA** to analyze **traffic, weather, and meeting details** for work mode suggestions.  
✅ **Coworking Space Finder** – Fetches **nearby coworking spaces** to enhance productivity.  
✅ **Burnout Prevention Strategies** – Showcases **work-life balance techniques** like **Ikigai, Pomodoro, Kanban**, and more.  

---

## 🔮 Future Enhancements  
🔹 **More AI-driven insights** for work location recommendations.  
🔹 **Integration with public transport APIs** for optimized commute suggestions.  
🔹 **UI/UX improvements** for a seamless experience.  

---

## 🤝 Contributing  
We welcome contributions! Feel free to submit issues and pull requests to help improve HybridHive.  

---

## 🐝 License  
MIT License © 2025 HybridHive  
