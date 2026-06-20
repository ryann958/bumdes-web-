# Dokumen Workflow: Alur Pengguna & Sistem Web BUMDes

Dokumen ini memetakan langkah-langkah interaksi pengguna untuk fitur-fitur utama di dalam sistem Web BUMDes, dari awal hingga akhir proses.

## 1. Workflow Lapak BUMDes (Pembelian Produk UMKM)
1. Eksplorasi Katalog: Pembeli membuka halaman "Lapak BUMDes" dan melihat produk yang ditampilkan menggunakan Neumorphic Cards.
2. Detail & Filter: Pembeli memfilter berdasarkan kategori (Misal: Olahan Pangan, Kerajinan). Klik produk memunculkan detail harga, stok, dan deskripsi.
3. Proses Checkout (Sederhana): Pembeli menekan tombol "Beli Sekarang". Sistem tidak memaksa pembeli membuat akun (Guest Checkout).
4. Integrasi WhatsApp: Sistem mengumpulkan data pesanan (Nama Barang, Jumlah) dan mengarahkannya (redirect) ke WhatsApp resmi Admin BUMDes dengan pesan format template (Misal: "Halo BUMDes, saya ingin memesan Kopi Robusta Desa...").
5. Penyelesaian: Transaksi dibayar secara transfer/COD atas kesepakatan via WhatsApp. Admin BUMDes mengubah status stok barang melalui CMS Dashboard.

## 2. Workflow Transparansi Keuangan (Dashboard Warga)
1. Upload Data (Admin): Bendahara BUMDes masuk ke Dashboard Admin, memasukkan angka realisasi anggaran bulanan atau mengunggah PDF Siskeu.
2. Sistem Generator Grafik: Backend memproses angka tersebut menjadi visualisasi grafik (Bar Chart/Pie Chart).
3. Akses Warga: Warga membuka menu "Transparansi".
4. Pemantauan: Warga melihat infografis yang mudah dipahami tentang pendapatan unit usaha BUMDes tanpa perlu mengerti ilmu akuntansi kompleks.

## 3. Workflow Publikasi Berita Kegiatan
1. Akses Editor: Perangkat BUMDes login ke sistem CMS.
2. Penulisan: Membuat artikel baru, mengunggah foto kegiatan (sistem otomatis melakukan kompresi ukuran maksimal 200KB per gambar menjadi format WebP).
3. Publish: Artikel diterbitkan dan langsung tampil di "Hero Section" halaman Beranda serta dibagikan otomatis ke grup sosial warga jika API diaktifkan.