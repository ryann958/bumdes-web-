# README Master & Panduan Pengembangan Proyek

Dokumen dasar yang akan disematkan pada Root Directory Repositori (GitHub/GitLab) sebagai panduan Onboarding pengembang proyek Web BUMDes.

## 1. Identitas Proyek
Nama Proyek   : Portal BUMDes Digital (Tema Neumorphism)
Versi         : 1.0.0-MVP
Tech Stack    : Next.js (Frontend), Node.js/Express (Backend), PostgreSQL (DB)
Pengembang    : RDev Studio

## 2. Struktur Direktori Utama
bumdes-workspace/
├── docs/                 # Menyimpan PRD, Workflow, Arsitektur (File ini)
├── backend-api/          # Logika server, integrasi database, & keamanan
│   ├── src/
│   │   ├── controllers/  # Logika bisnis (Lapak, Berita, Siskeu)
│   │   ├── middlewares/  # JWT Auth, Rate Limiter
│   │   ├── models/       # Skema Database PostgreSQL
│   │   └── routes/       # Definisi endpoint API
│   └── package.json
└── frontend-web/         # Tampilan UI Next.js Neumorphism
    ├── src/
    │   ├── app/          # Next.js App Router (Beranda, Profil, Lapak, Transparansi)
    │   ├── components/   # Tombol, Kartu, Navbar Neumorphism
    │   ├── config/       # Konfigurasi konstanta & API URL
    │   └── utils/        # Helper functions & formatter
    ├── public/           # Aset gambar & ikon SVG
    └── package.json

## 3. Panduan Instalasi Lokal (Quick Start)

### Prasyarat
* Node.js (v18+)
* PostgreSQL (v14+) berjalan di port lokal 5432.

### Langkah-langkah
1. Kloning repositori ini ke dalam direktori lokal.
2. Setup Database: Buat database di PostgreSQL dengan nama `bumdes_db`.
3. Setup Backend:
   ```bash
   cd backend-api
   npm install
   cp .env.example .env
   # Atur DATABASE_URL di dalam file .env
   npm run dev