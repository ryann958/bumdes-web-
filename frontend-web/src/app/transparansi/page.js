'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Header";
import Card from "@/components/UiCard";
import ScrollSlide from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { API_BASE_URL } from "@/config/api";
import { formatRupiah } from "@/utils/format";

const dataPendapatan = [
  { bulan: 'Jan', lapak: 4000000, wisata: 2400000, jasa: 2400000 },
  { bulan: 'Feb', lapak: 3000000, wisata: 1398000, jasa: 2210000 },
  { bulan: 'Mar', lapak: 2000000, wisata: 9800000, jasa: 2290000 },
  { bulan: 'Apr', lapak: 2780000, wisata: 3908000, jasa: 2000000 },
  { bulan: 'Mei', lapak: 1890000, wisata: 4800000, jasa: 2181000 },
  { bulan: 'Jun', lapak: 2390000, wisata: 3800000, jasa: 2500000 },
  { bulan: 'Jul', lapak: 3490000, wisata: 4300000, jasa: 2100000 },
];

export default function Transparansi() {
  const [dataLabaRugi, setDataLabaRugi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/keuangan`)
      .then(res => res.json())
      .then(data => {
        const mappedData = data.map(item => ({
          tahun: `${item.tahun} - B${item.bulan}`,
          pendapatan: parseFloat(item.total_pendapatan),
          pengeluaran: parseFloat(item.total_pengeluaran)
        }));
        setDataLabaRugi(mappedData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching keuangan:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <FadeIn className="text-center mb-10 md:mb-12 mt-4 md:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 md:mb-6">Transparansi Keuangan</h1>
          <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto px-2">
            Laporan terbuka pengelolaan dana dan pendapatan asli Badan Usaha Milik Desa Ketapang Permai, Kab. Kepulauan Meranti, Riau.
          </p>
        </FadeIn>

        {/* Ringkasan Keuangan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          <ScrollSlide delay={0.1}>
            <Card className="text-center group hover:bg-blue-50 transition-colors h-full flex flex-col justify-center">
              <h3 className="text-sm md:text-lg font-bold text-foreground/70 mb-2">Total Aset (2024)</h3>
              <p className="text-2xl md:text-3xl font-extrabold text-blue-600">Rp 125.400.000</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs md:text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/></svg>
                +12% dari tahun lalu
              </div>
            </Card>
          </ScrollSlide>
          <ScrollSlide delay={0.2}>
            <Card className="text-center group hover:bg-blue-50 transition-colors h-full flex flex-col justify-center">
              <h3 className="text-sm md:text-lg font-bold text-foreground/70 mb-2">Pendapatan Lapak & Wisata</h3>
              <p className="text-2xl md:text-3xl font-extrabold text-blue-600">Rp 48.200.000</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs md:text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/></svg>
                +5% kuartal ini
              </div>
            </Card>
          </ScrollSlide>
          <ScrollSlide delay={0.3} className="sm:col-span-2 lg:col-span-1">
            <Card className="text-center group hover:bg-red-50 transition-colors h-full flex flex-col justify-center">
              <h3 className="text-sm md:text-lg font-bold text-foreground/70 mb-2">Pengeluaran Operasional</h3>
              <p className="text-2xl md:text-3xl font-extrabold text-red-500">Rp 21.500.000</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs md:text-sm text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full mx-auto">
                Stabil
              </div>
            </Card>
          </ScrollSlide>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-10 md:mb-12">
          
          {/* Bar Chart - Perbandingan Laba Rugi */}
          <ScrollSlide className="col-span-1 lg:col-span-2">
            <Card className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground text-center md:text-left">Grafik Pendapatan vs Pengeluaran (Real-time)</h2>
              <div className="h-[300px] md:h-[400px] w-full">
                {loading ? (
                  <div className="flex items-center justify-center h-full text-blue-500 font-bold animate-pulse text-sm md:text-base">Memuat laporan dari server...</div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={dataLabaRugi}
                      margin={{ top: 20, right: 10, left: -20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="tahun" tick={{fontSize: 12}} />
                      <YAxis tickFormatter={(value) => `${value / 1000000}Jt`} tick={{fontSize: 12}} />
                      <Tooltip formatter={(value) => formatRupiah(value)} cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '5px 5px 15px #c1c5c8, -5px -5px 15px #ffffff', fontSize: '12px'}} />
                      <Legend wrapperStyle={{fontSize: '12px'}} />
                      <Bar dataKey="pendapatan" name="Pendapatan (Kotor)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="pengeluaran" name="Pengeluaran" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </Card>
          </ScrollSlide>

          {/* Line Chart - Sumber Pendapatan Bulanan */}
          <ScrollSlide className="col-span-1 lg:col-span-2">
            <Card className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground text-center md:text-left">Rincian Sumber Pendapatan Bulanan (2024)</h2>
              <div className="h-[300px] md:h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={dataPendapatan}
                    margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="bulan" tick={{fontSize: 12}} />
                    <YAxis tickFormatter={(value) => `${value / 1000000}Jt`} tick={{fontSize: 12}} />
                    <Tooltip formatter={(value) => formatRupiah(value)} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '5px 5px 15px #c1c5c8, -5px -5px 15px #ffffff', fontSize: '12px'}} />
                    <Legend wrapperStyle={{fontSize: '12px'}} />
                    <Line type="monotone" dataKey="lapak" name="Lapak BUMDes" stroke="#3b82f6" strokeWidth={3} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="wisata" name="Wisata Desa" stroke="#10b981" strokeWidth={3} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="jasa" name="Jasa" stroke="#f59e0b" strokeWidth={3} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </ScrollSlide>
        </div>

        {/* Info Tambahan */}
        <FadeIn delay={0.2}>
          <Card className="bg-blue-50/50 p-6 md:p-8 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2">Komitmen Keterbukaan</h3>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Seluruh data yang ditampilkan di atas merupakan rekapan dari pembukuan resmi BUMDes Ketapang Permai. Laporan fisik terperinci dapat dilihat oleh seluruh warga di papan pengumuman Balai Desa setiap bulan minggu pertama.
            </p>
          </Card>
        </FadeIn>
      </main>
    </div>
  );
}
