const prisma = require('../config/db');

// Get all financial reports (for Warga dashboard)
const getLaporanKeuangan = async (req, res) => {
  try {
    const laporan = await prisma.laporan_Keuangan.findMany({
      orderBy: [
        { tahun: 'desc' },
        { bulan: 'desc' }
      ]
    });
    res.json(laporan);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server', error: error.message });
  }
};

// Add financial report (SuperAdmin or Bendahara only)
const createLaporan = async (req, res) => {
  const { bulan, tahun, total_pendapatan, total_pengeluaran, file_pdf_url } = req.body;
  try {
    const laporan = await prisma.laporan_Keuangan.create({
      data: {
        bulan: parseInt(bulan),
        tahun: parseInt(tahun),
        total_pendapatan: parseFloat(total_pendapatan),
        total_pengeluaran: parseFloat(total_pengeluaran),
        file_pdf_url
      }
    });
    res.status(201).json({ message: 'Laporan keuangan berhasil ditambahkan', laporan });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server', error: error.message });
  }
};

module.exports = { getLaporanKeuangan, createLaporan };
