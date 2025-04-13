# Resume Builder App (MERN Stack)

A full-stack MERN resume builder application that allows users to input their resume details through a multi-step form, preview it in real-time with multiple templates, customize themes, and download the final resume as a PDF.

## 🚀 Features

- Multi-step input form to collect resume data
- Live preview of resume with real-time updates
- Switch dynamically between multiple professional resume templates
- Font style and color theme customization
- Graceful handling of incomplete fields
- Text trimming and section toggling logic
- Drag-and-drop reordering of resume sections
- High-quality PDF download using `jsPDF` and `html2canvas`
- User session storage and retrieval via MongoDB

## 🛠️ Tech Stack

- **Frontend**: ReactJS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **PDF Export**: jsPDF, html2canvas

## 📁 Project Structure

resume-builder/
├── client/                         # Frontend 
│   ├── public/
│   │   └── _redirects              # Netlify routing fix
│   ├── src/
│   │   ├── assets/                 # Images, fonts, etc.
│   │   ├── components/             # Reusable UI components
│   │   ├── templates/              # Resume templates
│   │   ├── pages/                  # Page-level components
│   │   ├── utils/                  # Helper functions
│   │   └── App.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                         # Backend (Node + Express + MongoDB)
│   ├── controllers/                # Logic for handling routes
│   ├── models/                     # Mongoose schemas
│   ├── routes/                     # Express route handlers
│   ├── config/                     # DB and app config
│   ├── .env                        # Environment variables
│   ├── index.js                    # Entry point
│   └── package.json
│
├── README.md
└── .gitignore




## 🔧 Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (local or cloud)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/resume-builder.git
cd resume-builder


### 2. Install Dependencies

Client:
cd client
npm install

Server:
cd ../server
npm install

### 3. Set up Environment Variables

Create a .env file in server/:
MONGO_URI=your_mongo_connection_string
PORT=5000

4. Run the App
Server:
cd server
npm run dev
Client:
cd ../client
npm run dev
