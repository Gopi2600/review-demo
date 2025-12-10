// routes/user.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user"); // 3. Import the controller logic

// This endpoint is used to fetch all users (GET /api/users)
router.get("/", userController.getAllUsers);

// NOTE: We will add the POST route for creating a user here later, in the feature branch.

module.exports = router;
