# Travlr Getaways - Full Stack Application & Angular SPA (Module 6)

## Introduction

This repository contains the full-stack web application for **Travlr Getaways**, developed as part of **CS 465 Full Stack Development**. 

Module 6 integrates an **Angular Single Page Application (SPA)** for administrative trip management alongside the Express backend, Handlebars customer portal, and MongoDB database.

The application architecture is structured into distinct backend, frontend, and database layers:

- **Backend Layer**
  - **Node.js Runtime**: Provides the event-driven server execution environment.
  - **Express Web Framework**: Manages HTTP routing, middleware, CORS, and server configuration ([`travlr/app.js`](travlr/app.js)).
  - **RESTful API Service**: Exposes API endpoints under `/api/trips` supporting `GET`, `POST`, and `PUT` operations ([`travlr/app_api/`](travlr/app_api/)).

- **Frontend Layers**
  - **Customer Web Portal**: Server-side rendered (SSR) travel catalog built with Handlebars (`hbs`) templates (`http://localhost:3000/travel`).
  - **Administrative SPA**: Single Page Application built with Angular ([`travlr/app_admin`](travlr/app_admin)) running on `http://localhost:4200` (or statically mounted at `/admin`) for trip CRUD management.

- **Database & Container Infrastructure**
  - **MongoDB Database**: Document database storing trip schemas and records.
  - **Docker Containerization**: Containerized database service managed by Docker Compose ([`cs465-dev-env`](cs465-dev-env)) listening on `localhost:27017`.

---

## Architecture Overview

```
+-------------------------------------------------------------------------+
|                        Travlr Getaways Architecture                     |
+-------------------------------------------------------------------------+
|                                                                         |
|  +---------------------------+         +-----------------------------+  |
|  |   Customer Web Browser    |         |     Admin SPA Portal        |  |
|  |  (Handlebars /travel UI)  |         | (Angular 16+ app_admin)     |  |
|  +-------------+-------------+         +--------------+--------------+  |
|                |                                      |                 |
|                | HTTP GET                             | HTTP GET/POST/  |
|                v                                      |      PUT        |
|  +----------------------------------------------------+--------------+  |
|  |                      Express Server (:3000)                       |  |
|  |  +--------------------------+    +-----------------------------+  |  |
|  |  |  app_server (Handlebars) |    |  app_api (REST controllers) |  |  |
|  |  +--------------------------+    +--------------+--------------+  |  |
|  +-------------------------------------------------|-----------------+  |
|                                                    | Mongoose           |
|                                                    v                    |
|                                   +----------------------------------+  |
|                                   |  MongoDB Container (travlr DB)   |  |
|                                   |       (cs465-dev-env :27017)     |  |
|                                   +----------------------------------+  |
+-------------------------------------------------------------------------+
```

---

## Frontend Angular SPA Architecture (`app_admin`)

The administrative Single Page Application is located in [`travlr/app_admin`](travlr/app_admin) and features:

| Component / Module | Path | Description |
| :--- | :--- | :--- |
| **`TripListingComponent`** | [`travlr/app_admin/src/app/trip-listing/`](travlr/app_admin/src/app/trip-listing/) | Displays interactive trip list and provides triggers to add or edit trips. |
| **`TripCardComponent`** | [`travlr/app_admin/src/app/trip-card/`](travlr/app_admin/src/app/trip-card/) | Renders individual trip cards displaying image, price, resort, and description. |
| **`AddTripComponent`** | [`travlr/app_admin/src/app/add-trip/`](travlr/app_admin/src/app/add-trip/) | Reactive Form collecting trip details to create a new record via `POST /api/trips`. |
| **`EditTripComponent`** | [`travlr/app_admin/src/app/edit-trip/`](travlr/app_admin/src/app/edit-trip/) | Reactive Form pre-populated with existing trip data (via `localStorage` `tripCode`) to modify a trip record via `PUT /api/trips/:tripCode`. |
| **`NavbarComponent`** | [`travlr/app_admin/src/app/navbar/`](travlr/app_admin/src/app/navbar/) | Header navigation component for the SPA. |
| **`TripDataService`** | [`travlr/app_admin/src/app/services/trip-data.service.ts`](travlr/app_admin/src/app/services/trip-data.service.ts) | Angular `HttpClient` service consuming the Express REST API endpoints (`getTrips`, `getTrip`, `addTrip`, `updateTrip`). |
| **`AppRoutingModule`** | [`travlr/app_admin/src/app/app-routing.module.ts`](travlr/app_admin/src/app/app-routing.module.ts) | Angular Client-Side Router mapping `/list-trips`, `/add-trip`, `/edit-trip`. |

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

### Step 3: Build & Run the Angular SPA Admin Portal

1. Navigate to the `app_admin` directory:
   ```bash
   cd app_admin
   ```

2. Install Angular SPA dependencies:
   ```bash
   npm install
   ```

3. Build the Angular application for Express static serving:
   ```bash
   npm run build
   ```
   *(Or run standalone dev server via `ng serve` on `http://localhost:4200`)*

---

### Step 4: Start the Express Application Server

From the `travlr` directory, run:
```bash
npm start
```

The Express application will listen on **`http://localhost:3000`**.

---

## Available Application Routes

| Interface / API | URL | Description |
| :--- | :--- | :--- |
| **Public Customer Website** | `http://localhost:3000/travel` | Handlebars SSR travel trip catalog. |
| **Admin SPA Portal** | `http://localhost:4200/` or `http://localhost:3000/admin` | Angular SPA administrative management dashboard. |
| **REST API - Get All Trips** | `GET http://localhost:3000/api/trips` | Returns JSON array of all active trip records. |
| **REST API - Get Single Trip** | `GET http://localhost:3000/api/trips/:tripCode` | Returns JSON object of single trip matching `:tripCode`. |
| **REST API - Create Trip** | `POST http://localhost:3000/api/trips` | Inserts a new trip document into MongoDB. |
| **REST API - Update Trip** | `PUT http://localhost:3000/api/trips/:tripCode` | Updates existing trip document matching `:tripCode`. |

---

## Useful Commands

| Command | Working Directory | Action |
| :--- | :--- | :--- |
| `docker compose up -d` | `cs465-dev-env/` | Start local MongoDB container |
| `docker compose down` | `cs465-dev-env/` | Stop local MongoDB container |
| `node app_api/models/seed.js` | `travlr/` | Seed initial database trip records |
| `npm start` | `travlr/` | Start Express backend server on port 3000 |
| `npm run build` | `travlr/app_admin/` | Build Angular SPA distribution bundle |
| `ng serve` | `travlr/app_admin/` | Start Angular SPA dev server on port 4200 |
