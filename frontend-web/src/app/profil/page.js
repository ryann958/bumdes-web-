'use client';

import Navbar from "@/components/Header";
import Card from "@/components/UiCard";
import ScrollSlide from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function Profil() {
  const visiMisi = {
    visi: "Menjadikan Desa Ketapang Permai sebagai Desa Mandiri yang Sejahtera, Berdaya Saing, dan Peduli Lingkungan melalui Pengelolaan Potensi Lokal yang Berkelanjutan.",
    misi: [
      "Mengoptimalkan potensi kemaritiman dan perikanan sebagai sumber utama pendapatan asli desa.",
      "Meningkatkan kualitas sumber daya manusia (SDM) melalui pendidikan dan pembinaan keagamaan.",
      "Membangun dan mengembangkan ekowisata berbasis lingkungan (Hutan Mangrove).",
      "Meningkatkan kepedulian sosial, kesehatan, dan gotong royong warga melalui program Desa Siaga.",
      "Membuka jaringan kemitraan dan mendukung penuh UMKM lokal serta Kelompok Usaha Bersama (KUBE)."
    ]
  };

  const strukturOrganisasi = [
    { nama: "Safrizal", jabatan: "Penasihat / Kepala Desa", foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256" },
    { nama: "Budi Santoso", jabatan: "Direktur BUMDes", foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256" },
    { nama: "Siti Aminah", jabatan: "Sekretaris", foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256" },
    { nama: "Ahmad Yani", jabatan: "Bendahara", foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256" },
    { nama: "Rahmat Hidayat", jabatan: "Manajer Unit Usaha Nelayan", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <FadeIn className="text-center mb-10 md:mb-16 mt-4 md:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 md:mb-6">Profil BUMDes</h1>
          <p className="text-base md:text-xl text-foreground/80 max-w-3xl mx-auto px-2">
            Mengenal lebih dekat visi, misi, dan pilar penggerak kemandirian ekonomi Desa Ketapang Permai.
          </p>
        </FadeIn>

        {/* Sejarah / Intro Singkat */}
        <ScrollSlide className="mb-10 md:mb-16">
          <Card className="p-6 md:p-12 shadow-neumorphic-inset">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-blue-500 hidden md:block" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
              Tentang BUMDes
            </h2>
            <div className="prose prose-sm md:prose-lg max-w-none text-foreground/80 leading-relaxed">
              <p className="mb-4">
                Badan Usaha Milik Desa (BUMDes) Ketapang Permai didirikan sebagai wadah utama penggerak ekonomi kerakyatan di desa. Mengingat sebagian besar wilayah kami terdiri dari kawasan pesisir dan lahan gambut, BUMDes hadir untuk memastikan pemanfaatan sumber daya alam tersebut dilakukan secara berkelanjutan dan membawa manfaat ekonomi langsung bagi masyarakat lokal.
              </p>
              <p>
                Dengan fokus awal pada pemberdayaan kelompok nelayan (KUBE), budidaya hasil laut, serta pengembangan potensi wisata, kami berharap BUMDes tidak hanya meningkatkan Pendapatan Asli Desa (PADes), tetapi juga menciptakan ekosistem sosial yang lebih kuat melalui program pemberdayaan sumber daya manusia.
              </p>
            </div>
          </Card>
        </ScrollSlide>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-16">
          <ScrollSlide delay={0.1} className="h-full">
            <Card className="h-full p-6 md:p-10 shadow-neumorphic bg-blue-600 text-white">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Visi</h2>
              <p className="text-lg md:text-2xl font-medium leading-relaxed text-white/90">
                "{visiMisi.visi}"
              </p>
            </Card>
          </ScrollSlide>
          
          <ScrollSlide delay={0.2} className="h-full">
            <Card className="h-full p-6 md:p-10 shadow-neumorphic">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/></svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground">Misi</h2>
              <ul className="space-y-4">
                {visiMisi.misi.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground/80 text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollSlide>
        </div>

        {/* Struktur Organisasi */}
        <section className="mb-10 md:mb-16">
          <ScrollSlide className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Struktur Organisasi</h2>
            <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto px-2">
              Pilar penggerak utama yang berdedikasi membangun BUMDes Ketapang Permai.
            </p>
          </ScrollSlide>
          
          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Kades / Penasihat */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-neumorphic border-4 border-background mb-4">
                  <img src={strukturOrganisasi[0].foto} alt={strukturOrganisasi[0].nama} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground text-center">{strukturOrganisasi[0].nama}</h3>
                <p className="text-blue-600 font-medium text-sm md:text-base text-center">{strukturOrganisasi[0].jabatan}</p>
              </div>
            </FadeIn>
            
            {/* Garis Vertikal */}
            <div className="w-1 h-8 md:h-12 bg-gray-200"></div>
            
            {/* Direktur */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-neumorphic border-4 border-background mb-4">
                  <img src={strukturOrganisasi[1].foto} alt={strukturOrganisasi[1].nama} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground text-center">{strukturOrganisasi[1].nama}</h3>
                <p className="text-blue-600 font-medium text-sm md:text-base text-center">{strukturOrganisasi[1].jabatan}</p>
              </div>
            </FadeIn>
            
            {/* Garis Vertikal dan Horizontal */}
            <div className="flex flex-col items-center w-full">
              <div className="w-1 h-8 md:h-12 bg-gray-200"></div>
              <div className="w-full max-w-[20rem] md:max-w-2xl h-1 bg-gray-200"></div>
            </div>
            
            {/* Jajaran Bawah */}
            <div className="flex flex-wrap justify-center w-full gap-6 md:gap-16 pt-6 md:pt-8">
              {strukturOrganisasi.slice(2).map((person, index) => (
                <FadeIn key={index} delay={0.3 + (index * 0.1)} className="flex flex-col items-center w-36 md:w-48 relative">
                  <div className="absolute -top-6 md:-top-8 left-1/2 w-1 h-6 md:h-8 bg-gray-200 -translate-x-1/2"></div>
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-neumorphic border-4 border-background mb-4">
                    <img src={person.foto} alt={person.nama} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground text-center">{person.nama}</h3>
                  <p className="text-blue-600 font-medium text-xs md:text-sm text-center px-2">{person.jabatan}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
