const prisma = require('../config/db');

// Get all products
const getAllProduk = async (req, res) => {
  try {
    const produk = await prisma.produk.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(produk);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server', error: error.message });
  }
};

// Create a new product (Admin only)
const createProduk = async (req, res) => {
  const { nama_produk, deskripsi, harga, stok, pemilik_umkm, gambar_url } = req.body;
  try {
    const newProduk = await prisma.produk.create({
      data: {
        nama_produk,
        deskripsi,
        harga: parseFloat(harga),
        stok: parseInt(stok),
        pemilik_umkm,
        gambar_url
      }
    });
    res.status(201).json({ message: 'Produk berhasil ditambahkan', produk: newProduk });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server', error: error.message });
  }
};

module.exports = { getAllProduk, createProduk };
