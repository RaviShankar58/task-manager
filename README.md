# Task Manager

**A simple Task Manager application** built with the MERN stack (MongoDB, Express, React/Vite, Node.js), featuring JWT authentication, full CRUD on tasks, and a Tailwind CSS–styled responsive UI.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)

   * [Backend Setup](#backend-setup)
   * [Frontend Setup](#frontend-setup)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Environment Variables](#environment-variables)
8. [Available Scripts](#available-scripts)
9. [GitHub .gitignore](#github-gitignore)
10. [License](#license)

---

## Features

* User signup & login with JWT authentication
* Create, view, update (status & title), and delete tasks
* Tasks displayed in three columns: To Do, In Progress, Done
* Responsive UI with Tailwind CSS
* Protected routes—only authenticated users can access the dashboard

---

## Tech Stack

* **Backend:** Node.js, Express, MongoDB, Mongoose, bcrypt, JWT
* **Frontend:** React (via Vite), Tailwind CSS, Axios, React Router

---

## Prerequisites

* Node.js v14+ (or compatible)
* npm (v6+)
* MongoDB (local installation or Atlas cluster)

---

## Installation

### Backend Setup

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file in `backend/` with:

   ```env
   PORT=5000
   MONGO_URI=<your_mongo_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Start the server in development mode:

   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start Vite dev server:

   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

---

## Usage

1. Register a new user on the signup page (`/`).
2. Log in with your credentials.
3. Create tasks, move them between statuses, edit titles, or delete them.
4. Log out when finished.

---

## Project Structure

```
├── backend/
│   ├── config/db.js
│   ├── middleware/auth.js
│   ├── models/
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/
│   │   ├── taskRoutes.js
│   │   └── userRoutes.js
│   ├── .env
│   ├── index.js
│   └── package.json

├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignupPage.jsx
│   │   ├── utils/auth.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

---

## Environment Variables

| Variable    | Description                        |
| ----------- | ---------------------------------- |
| MONGO\_URI  | MongoDB connection string          |
| JWT\_SECRET | Secret key for signing JWT tokens  |
| PORT        | Backend server port (default 5000) |

---

## Available Scripts

### Backend

* `npm run dev` — start backend with nodemon
* `npm start` — start backend with Node.js

### Frontend

* `npm run dev` — start Vite development server
* `npm run build` — build frontend for production

---



---
