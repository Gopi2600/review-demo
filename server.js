// server.js

const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/user"); // 2. Import the user router

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// --- Routes ---
// Base route for API health check
app.get("/", (req, res) => {
  res.status(200).send({ message: "User API Service is running." });
});

// 1. Use the User Router for all /api/users endpoints
app.use("/api/users", userRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something broke!", error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
