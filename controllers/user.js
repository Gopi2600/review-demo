/**
 * @desc Create a new user (with an intentional security flaw)
 * @route POST /api/users
 * @access Public
 */
exports.createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  // --- 🐛 INTENTIONAL DEFECT: MISSING VALIDATION/SANITIZATION ---
  // A real application must validate that name and email are present and sanitize them.
  // If the 'email' field is empty, this will still push an invalid user object.

  // We are deliberately skipping checks like:
  // 1. If (name || email) is missing.
  // 2. Email format validation.
  // 3. XSS/SQL Injection sanitization on 'name' or 'email'.

  const newUser = {
    id: users.length + 1,
    name: name, // ⚠️ Vulnerable point 1: Unsanitized input
    email: email, // ⚠️ Vulnerable point 2: Unvalidated and unsanitized input
    passwordHash: "dummy_hash",
  };

  users.push(newUser);

  // The status code here (200) conflicts with the route file (201).
  res.status(200).json({
    success: true,
    data: newUser,
  });
};

/**
 * @desc Create a new user (with an intentional security flaw)
 * @route POST /api/users
 * @access Public
 */
exports.createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  // --- 🐛 INTENTIONAL DEFECT: MISSING VALIDATION/SANITIZATION ---
  // A real application must validate that name and email are present and sanitize them.
  // If the 'email' field is empty, this will still push an invalid user object.

  // We are deliberately skipping checks like:
  // 1. If (name || email) is missing.
  // 2. Email format validation.
  // 3. XSS/SQL Injection sanitization on 'name' or 'email'.

  const newUser = {
    id: users.length + 1,
    name: name, // ⚠️ Vulnerable point 1: Unsanitized input
    email: email, // ⚠️ Vulnerable point 2: Unvalidated and unsanitized input
    passwordHash: "dummy_hash",
  };

  users.push(newUser);

  // The status code here (200) conflicts with the route file (201).
  res.status(200).json({
    success: true,
    data: newUser,
  });
};
