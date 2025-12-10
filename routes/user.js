// routes/user.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", userController.getAllUsers);

// NEW: Adding the route for creating a user.
// NOTE: We are setting a status code hint here, which is sometimes bad practice!
router.post("/", userController.createUser, (req, res) => {
  res
    .status(201)
    .json({ message: "User created successfully (Route level hint)." });
});

module.exports = router;
