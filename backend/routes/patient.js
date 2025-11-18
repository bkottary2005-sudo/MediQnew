const express = require('express');
const router = express.Router();

// Temporary in-memory data:
let appointments = [
  { id: 1, patientId: "P-73519", specialist: "Cardiology", date: "2025-11-15", time: "10:30 AM" },
  { id: 2, patientId: "P-73519", specialist: "Dermatology", date: "2025-11-20", time: "2:00 PM" }
];

let billing = [
  { id: 1, patientId: "P-73519", invoice: "INV-1001", amount: 2000, status: "unpaid" },
  { id: 2, patientId: "P-73519", invoice: "INV-1002", amount: 1500, status: "paid" }
];

// GET /api/appointments
router.get('/appointments', (req, res) => {
  res.json(appointments);
});

// POST /api/appointments
router.post('/appointments', (req, res) => {
  const { patientId, specialist, date, time } = req.body;

  if (!patientId || !specialist || !date || !time) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const newAppointment = {
    id: appointments.length + 1,
    patientId,
    specialist,
    date,
    time
  };

  appointments.push(newAppointment);
  res.json({ success: true, appointment: newAppointment });
});

// GET /api/billing
router.get('/billing', (req, res) => {
  res.json(billing);
});

module.exports = router;
