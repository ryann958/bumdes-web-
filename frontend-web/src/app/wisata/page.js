'use client';

import Navbar from "@/components/Header";
import Card from "@/components/UiCard";
import Button from "@/components/Button";
import ScrollSlide from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function Wisata() {
  const destinasiWisata = [
    {
      id: 1,
      nama: "Hutan Mangrove Permai",
      deskripsi: "Kawasan ekowisata asri yang menenangkan, sangat cocok untuk wisata edukasi keluarga dan berfoto.",
      gambar: "https://images.unsplash.com/photo-1624613247065-1d4dbdfebbc1?q=80&w=800",
      harga_tiket: "Rp 10.000",
      fasilitas: ["Area Parkir", "Spot Foto", "Gazebo", "Toilet"]
    },
    {
      id: 2,
      nama: "Pemancingan Muara",
      deskripsi: "Nikmati sensasi memancing ikan air payau dengan pemandangan muara sungai yang indah saat matahari terbenam.",
      gambar: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800",
      harga_tiket: "Mulai Rp 20.000",
      fasilitas: ["Sewa Alat Pancing", "Perahu Karet", "Kantin", "Area Parkir"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <FadeIn className="text-center mb-10 md:mb-16 mt-4 md:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 md:mb-6">Destinasi Wisata Desa</h1>
          <p className="text-base md:text-xl text-foreground/80 max-w-2xl mx-auto px-2">
            Jelajahi keindahan alam pesisir dan lahan gambut yang dikelola langsung oleh BUMDes Ketapang Permai.
          </p>
        </FadeIn>

        <div className="space-y-8 md:space-y-12">
          {destinasiWisata.map((wisata, index) => (
            <ScrollSlide key={wisata.id} delay={index * 0.1}>
              <Card className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-6 overflow-hidden">
                <div className="w-full md:w-5/12 aspect-[4/3] rounded-2xl overflow-hidden shadow-neumorphic-inset relative group">
                  <img src={wisata.gambar} alt={wisata.nama} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-blue-600 text-xs md:text-sm font-bold shadow">
                    Ekowisata
                  </div>
                </div>
                
                <div className="w-full md:w-7/12 flex flex-col pt-2 md:py-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{wisata.nama}</h2>
                  <p className="text-foreground/80 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed flex-1">
                    {wisata.deskripsi}
                  </p>
                  
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wider">Fasilitas Tersedia:</h3>
                    <div className="flex flex-wrap gap-2">
                      {wisata.fasilitas.map((fasilitas, i) => (
                        <span key={i} className="text-xs md:text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-lg border border-blue-100">
                          {fasilitas}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto pt-4 border-t border-gray-100">
                    <div className="text-center sm:text-left w-full sm:w-auto">
                      <span className="block text-xs md:text-sm text-foreground/60 mb-1">Tiket Masuk / Biaya</span>
                      <span className="text-xl md:text-2xl font-bold text-blue-600">{wisata.harga_tiket}</span>
                    </div>
                    <Button className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white shadow-none hover:shadow-neumorphic-inset">
                      Pesan Tiket Sekarang
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollSlide>
          ))}
        </div>
        
        {/* Banner Ajakan */}
        <FadeIn delay={0.3} className="mt-12 md:mt-20">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 md:p-12 text-center text-white shadow-neumorphic relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ingin berkolaborasi dalam pengelolaan wisata?</h2>
              <p className="text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
                BUMDes membuka peluang kerjasama bagi investor maupun kelompok masyarakat yang ingin mengembangkan potensi pariwisata di Ketapang Permai.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-50 shadow-none px-6 py-3 md:px-8 md:py-4">
                Hubungi Pengurus BUMDes
              </Button>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
