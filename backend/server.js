const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Import Routes
const authRoutes = require('./routes/auth');      // login, register
const patientRoutes = require('./routes/patient'); // patients list, add patient etc.

// Initialize App
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// API Routes (This is the correct place)
app.use('/api', authRoutes);       // → /api/login, /api/register
app.use('/api', patientRoutes);    // → /api/patients

// Fallback for frontend SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});