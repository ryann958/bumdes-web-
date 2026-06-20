const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');
const { verifyToken, requireRole } = require('../middlewares/authMiddleware');

// Public route to get products for Lapak BUMDes
router.get('/', produkController.getAllProduk);

// Protected route for Admins to add products
router.post('/', verifyToken, requireRole(['SuperAdmin', 'Editor']), produkController.createProduk);

module.exports = router;
