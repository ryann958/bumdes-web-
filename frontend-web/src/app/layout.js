import "./globals.css";

export const metadata = {
  title: "BUMDes Ketapang Permai",
  description: "Menggerakkan Ekonomi Desa, Mengoptimalkan Potensi Pesisir Kepulauan Meranti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
