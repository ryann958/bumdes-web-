'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Header";
import Button from "@/components/Button";
import Card from "@/components/UiCard";
import ScrollSlide from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { API_BASE_URL } from "@/config/api";
import { formatRupiah } from "@/utils/format";

export default function Lapak() {
  const [produkList, setProdukList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/produk`)
      .then(res => res.json())
      .then(data => {
        setProdukList(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch produk:", err);
        setLoading(false);
      });
  }, []);

  const handlePesanWhatsApp = (produk) => {
    const nomorWA = "6281234567890"; 
    const pesan = `Halo BUMDes, saya ingin memesan:\n\nNama Produk: ${produk.nama_produk}\nHarga: ${formatRupiah(produk.harga)}\n\nMohon informasi ketersediaan dan total pembayarannya.`;
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        {/* Header Section */}
        <FadeIn className="relative rounded-3xl overflow-hidden shadow-neumorphic mb-8 md:mb-12 h-48 md:h-80 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Pasar Tradisional" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/40 mix-blend-multiply"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 md:mb-4 drop-shadow-lg">Lapak BUMDes</h1>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Dukung perekonomian desa dengan membeli produk asli buatan UMKM lokal.
            </p>
          </div>
        </FadeIn>

        {/* Filter / Kategori Dummy */}
        <ScrollSlide className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-10 justify-center">
          <Button className="!py-2 !px-4 text-xs md:text-sm bg-blue-500 text-white shadow-none">Semua</Button>
          <Button className="!py-2 !px-4 text-xs md:text-sm">Makanan & Minuman</Button>
          <Button className="!py-2 !px-4 text-xs md:text-sm">Kerajinan</Button>
          <Button className="!py-2 !px-4 text-xs md:text-sm">Kesehatan</Button>
          <Button className="!py-2 !px-4 text-xs md:text-sm">Bahan Pokok</Button>
        </ScrollSlide>

        {/* Grid Produk */}
        {loading ? (
          <div className="text-center py-20 text-blue-500 font-bold animate-pulse">Memuat data katalog produk...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {produkList.map((produk, index) => (
              <ScrollSlide key={produk.id} delay={index * 0.1}>
                <Card className="h-full flex flex-col group p-4 border border-transparent hover:border-blue-100 transition-colors">
                  <div className="h-48 md:h-56 w-full rounded-xl mb-4 overflow-hidden shadow-neumorphic-inset relative">
                    <img src={produk.gambar_url || "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800"} alt={produk.nama_produk} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded text-blue-600 shadow">
                      Produk Desa
                    </div>
                  </div>
                  <div className="flex-1 px-2">
                    <h3 className="text-lg md:text-xl font-bold mt-1 mb-1 text-foreground line-clamp-1">{produk.nama_produk}</h3>
                    <p className="text-foreground/70 text-xs md:text-sm mb-4">Oleh: <span className="font-semibold text-blue-500">{produk.pemilik_umkm}</span></p>
                  </div>
                  <div className="mt-auto px-2">
                    <div className="flex justify-between items-center mb-4 md:mb-5">
                      <span className="text-xl md:text-2xl font-extrabold text-foreground">{formatRupiah(produk.harga)}</span>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">Stok: {produk.stok}</span>
                    </div>
                    <Button 
                      className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] shadow-none hover:shadow-neumorphic-inset flex items-center justify-center gap-2 py-2 md:py-3 transition-all"
                      onClick={() => handlePesanWhatsApp(produk)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                      </svg>
                      Pesan via WhatsApp
                    </Button>
                  </div>
                </Card>
              </ScrollSlide>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
