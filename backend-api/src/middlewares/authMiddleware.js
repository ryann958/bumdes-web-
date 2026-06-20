const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Token tidak disediakan' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'rahasia_bumdes_super_aman');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token tidak valid atau kadaluarsa' });
  }
};

const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Akses ditolak: Peran tidak diizinkan' });
    }
    next();
  };
};

module.exports = { verifyToken, requireRole };
