const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let counter = 0;

app.get("/", (req, res) => {
  res.send("Welcome to the Counter API! Try /counter to get started.");
});

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

app.post("/counter/increment", (req, res) => {
  counter++;
  res.json({ counter: counter });
});

app.post("/counter/decrement", (req, res) => {
  counter--;
  res.json({ counter: counter });
});

app.post("/counter/reset", (req, res) => {
  counter = 0;
  res.json({ counter: counter });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
