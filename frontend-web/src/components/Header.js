'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav suppressHydrationWarning className="w-full px-4 py-3 md:px-6 md:py-4 mb-6 md:mb-10 sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-5 py-4 md:px-6 md:py-4 rounded-2xl shadow-neumorphic bg-background relative">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-xl md:text-2xl font-extrabold tracking-wider text-foreground line-clamp-1">
            BUMDes <span className="text-blue-500">Ketapang Permai</span>
          </div>
          <button 
            className="md:hidden p-2 rounded-xl text-gray-500 hover:text-blue-500 hover:bg-gray-100 transition-colors focus:outline-none shadow-neumorphic-inset"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul 
          className={`
            ${isOpen ? 'flex' : 'hidden'} 
            md:flex 
            flex-col md:flex-row 
            absolute md:static 
            top-full left-0 right-0 
            mt-4 md:mt-0 
            p-5 md:p-0 
            bg-background md:bg-transparent
            rounded-2xl md:rounded-none
            shadow-neumorphic md:shadow-none
            gap-3 md:gap-4 lg:gap-6 
            text-foreground font-semibold 
            z-50 text-center md:text-left
          `}
        >
          <li><Link href="/" className="block py-2 px-4 rounded-xl hover:bg-blue-50 hover:text-blue-500 transition-all" onClick={() => setIsOpen(false)}>Beranda</Link></li>
          <li><Link href="/profil" className="block py-2 px-4 rounded-xl hover:bg-blue-50 hover:text-blue-500 transition-all" onClick={() => setIsOpen(false)}>Profil</Link></li>
          <li><Link href="/lapak" className="block py-2 px-4 rounded-xl hover:bg-blue-50 hover:text-blue-500 transition-all" onClick={() => setIsOpen(false)}>Lapak</Link></li>
          <li><Link href="/wisata" className="block py-2 px-4 rounded-xl hover:bg-blue-50 hover:text-blue-500 transition-all" onClick={() => setIsOpen(false)}>Wisata</Link></li>
          <li><Link href="/transparansi" className="block py-2 px-4 rounded-xl hover:bg-blue-50 hover:text-blue-500 transition-all" onClick={() => setIsOpen(false)}>Transparansi</Link></li>
        </ul>
      </div>
    </nav>
  );
}
