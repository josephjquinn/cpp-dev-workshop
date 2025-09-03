const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const readCounter = () => {
  try {
    const filePath = path.join(__dirname, "data.txt");
    const fileContent = fs.readFileSync(filePath, "utf8");
    return parseInt(fileContent.trim()) || 0;
  } catch (error) {
    return 0;
  }
};

const writeCounter = (value) => {
  try {
    const filePath = path.join(__dirname, "data.txt");
    fs.writeFileSync(filePath, value.toString());
    return true;
  } catch (error) {
    return false;
  }
};

app.get("/api/counter", (req, res) => {
  const counter = readCounter();
  res.json({ counter: counter });
});

app.post("/api/counter/increment", (req, res) => {
  const counter = readCounter();
  const newCounter = counter + 1;
  writeCounter(newCounter);
  res.json({ counter: newCounter });
});

app.post("/api/counter/decrement", (req, res) => {
  const counter = readCounter();
  const newCounter = counter - 1;
  writeCounter(newCounter);
  res.json({ counter: newCounter });
});

app.post("/api/counter/reset", (req, res) => {
  writeCounter(0);
  res.json({ counter: 0 });
});

app.listen(PORT, () => {
  console.log("🚀 Server running on http://localhost:5000");
  console.log("📡 Try: http://localhost:5000/api/counter");
});
