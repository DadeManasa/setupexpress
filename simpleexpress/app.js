// app.js
import express from "express";

const app = express();
const PORT = 5000;

;

/**
 * 1. Simple root route
 */
app.get("/", (req, res) => {
  res.send("Hello world");
});

/**
 * 2. Example GET route with plain response
 */
app.get("/get", (req, res) => {
  res.json({ message: "The global webpage" });
});


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

/**
 * 1. Simple root route
 */
app.get("/", (req, res) => {
  res.send("Rigister");
});

/**
 * 2. Example GET route with plain response
 */
app.get("/register", (req, res) => {
  res.json({ message: "The registration webpage" });
});


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});