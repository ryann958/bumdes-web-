'use client';

import Navbar from "@/components/Header";
import Button from "@/components/Button";
import Card from "@/components/UiCard";
import ScrollAnimation from "@/components/FadeIn"; // Note: this maps to FadeIn now
import FadeIn from "@/components/FadeIn";
import ScrollSlide from "@/components/ScrollAnimation"; // Since they had ScrollAnimation mapping to FadeIn, let's use the actual ScrollAnimation component we made
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        
        {/* 1. Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-10 md:py-16 gap-10">
          <ScrollSlide className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Selamat Datang di BUMDes <br/>
              <span className="text-blue-500">Ketapang Permai</span>
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl text-blue-600 font-semibold mb-6">
              Menggerakkan Ekonomi Desa, Mengoptimalkan Potensi Pesisir Kepulauan Meranti.
            </h2>
            <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              BUMDes Ketapang Permai hadir sebagai motor penggerak kemandirian ekonomi masyarakat Desa Ketapang Permai. Kami berfokus pada pemberdayaan potensi lokal, pengelolaan hasil laut, dan peningkatan kesejahteraan warga.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="/lapak" passHref className="w-full sm:w-auto">
                <Button className="w-full bg-blue-500 text-white shadow-none hover:bg-blue-600 hover:shadow-neumorphic-inset transition-all duration-300">
                  Lihat Produk & Layanan
                </Button>
              </Link>
              <Link href="/profil" passHref className="w-full sm:w-auto">
                <Button className="w-full transition-all duration-300">
                  Hubungi Pengurus
                </Button>
              </Link>
            </div>
          </ScrollSlide>
          <FadeIn delay={0.2} className="flex-1 w-full max-w-lg mt-8 md:mt-0">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-neumorphic group">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070" 
                alt="Aktivitas Nelayan Pesisir" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
          </FadeIn>
        </section>

        {/* 2. Profil Singkat Desa */}
        <section className="py-8 md:py-16 mt-4 md:mt-8">
          <ScrollSlide className="rounded-3xl shadow-neumorphic-inset bg-gray-50/50 p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-blue-500 hidden md:block" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
                Profil Singkat Desa
              </h2>
              <p className="text-foreground/80 mb-4 text-base md:text-lg leading-relaxed">
                Desa Ketapang Permai berlokasi di Kecamatan Pulau Merbau, Kabupaten Kepulauan Meranti, Provinsi Riau. Di bawah kepemimpinan Kepala Desa <strong>Bapak Safrizal</strong>, desa kami terus berkembang menjadi mandiri.
              </p>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                Kondisi geografis pesisir dan lahan gambut membentuk karakter masyarakat yang tangguh. Kekayaan alam inilah yang menjadi fondasi utama ekonomi.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-neumorphic">
               <img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800" alt="Lanskap Desa" className="w-full h-full object-cover" />
            </div>
          </ScrollSlide>
        </section>

        {/* 3. Potensi Ekonomi & Fokus Usaha BUMDes */}
        <section className="py-8 md:py-16 mt-12 md:mt-20">
          <ScrollSlide className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Potensi Ekonomi & Fokus Usaha</h2>
            <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto px-2">
              Mengingat mayoritas penduduk berprofesi sebagai nelayan, BUMDes difokuskan pada optimalisasi kemaritiman:
            </p>
          </ScrollSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ScrollSlide delay={0.1}>
              <Card className="h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 md:h-48 mb-6 rounded-xl overflow-hidden shadow-neumorphic-inset relative">
                  <img src="https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=800" alt="Tambak Udang" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-xl shadow-lg text-xl md:text-2xl">🦐</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-600 text-center md:text-left">Budidaya Tambak Udang</h3>
                <p className="text-foreground/70 leading-relaxed flex-1 text-sm md:text-base text-center md:text-left">
                  Kami mengoptimalkan pesisir dengan tambak udang, komoditas bernilai tinggi untuk menyerap tenaga kerja lokal.
                </p>
              </Card>
            </ScrollSlide>
            
            <ScrollSlide delay={0.2}>
              <Card className="h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 md:h-48 mb-6 rounded-xl overflow-hidden shadow-neumorphic-inset relative">
                  <img src="https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?q=80&w=800" alt="Pengolahan Ikan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-xl shadow-lg text-xl md:text-2xl">🐟</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-600 text-center md:text-left">Pengolahan Hasil Laut</h3>
                <p className="text-foreground/70 leading-relaxed flex-1 text-sm md:text-base text-center md:text-left">
                  Meningkatkan nilai jual hasil tangkapan menjadi produk turunan seperti terasi khas pesisir Meranti.
                </p>
              </Card>
            </ScrollSlide>

            <ScrollSlide delay={0.3}>
              <Card className="h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 md:h-48 mb-6 rounded-xl overflow-hidden shadow-neumorphic-inset relative">
                  <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800" alt="Kemitraan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-xl shadow-lg text-xl md:text-2xl">🤝</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-600 text-center md:text-left">Kemitraan & Perdagangan</h3>
                <p className="text-foreground/70 leading-relaxed flex-1 text-sm md:text-base text-center md:text-left">
                  BUMDes memfasilitasi kebutuhan operasional nelayan dan mendukung KUBE serta Karang Taruna di desa.
                </p>
              </Card>
            </ScrollSlide>
          </div>
        </section>

        {/* 4. Potensi Inovasi Sosial & Kesehatan */}
        <section className="py-8 md:py-16">
          <FadeIn className="bg-blue-600 rounded-3xl p-6 md:p-12 text-white shadow-neumorphic relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Potensi Inovasi Sosial & Kesehatan</h2>
              <p className="text-white/90 text-base md:text-lg mb-8 md:mb-10 max-w-3xl mx-auto md:mx-0">
                Kekuatan utama Ketapang Permai tidak hanya pada alamnya, tetapi juga pada ikatan persaudaraan warga.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <ScrollSlide delay={0.1} className="bg-white/10 border border-white/20 p-5 md:p-6 rounded-2xl backdrop-blur-sm text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl md:text-2xl shadow-lg">🏥</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Desa Siaga "Permai Bhakti"</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Sistem kesehatan dan gotong royong mandiri memastikan setiap warga memiliki akses cepat terhadap bantuan medis.
                  </p>
                </ScrollSlide>
                
                <ScrollSlide delay={0.2} className="bg-white/10 border border-white/20 p-5 md:p-6 rounded-2xl backdrop-blur-sm text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl md:text-2xl shadow-lg">🤝</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Kelompok Usaha Bersama (KUBE)</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Masyarakat pesisir pesat membentuk kelompok nelayan untuk memudahkan penyaluran bantuan dan pelatihan.
                  </p>
                </ScrollSlide>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 5. Potensi Lingkungan Ekologis */}
        <section className="py-8 md:py-16">
          <ScrollSlide className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Lingkungan Ekologis & Pesisir</h2>
            <div className="w-16 md:w-20 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto px-2">
              Berada di wilayah gambut memberikan tantangan sekaligus potensi pelestarian lingkungan.
            </p>
          </ScrollSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn delay={0.1}>
              <Card className="h-full flex flex-col md:flex-row items-center gap-6 shadow-neumorphic text-center md:text-left">
                <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-square rounded-xl overflow-hidden relative shadow-neumorphic-inset">
                  <img src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=800" alt="Hutan Gambut" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-green-600">Sinergi Mitigasi Lingkungan</h3>
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                    Sinergi kuat warga dalam patroli pencegahan Karhutla memastikan lingkungan aman untuk investasi jangka panjang.
                  </p>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full flex flex-col md:flex-row items-center gap-6 shadow-neumorphic text-center md:text-left">
                <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-square rounded-xl overflow-hidden relative shadow-neumorphic-inset">
                  <img src="https://images.unsplash.com/photo-1624613247065-1d4dbdfebbc1?q=80&w=800" alt="Ekowisata Mangrove" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-green-600">Peluang Ekowisata</h3>
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                    Garis pantai pesisir desa memiliki potensi untuk dikembangkan menjadi kawasan ekowisata mangrove yang asri.
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* 6. Potensi Kultural & SDM */}
        <section className="py-8 md:py-16 mb-6 md:mb-10">
          <FadeIn className="rounded-3xl shadow-neumorphic-inset bg-gray-50/50 p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-orange-500 hidden md:block" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217h1.351l-.004-.22c-.035-.747.382-1.094 1.054-1.554.582-.416 1.144-.887 1.144-1.897 0-1.428-1.25-2.28-2.73-2.28-1.621 0-2.67 1.05-2.67 2.593zm1.18 5.767a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z"/></svg>
                  Potensi Kultural & SDM
                </h2>
                <p className="text-foreground/80 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                  Desa Ketapang Permai merupakan desa agamis yang peduli pada pendidikan generasi muda.
                </p>
                
                <div className="space-y-6">
                  <ScrollSlide delay={0.1} className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xl shrink-0 shadow-sm">📖</div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">SDM Berbasis Keagamaan</h4>
                      <p className="text-foreground/70 text-sm md:text-base">Masyarakat aktif dalam kegiatan LPTQ yang menjadi perwakilan unggulan di tingkat kecamatan.</p>
                    </div>
                  </ScrollSlide>
                  
                  <ScrollSlide delay={0.2} className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0 shadow-sm">🏫</div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">Fasilitas Pendidikan Fundamental</h4>
                      <p className="text-foreground/70 text-sm md:text-base">Keberadaan SD Negeri 3 Ketapang Permai dan Kelompok Bermain menjadi fondasi kuat generasi cerdas.</p>
                    </div>
                  </ScrollSlide>
                </div>
              </div>
              
              <div className="w-full md:w-5/12 aspect-[4/3] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-neumorphic group mt-6 md:mt-0">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800" alt="Pendidikan Desa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </FadeIn>
        </section>

      </main>
    </div>
  );
}
