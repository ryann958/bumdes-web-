const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const rateLimit = require('express-rate-limit');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware: Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Terlalu banyak permintaan dari IP ini, coba lagi nanti.'
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  message: 'Terlalu banyak percobaan login, coba lagi setelah 15 menit.'
});

// Middlewares
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data
app.use(limiter);

// Import Routes
const authRoutes = require('./src/routes/authRoutes');
const produkRoutes = require('./src/routes/produkRoutes');
const keuanganRoutes = require('./src/routes/keuanganRoutes');

// Use Routes
app.use('/api/auth', loginLimiter, authRoutes);
app.use('/api/produk', produkRoutes);
app.use('/api/keuangan', keuanganRoutes);

// Basic Route for Testing
app.get('/', (req, res) => {
  res.json({ message: 'Selamat datang di API Web BUMDes' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
