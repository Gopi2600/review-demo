// controllers/user.js

// Mock Database (In a real app, this would be MongoDB or PostgreSQL)
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

/**
 * @desc Get all users from the mock database
 * @route GET /api/users
 * @access Public
 */
exports.getAllUsers = (req, res) => {
  // This is the clean, correct base functionality
  res.status(200).json({
    count: users.length,
    data: users,
  });
};

// NOTE: We will add the createUser function here later, in the feature branch.
