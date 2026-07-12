# Travlr - Baseline Express Website

## Introduction

This is the baseline static website for the Travlr project, built as part of CS 465 Full Stack MEAN Development. It's a simple, clean HTML/CSS site that serves as the foundation for the rest of the course. Think of it as step zero before we add all the dynamic stuff. All you need is Node.js, npm, and a couple of terminal commands to get it running locally.

---

![Travlr Website Screenshot](./screenshot-placeholder.png)

---

## Getting Started

### Prerequisites

Make sure you have these installed on your machine:
- **Node.js** (v18 or higher) 

Quick verification:
```powershell
node --version
```

### Setup & Run Locally

1. **Clone or navigate to the project**
   ```powershell
   git clone https://github.com/uturuncuayaku/CS-465.git
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Start the development server**
   ```powershell
   python -m http.server 8000
   ```
   
4. **Open in your browser**
   ```
   http://localhost:8000/public/
   ```

5. **Stop the server**
   ```
   Ctrl + C
   ```

---

## What's Included

- **index.html** - Main landing page with navigation and hero section
- **css/style.css** - Styling with gradient backgrounds and responsive layout
- **images/** - Image assets for the site
- **package.json** - Project configuration for npm

---

## Summary

We now have the baseline Travlr website running locally. It's a static site for now, which means it's just HTML and CSS—no backend logic yet. In the next module, we'll add Express to make it dynamic with routes and database connections. For now, this gives us a solid foundation and verifies that our development environment is set up correctly.

---

## Troubleshooting

**Port 8000 already in use?**
```powershell
python -m http.server 8001
```
Just use a different port.

**Server won't start?**
Make sure you're in the correct directory (`travlr/`) and that you have Node.js installed.

**Changes not showing up?**
Try a hard refresh in your browser (Ctrl+Shift+R or Cmd+Shift+R on Mac).
