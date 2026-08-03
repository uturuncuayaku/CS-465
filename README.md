# Travlr Getaways - Full Stack Application (Module 5)

## Introduction

This repository contains the full-stack web application for **Travlr Getaways**, built as part of **CS 465 Full Stack Development**. The application consists of:
- **Express / Node.js Backend Server**
- **Handlebars Templating (`hbs`)** for server-side rendering
- **MongoDB** database for managing travel trips
- **RESTful API (`/api/trips`)** built with Express and Mongoose

---

## Development Environment Setup (`cs465-dev-env`)

Local development uses a Docker container managed by Docker Compose for MongoDB.

### Prerequisites

Make sure you have installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Docker & Docker Compose** - [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)
- **Git** - [Download here](https://git-scm.com/)

---

### Step 1: Start MongoDB via Docker Compose

1. Clone or ensure `cs465-dev-env` is present in the repository root:
   ```bash
   git clone https://github.com/uturuncuayaku/cs465-dev-env.git cs465-dev-env
   ```

2. Start the MongoDB database container:
   ```bash
   cd cs465-dev-env
   docker compose up -d
   ```
   *This starts a MongoDB container on `localhost:27017` named `travlr-mongodb`.*

---

### Step 2: Install Dependencies & Seed Database

1. Navigate to the `travlr` application directory:
   ```bash
   cd ../travlr
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Seed MongoDB with initial trip data:
   ```bash
   node app_api/models/seed.js
   ```

---

### Step 3: Start the Express Application

Run the application server:
```bash
npm start
```

The application will start listening on **`http://localhost:3000`**.

---

## Available Application Routes

- **Homepage**: `http://localhost:3000/`
- **Travel Page (Handlebars SSR)**: `http://localhost:3000/travel`
- **REST API - Get All Trips**: `http://localhost:3000/api/trips`
- **REST API - Get Single Trip**: `http://localhost:3000/api/trips/GALR210214`

---

## Useful Commands

| Command | Action |
| :--- | :--- |
| `docker compose up -d` (in `cs465-dev-env`) | Start local MongoDB container |
| `docker compose down` (in `cs465-dev-env`) | Stop local MongoDB container |
| `node app_api/models/seed.js` (in `travlr`) | Seed initial database trip records |
| `npm start` (in `travlr`) | Start Express server |

