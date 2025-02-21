# HybridHive 🐝  
**A Smarter Way to Plan & Work Efficiently**  

## 🚀 Overview  
HybridHive is an AI-powered productivity app designed to optimize your work-life balance. It helps users efficiently plan their workdays by:  
1. **Scheduling Meetings** 📅 – Seamlessly schedule and manage meetings with Google Calendar integration.  
2. **AI-Based Work Recommendations** 🤖 – Get personalized recommendations on whether to work from home or travel, based on real-time **weather, traffic, and meeting locations**.  
3. **Finding Nearby Coworking Spaces** 🏢 – Discover coworking spaces near your meeting locations for a productive work environment.  

Additionally, HybridHive promotes **burnout prevention** by featuring **work-life philosophies** such as **Ikigai, Pomodoro, Kanban, and more** on the About page.

---

## 🛠️ Tech Stack  

### **Frontend**  
- React.js ⚛️  
- CSS 🎨  

### **Backend**  
- Python Flask API 🐍  
- Express.js (Node.js) 🌿  

### **APIs Used**  
- **Google Calendar API** – For scheduling meetings  
- **Google OAuth** – For authentication  
- **Groq API** – To access DeepSeek LLaMA for AI-based recommendations  
- **Open-Meteo API** – For real-time weather updates  

---

## 💂‍♂️ Project Structure  

HybridHive/
│── frontend/              # React frontend
│── backend/
│   │── server/            # Express.js API for handling Google Calendar
│   │── pythonflaskbackend/ # Flask AI recommendation system
│       │── ai_generate.py  # AI recommendation logic
│       │── .env            # Environment variables
│── README.md              # Project documentation

---

## 🔧 Installation & Setup  

### **1. Clone the Repository**  
```bash
git clone https://github.com/CodeZephyr91/HybridHive-WebApp.git
cd HybridHive-Webapp
```

### **2. Setup Backend (Flask API & Express.js Server)**  
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

### **3. Setup Frontend (React)**  
```bash
cd Frontend
npm install
npm start
```

---

## 🚀 Features & Functionality  

✅ **Meeting Scheduling** – Connects with **Google Calendar** to book meetings effortlessly.  
✅ **AI-Based Work Suggestions** – Uses **DeepSeek LLaMA** to analyze real-time **traffic, weather, and meeting details** to recommend whether to work remotely or commute.  
✅ **Coworking Space Finder** – Fetches **nearby coworking spaces** to enhance productivity.  
✅ **Burnout Prevention Strategies** – Showcases **work-life balance techniques** like **Ikigai, Pomodoro, Kanban**, and more on the About page.  

---

## 🎯 Future Enhancements  
🔹 **More AI-based insights** for better work location recommendations.  
🔹 **Integration with public transport APIs** for commute suggestions.  
🔹 **Enhanced UI/UX improvements** for a smoother user experience.  

---

## 🤝 Contributing  
We welcome contributions! Feel free to submit issues and pull requests to help improve HybridHive.  

---

## 🐝 License  
MIT License © 2025 HybridHive  

---

