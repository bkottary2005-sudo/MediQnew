const express = require('express');
const router = express.Router();

/**
 * POST /api/login
 * Accepts username + password
 * Responds with user profile on success
 */
router.post('/login', (req, res) => {
  const { username, password, google } = req.body;

  const DEMO_USERNAME = "user";
  const DEMO_PASSWORD = "pass";

  if (google === true) {
    return res.json({
      success: true,
      user: { id: "P-73519", name: "John A. Doe", role: "patient" }
    });
  }

  if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
    return res.json({
      success: true,
      user: { id: "P-73519", name: "John A. Doe", role: "patient" }
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid username or password"
  });
});

module.exports = router;
