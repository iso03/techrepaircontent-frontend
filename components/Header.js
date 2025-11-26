// components/Header.js
'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  
  // État pour le hash (ancre)
  const [currentHash, setCurrentHash] = useState('');
  
  // NOUVEAU : État pour ouvrir/fermer le menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentHash(window.location.hash);
    // On ferme le menu mobile si la fenêtre est redimensionnée en grand écran
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]);

  const handleLinkClick = (hash) => {
    setCurrentHash(hash);
    setIsMenuOpen(false); // On ferme le menu mobile quand on clique sur un lien
  };

  // Styles
  const activeStyle = "bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors";
  const inactiveStyle = "text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors";
  
  // Styles spécifiques pour le menu mobile (block = prend toute la largeur)
  const mobileActiveStyle = "block bg-blue-50 text-blue-600 px-3 py-2 rounded-md text-base font-medium border-l-4 border-blue-600";
  const mobileInactiveStyle = "block text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- 1. LOGO CORRIGÉ --- */}
          <Link 
            href="/" 
            className="flex-shrink-0 flex items-center"
            onClick={() => handleLinkClick('')}
          >
            {/* h-10 (40px) force la hauteur, w-auto garde les proportions */}
            <img 
                src="/images/logo-blue.png" 
                alt="Logo TRD" 
                className="h-10 w-auto object-contain" 
            />
          </Link>

          {/* --- NAVIGATION DESKTOP (Cachée sur mobile) --- */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="/" 
              onClick={() => handleLinkClick('')}
              className={pathname === '/' && currentHash !== '#contact' ? activeStyle : inactiveStyle}
            >
              Accueil
            </Link>
            
            <Link 
              href="/blog" 
              onClick={() => handleLinkClick('')}
              className={pathname.startsWith('/blog') ? activeStyle : inactiveStyle}
            >
              Blog
            </Link>
            
            <Link 
              href="/#contact" 
              onClick={() => handleLinkClick('#contact')}
              className={currentHash === '#contact' ? activeStyle : inactiveStyle}
            >
              Contact
            </Link>
          </div>
          
          {/* --- BOUTON MENU MOBILE --- */}
          <div className="md:hidden">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Active/Désactive le menu
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {/* Icône change si ouvert ou fermé */}
              {isMenuOpen ? (
                  // Icône X (Fermer)
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                  // Icône Hamburger (Ouvrir)
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* --- 2. MENU MOBILE DÉROULANT (S'affiche si isMenuOpen est true) --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              onClick={() => handleLinkClick('')}
              className={pathname === '/' && currentHash !== '#contact' ? mobileActiveStyle : mobileInactiveStyle}
            >
              Accueil
            </Link>

            <Link 
              href="/blog" 
              onClick={() => handleLinkClick('')}
              className={pathname.startsWith('/blog') ? mobileActiveStyle : mobileInactiveStyle}
            >
              Blog
            </Link>

            <Link 
              href="/#contact" 
              onClick={() => handleLinkClick('#contact')}
              className={currentHash === '#contact' ? mobileActiveStyle : mobileInactiveStyle}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}