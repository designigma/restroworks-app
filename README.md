# Restroworks Assignment - CMS & Frontend Prototype

This project is a high-performance, SEO-optimized website prototype built using **Next.js 15 (App Router)** and **Payload CMS 3.0 (Beta)**. It demonstrates a modern "monorepo" architecture where the CMS and Frontend run as a single application.

## 🚀 Live Demo

**[Insert Your Vercel URL Here]** _(e.g. https://my-restroworks-app.vercel.app)_

---

## 🛠 Technology Stack

- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS, Framer Motion
- **Backend:** Payload CMS 3.0 (Serverless), MongoDB Atlas
- **Language:** TypeScript
- **Hosting:** Vercel

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js v18 or later
- A MongoDB connection string (local or Atlas)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd my-restroworks-app
npm install

### 2. Environment Variables
Create a .env file in the root directory and add the following:

Bash
# Database Connection (MongoDB Atlas)
DATABASE_URI=mongodb+srv://<user>:<password>@cluster0.example.mongodb.net/your-db-name

# Payload Secret (Generate one using: openssl rand -hex 32)
PAYLOAD_SECRET=your_random_secret_string

# Server URL (Use http://localhost:3000 for local dev)
NEXT_PUBLIC_SERVER_URL=http://localhost:3000


### 3. Run Locally
Start the development server:

Bash
npm run dev
Website: http://localhost:3000

CMS Admin: http://localhost:3000/admin
```
