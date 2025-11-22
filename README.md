# Microproject 1 – Express.js Website

This project is a simple multi-page website built using **Node.js**, **Express.js**, and **JSON data**. It includes a modern UI, a login/sign-in system (front-end only), and dynamic content loaded through a server-side API.

## 📌 Features
- Express.js server setup  
- Static website using HTML, CSS, JavaScript  
- Login & Sign-In pages with professional UI  
- Dropdown navigation (Login → Login / Sign In)  
- Full background image for authentication pages  
- JSON API: `GET /api/courses`  
- Fetch API using async/await  
- Dynamic card layout for JSON data

## 📁 Project Structure
microproject1-express/
│
├── app.js                  # Express server
├── package.json
│
├── data/
│   └── courses.json        # JSON data (6+ objects)
│
├── public/
│   ├── index.html          # Home page
│   ├── about.html          # About page
│   ├── courses.html        # API demo page
│   ├── login.html          # Login UI
│   ├── signin.html         # Sign-In UI
│   │
│   ├── styles/
│   │   └── style.css       # Full website styling
│   │
│   └── scripts/
│       └── main.js         # Fetch JSON + UI logic
│
└── README.md

## 🛠️ Technologies Used
Node.js · Express.js · HTML · CSS · JavaScript · JSON
