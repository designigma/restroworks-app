# Restroworks Assignment - CMS & Frontend Prototype

This project is a high-performance, SEO-optimized website prototype built using **Next.js 15 (App Router)** and **Payload CMS 3.0 (Beta)**. It demonstrates a modern "monorepo" architecture where the CMS and Frontend run as a single application.

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

# Restroworks Assignment - CMS & Frontend Prototype

This project is a high-performance, SEO-optimized website prototype built using **Next.js 15 (App Router)** and **Payload CMS 3.0**.

It utilizes a modern "monorepo" architecture where the **CMS (Backend)** and the **Website (Frontend)** run simultaneously as a single application. This simplifies development and deployment since you do not need to run two separate servers.

---

## 🛠 Technology Stack

- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS, Framer Motion
- **Backend:** Payload CMS 3.0 (Serverless), MongoDB Atlas
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Lucide React Icons

---

## ⚙️ Setup Instructions (Local Development)

Since this project combines the Frontend and Backend, following these steps will set up **both** apps instantly.

### 1. Prerequisites

- **Node.js**: Version 18.20.2 or later (v20+ recommended).
- **MongoDB**: You need a connection string. You can use a free [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster or a local MongoDB instance.

### 2. Clone the Repository

Open your terminal and run:

```bash
git clone <YOUR_GITHUB_REPO_URL>
cd my-restroworks-app

### 3. Install Dependencies
Install the required packages (this sets up both Next.js and Payload):

Bash
npm install

### 4. Configure Environment Variables
Create a file named .env in the root directory of the project. Copy and paste the following configuration:

Bash
# Database Connection (Your MongoDB Connection String)
DATABASE_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/restroworks-db

# Payload Secret (Used for session security)
# You can generate a random string or just use this generic one for testing:
PAYLOAD_SECRET=7f8a9b2c3d4e5f6g7h8i9j0k1l2m3n4o

# Server URL (Points to local dev server)
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

### 5. Start the Application
Run the development server:

Bash
npm run dev
Once the server starts, the application is live at:

Website (Frontend): http://localhost:3000

CMS Admin Panel: http://localhost:3000/admin

First Run Note: When you visit the Admin Panel for the first time, you will be prompted to create your first Admin User. Please do this immediately to access the dashboard.
```
