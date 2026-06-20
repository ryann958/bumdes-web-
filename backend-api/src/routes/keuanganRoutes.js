const express = require('express');
const router = express.Router();
const keuanganController = require('../controllers/keuanganController');
const { verifyToken, requireRole } = require('../middlewares/authMiddleware');

// Public route to get financial data
router.get('/', keuanganController.getLaporanKeuangan);

// Protected route for adding financial reports (Only SuperAdmin & Bendahara)
router.post('/', verifyToken, requireRole(['SuperAdmin', 'Bendahara']), keuanganController.createLaporan);

module.exports = router;
