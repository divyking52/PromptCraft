# 🚀 PromptCraft AI

> Transform simple ideas into professional AI image prompts and instantly generate stunning AI images.

![React](https://img.shields.io/badge/React-19-blue)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![Gemini](https://img.shields.io/badge/Google-Gemini-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Overview

PromptCraft AI is a full-stack AI-powered web application that converts simple, everyday descriptions into detailed, professional prompts suitable for AI image generation.

The application leverages **Google Gemini 2.5 Flash** to enhance user prompts and **Pollinations AI** to generate high-quality AI images.

Built as part of the **Ridvig AI Internship Assignment**.

---

## ✨ Features

- 🤖 AI Prompt Enhancement
- 🎨 AI Image Generation
- 💡 Example Prompt Suggestions
- 📜 Prompt History
- 📋 Copy Enhanced Prompt
- 📥 Download Prompt
- 🖼️ Download Generated Image
- ⚡ Fast & Responsive UI
- 🌙 Modern Dark Theme

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

### Backend

- Node.js
- Express.js
- Google Gemini API
- Pollinations AI
- CORS
- Dotenv

---

## 🏗️ Architecture

```text
User
   │
   ▼
React Frontend
   │
   ▼
Express Backend
   │
   ▼
Google Gemini
(Prompt Enhancement)
   │
   ▼
Pollinations AI
(Image Generation)
   │
   ▼
Frontend
```

---

## 📸 Demo

### Input

```
Luxury perfume advertisement
```

↓

### Enhanced Prompt

```
Create an ultra-realistic luxury perfume advertisement featuring an elegant glass bottle placed on a reflective marble surface...
```

↓

### Generated Image

AI-generated luxury advertisement image.

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/PromptCraft.git
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
PORT=5000
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env`

```env
VITE_API_URL=http://localhost:5000
```

Run frontend

```bash
npm run dev
```

---

## 📂 Project Structure

```
PromptCraftAI
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🎯 Future Improvements

- User authentication
- Prompt categories
- Prompt templates
- Prompt sharing
- Prompt favorites
- Multiple AI image models
- Image editing
- Prompt analytics
- History persistence
- Dark/Light mode toggle

---

## 🧠 Challenges Faced

During development, several challenges were encountered:

- Integrating Google Gemini API
- Backend deployment on Render
- Environment variable configuration
- Frontend-backend communication
- Evaluating multiple AI image providers
- Selecting Pollinations AI for lightweight image generation

These challenges were resolved through debugging, deployment configuration, and iterative testing.

---

## 📈 Potential Use Cases

- Designers
- Marketing Agencies
- Content Creators
- Social Media Managers
- Startup Founders
- E-commerce Businesses
- Students
- Freelancers

---

## 🌐 Live Demo

Frontend:

```
https://YOUR-VERCEL-LINK.vercel.app
```

Backend:

```
https://YOUR-RENDER-LINK.onrender.com
```

---

## 📷 Screenshots

### Home Page

(Add screenshot)

### Prompt Generation

(Add screenshot)

### AI Generated Image

(Add screenshot)

---

## 👨‍💻 Author

**Divyansh Malav**

MCA (AI) Student

LinkedIn:
(Add your LinkedIn)

GitHub:
https://github.com/YOUR_USERNAME

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project interesting, consider giving it a star!
