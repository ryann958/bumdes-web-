# Arsitektur Teknis & Standar Keamanan Web BUMDes

Rincian tumpukan teknologi (Tech Stack), struktur basis data, serta kebijakan keamanan ketat yang melindungi data warga dan transaksi BUMDes.

## 1. Technology Stack (Tumpukan Teknologi)
* Frontend (Client-side): Next.js (React Framework). Dipilih karena performa SSR (Server-Side Rendering) yang kuat untuk SEO Lapak BUMDes dan kecepatan loading di koneksi desa yang mungkin lambat.
* Styling UI: Tailwind CSS. Custom config untuk memfasilitasi kelas bayangan (shadow) khusus Neumorphism.
* Backend (API & Logic): Node.js dengan framework Express.js. Ringan dan memiliki asinkronisitas tinggi.
* Database: PostgreSQL. Database relasional tangguh untuk menyimpan transaksi, data UMKM, dan log keuangan.
* Image Hosting/Processing: Cloudinary atau kompresi lokal Sharp untuk mengubah semua file JPG/PNG ke format WEBP untuk efisiensi kuota data pengunjung.

## 2. Desain Database Inti (Skema Relasional)

Table: Users (Admin/Perangkat Desa)
- id (UUID)
- nama_lengkap (Varchar)
- username (Varchar)
- password_hash (Varchar)
- role (Enum: 'SuperAdmin', 'Editor', 'Bendahara')

Table: Produk (Lapak BUMDes)
- id (UUID)
- nama_produk (Varchar)
- deskripsi (Text)
- harga (Decimal)
- stok (Int)
- pemilik_umkm (Varchar)
- gambar_url (Varchar)

Table: Laporan_Keuangan
- id (UUID)
- bulan (Int)
- tahun (Int)
- total_pendapatan (Decimal)
- total_pengeluaran (Decimal)
- file_pdf_url (Varchar - opsional)

## 3. Standar Keamanan Sistem (Security Policy)
Karena web BUMDes menangani data APBDes dan informasi desa, keamanan tidak boleh diremehkan:
1. Autentikasi Terenkripsi: Kata sandi admin di-hash menggunakan Bcrypt dengan parameter salt yang tinggi. Autentikasi sesi menggunakan JWT (JSON Web Tokens) dengan masa berlaku (expiry time) yang ketat.
2. Role-Based Access Control (RBAC): 'Editor' tidak bisa mengubah data 'Laporan_Keuangan'. Modul keuangan hanya bisa diakses oleh role 'Bendahara' atau 'SuperAdmin'.
3. Sanitasi Input: Mencegah SQL Injection & XSS (Cross-Site Scripting) pada formulir pengaduan warga atau pencarian produk dengan library validasi seperti express-validator.
4. Proteksi Brute-Force: Fitur Login dibatasi maksimal 5 kali percobaan gagal per IP menggunakan middleware express-rate-limit. Jika melebihi, IP akan diblokir sementara selama 15 menit.