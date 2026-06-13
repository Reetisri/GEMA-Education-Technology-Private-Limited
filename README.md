# AI & Robotics Summer Workshop Landing Page

A playful, modern, and child-friendly full-stack landing page for the "AI & Robotics Summer Workshop", inspired by the design aesthetics of `kidrove.com`. It features interactive cards, collapsible FAQs, smooth scroll, form validation, confetti effects, and a Node/Express backend that saves submissions to MongoDB or falls back to server console logging.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite) + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express.js + TypeScript
- **Database**: MongoDB with Mongoose (optional with graceful fallback)
- **Form validation**: React Hook Form + Zod

---

## 📂 Project Structure

```
/client         → React + Vite (TypeScript + Tailwind)
  /src
    /components
    /sections
      ├── Hero.tsx              # Bold title, doodles, CTA button
      ├── Details.tsx           # Cards for fees, duration, mode, etc.
      ├── Outcomes.tsx          # Key takeaways list
      ├── FAQ.tsx               # Accordion-style collapsible FAQs
      └── RegistrationForm.tsx  # React Hook Form + Zod validation
    App.tsx                     # Glues sections together
    index.css                   # Tailwind styles + Custom Google Fonts

/server         → Express API (TypeScript)
  /src
    /middleware
      └── validation.ts         # Zod schemas for validation
    /models
      └── Enquiry.ts            # Mongoose Schema
    /routes
      └── enquiry.ts            # Router handling POST /api/enquiry
    server.ts                   # Entry point + MongoDB connector
```

---

## 🚀 Running Locally

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed (v18+ recommended).
- [MongoDB](https://www.mongodb.com/) running locally (optional; the server will log entries to the terminal console if MongoDB is unavailable).

### 2. Set Up the Backend
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables. Create a `.env` file (copied from `.env.example`):
   ```env
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/ai_robotics_workshop
   CLIENT_URL=http://localhost:5173
   ```
4. Start the server in development mode:
   ```bash
   npm run dev
   ```
   *The server runs on [http://localhost:5000](http://localhost:5000).*

### 3. Set Up the Frontend
1. Open a new terminal and navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The client web page opens on [http://localhost:5173](http://localhost:5173).*

---

## 🌐 Deployment Instructions

### Frontend (Vite + React) on Vercel
1. Set up a Vercel project connected to your Git repository.
2. Configure build settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add Environment Variable:
   - `VITE_API_URL`: Your hosted backend URL (e.g. `https://your-backend.railway.app`).

### Backend (Express) on Railway / Render
1. Create a new service pointing to your Express code directory (`server`).
2. Add a MongoDB database plugin (or set up MongoDB Atlas) and retrieve the connection string.
3. Configure environment variables on the backend service:
   - `PORT`: Set by platform (default: `80` or `8080` or `5000`)
   - `MONGODB_URI`: Your production MongoDB URI
   - `CLIENT_URL`: Your hosted frontend URL (e.g. `https://your-frontend.vercel.app`)
4. Configure Build & Start command:
   - **Build**: `npm run build`
   - **Start**: `npm start`
