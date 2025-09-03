# Step-by-Step Setup Guide

Follow these instructions to get your React + Node.js app running locally.

## Prerequisites Check

Before you start, verify you have Node.js installed:

```bash
node --version
npm --version
```

If you don't have Node.js, download it from [nodejs.org](https://nodejs.org/) (LTS version recommended).

## Step 1: Clone and Navigate

```bash
git clone <your-repo-url>
cd cpp-dev-workshop
```

## Step 2: Set Up the Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

You should see:

```
🚀 Backend server running on http://localhost:5000
📡 API available at http://localhost:5000/api/hello
```

**Keep this terminal open!** The backend needs to stay running.

## Step 3: Set Up the Frontend

1. Open a **new terminal** and navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

Your browser should automatically open to `http://localhost:3000`. If not, open it manually.

## Step 4: Verify Everything Works

You should see:

- A beautiful card with the title "🔢 Simple Counter App"
- A large counter display showing the current value (loaded from `data.txt`)
- Buttons to increment, decrement, reset, and refresh the counter
- A green checkmark saying the counter is synced with the backend

## Troubleshooting

### "Failed to fetch data from backend"

- Make sure your backend server is running on port 5000
- Check that you can access `http://localhost:5000/api/counter` in your browser

### "npm install" fails

- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- Make sure you're using a recent version of Node.js (14+)

### Port already in use

- If port 3000 or 5000 is busy, the terminal will suggest alternative ports
- Accept the suggested port or kill the process using that port

## What's Happening?

1. **Backend (Node.js + Express)**:

   - Runs on `http://localhost:5000`
   - Serves counter API endpoints at `/api/counter/*`
   - Stores counter value in `data.txt` file and provides API endpoints to read/modify it

2. **Frontend (React)**:

   - Runs on `http://localhost:3000`
   - Makes HTTP requests to the backend API
   - Displays the response in a nice UI

3. **Communication**:
   - React uses `fetch()` with GET and POST requests to call the Node.js API
   - CORS is enabled so the browser allows cross-origin requests
   - Data flows: React → HTTP Request → Node.js → File I/O → JSON Response → React
   - Counter state persists in the file between server restarts

## Next Steps

Once you have this working, try:

- Manually editing the counter value in `backend/data.txt` and refreshing
- Changing the styling in `frontend/src/App.js` (colors, fonts, layout)
- Adding new API endpoints (like setting the counter to a specific value)
- Adding more React components (history of counter changes, etc.)

## File Structure Explained

```
backend/
├── package.json    # Backend dependencies (express, cors)
├── server.js       # Express server with API endpoints
└── data.txt        # Text file storing the counter value

frontend/
├── package.json    # Frontend dependencies (react, react-dom)
├── public/
│   └── index.html  # HTML template
└── src/
    ├── index.js    # React app entry point
    └── App.js      # Main React component
```

That's it! You now have a working full-stack application. 🎉
