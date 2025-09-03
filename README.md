# React + Node.js Tutorial - Extremely Simple App

This tutorial will guide you through creating the simplest possible full-stack application using React for the frontend and Node.js with Express for the backend.

## What We're Building

A simple counter app where:

- The React frontend displays a counter with increment/decrement buttons
- The Node.js backend stores the counter value in a text file and provides API endpoints
- Counter state persists between server restarts (stored in file)
- Everything runs locally with minimal setup

## Project Structure

```
cpp-dev-workshop/
├── README.md              # This tutorial
├── backend/               # Node.js server
│   ├── package.json
│   ├── server.js
│   └── data.txt           # Text file storing counter value
├── frontend/              # React app
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       └── index.js
└── SETUP.md               # Step-by-step setup guide
```

## Prerequisites

Before starting, make sure you have:

- Node.js installed (version 14 or higher)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## Quick Start

1. Clone this repository
2. Follow the instructions in `SETUP.md`
3. Start the backend server
4. Start the React frontend
5. Open your browser and see the magic! ✨

## What You'll Learn

- How to set up a basic Node.js/Express server with multiple API endpoints
- How to create a React application with state management and user interactions
- How to make GET and POST API calls from React to Node.js
- How to persist data using file storage
- How to run both frontend and backend simultaneously

## Files Overview

- `backend/server.js` - Express server with counter API endpoints (GET, POST)
- `backend/data.txt` - Text file storing the current counter value
- `frontend/src/App.js` - React component with counter display and control buttons
- `frontend/src/index.js` - React app entry point
- Package.json files with minimal dependencies

This is intentionally kept as simple as possible to demonstrate the core concepts without overwhelming beginners!
