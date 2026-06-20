# Product Requirements Document (PRD): Platform Web BUMDes & Desa Digital

Dokumen ini merangkum kebutuhan produk secara spesifik untuk pengembangan website BUMDes berdesain Neumorphism, mengacu pada standar tata kelola desa modern dan kebutuhan digitalisasi UMKM/Pariwisata desa.

## 1. Visi & Tujuan
Menciptakan portal digital terpadu yang tidak hanya berfungsi sebagai kartu nama desa, tetapi juga sebagai motor penggerak ekonomi (Lapak BUMDes) dan sarana transparansi (Dashboard Siskeu Desa), dikemas dalam antarmuka yang modern, bersih, dan sangat mudah digunakan (user-friendly).

## 2. Target Pengguna (User Personas)
* Pengunjung Umum / Wisatawan: Mencari informasi potensi desa, jadwal kegiatan, dan membeli produk/paket wisata secara mudah.
* Warga Desa / Pelaku UMKM: Memantau penggunaan anggaran desa, membaca berita terbaru, dan menggunakan platform untuk mempromosikan barang dagangannya.
* Pengurus BUMDes (Admin): Mengelola inventaris produk, mengunggah laporan keuangan (Siskeu BUMDes), memverifikasi UMKM, dan membuat artikel kegiatan.

## 3. Spesifikasi Fitur Utama (Core Features)

| Modul | Deskripsi Fungsionalitas | Prioritas |
| :--- | :--- | :--- |
| **1. Profil & Potensi Desa** | Halaman statis memuat Sejarah, Visi Misi, Struktur Organisasi, Peta Interaktif, dan Potensi Desa (Agrikultur, Budaya). | Kritis |
| **2. Lapak BUMDes (E-Commerce)** | Katalog produk UMKM lokal (Kerajinan, Makanan). Terdapat fitur kompresi gambar otomatis (WebP) agar web tetap ringan. Integrasi pemesanan via formulir WhatsApp untuk kemudahan. | Kritis |
| **3. Transparansi & Siskeu** | Dashboard khusus menampilkan grafik Realisasi APBDes, Neraca Laba/Rugi BUMDes, dan infografis PAD (Pendapatan Asli Desa). | Tinggi |
| **4. Wisata Desa (Booking)** | Katalog destinasi wisata, kalender event budaya, dan fitur pemesanan tiket masuk atau homestay. | Tinggi |
| **5. Portal Berita & Layanan** | Blog untuk publikasi kegiatan BUMDes, pengumuman, dan layanan formulir administrasi mandiri. | Menengah |

## 4. Panduan Antarmuka (UI/UX) - Tema Neumorphism
* Navigasi Sederhana: Maksimal 6 menu utama di Header (Beranda, Profil, Lapak, Wisata, Transparansi, Kontak).
* Warna (Color Palette): Menggunakan Soft Background `#E0E5EC`. Elemen kartu (card) dan tombol dibuat timbul (extruded) dengan manipulasi drop-shadow putih dan abu-abu khas Neumorphism.
* Tipografi: Huruf sans-serif (seperti Inter atau Poppins) yang mudah dibaca dengan kontras teks `#313A46`.
* Mobile-First: 80% akses pedesaan menggunakan smartphone, antarmuka wajib responsif tanpa elemen berat yang menunda loading halaman.