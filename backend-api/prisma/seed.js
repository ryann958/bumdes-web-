const prisma = require('../src/prismaClient');

async function main() {
  // Bersihkan data lama
  await prisma.produk.deleteMany({});
  await prisma.laporan_Keuangan.deleteMany({});

  // Seed Produk
  const produkData = [
    { nama_produk: "Tepung Sagu Asli Meranti", deskripsi: "Tepung sagu berkualitas khas Meranti", harga: 15000, stok: 500, pemilik_umkm: "Kelompok Tani Sagu", gambar_url: "https://images.unsplash.com/photo-1596647413000-88094d4d101d?q=80&w=800" },
    { nama_produk: "Mie Sagu Khas Riau", deskripsi: "Mie sagu lezat dan kenyal", harga: 12000, stok: 150, pemilik_umkm: "Ibu Fatimah", gambar_url: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800" },
    { nama_produk: "Ikan Salai Selais", deskripsi: "Ikan salai asap khas sungai", harga: 85000, stok: 50, pemilik_umkm: "Nelayan Pulau Merbau", gambar_url: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?q=80&w=800" },
    { nama_produk: "Kopi Liberika Meranti", deskripsi: "Kopi dengan cita rasa unik rawa gambut", harga: 45000, stok: 120, pemilik_umkm: "Koperasi Desa", gambar_url: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800" },
    { nama_produk: "Kerajinan Anyaman Pandan", deskripsi: "Tikar dan tas anyaman tradisional", harga: 120000, stok: 20, pemilik_umkm: "Sanggar Seni Ketapang", gambar_url: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800" },
    { nama_produk: "Lempeng Sagu Basah", deskripsi: "Jajanan tradisional lumer di mulut", harga: 10000, stok: 80, pemilik_umkm: "Warung Kak Ros", gambar_url: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800" }
  ];

  for (const p of produkData) {
    await prisma.produk.create({ data: p });
  }

  // Seed Laporan Keuangan
  const laporanData = [
    { bulan: 1, tahun: 2024, total_pendapatan: 20000000, total_pengeluaran: 12000000 },
    { bulan: 2, tahun: 2024, total_pendapatan: 25000000, total_pengeluaran: 15000000 },
    { bulan: 3, tahun: 2024, total_pendapatan: 22000000, total_pengeluaran: 14000000 },
    { bulan: 4, tahun: 2024, total_pendapatan: 30000000, total_pengeluaran: 18000000 },
    { bulan: 5, tahun: 2024, total_pendapatan: 28000000, total_pengeluaran: 16000000 },
  ];

  for (const l of laporanData) {
    await prisma.laporan_Keuangan.create({ data: l });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
