// components/Footer.js
'use client';

import Link from 'next/link';


export default function Footer() {
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Colonne 1: Logo et description */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-white">TRD</span>
              <span className="ml-2 text-xs font-semibold text-gray-400 uppercase">
                TechRepair<br />Content
              </span>
            </Link>
            <p className="mt-4 text-sm">
              Solutions professionnelles pour accompagner votre transformation digitale et votre croissance.
            </p>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm">contact@techrepair-contact.fr</li>
              <li className="text-sm">+33 1 23 45 67 89</li>
              <li className="text-sm">123 Avenue des Champs-Élysées, 75008 Paris</li>
            </ul>
          </div>

          {/* Colonne 4: Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase">Suivez-nous</h3>
            <div className="flex mt-4 space-x-4">
              {/* Ces liens sont des placeholders, remplacez '#' par vos URL */}
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.9V14.89H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.89H13.56V21.9C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03-.78-.83-1.9-1.35-3.13-1.35-2.38 0-4.3 1.92-4.3 4.3 0 .34.04.67.11.98-3.57-.18-6.73-1.89-8.85-4.48C2.5 5.31 2.36 5.88 2.36 6.5c0 1.49.76 2.81 1.92 3.58-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.7 2.13 2.94 4 2.97-1.47 1.15-3.33 1.83-5.33 1.83-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.56 1.93 7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.5 18H6V9h2.5v9zM7.25 7.76c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 18h-2.5v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.36V18H9.5V9H12v1.36h.04c.42-.79 1.44-1.64 3.01-1.64 3.22 0 3.81 2.12 3.81 4.87V18z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm2.707 14.293a1 1 0 01-1.414 0L12 14.707l-1.293 1.293a1 1 0 01-1.414-1.414L10.586 12 9.293 10.707a1 1 0 111.414-1.414L12 10.586l1.293-1.293a1 1 0 111.414 1.414L13.414 12l1.293 1.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sous-Footer (Droits d'auteur et lien Admin) */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 TechRepair Content. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
            {/* Lien vers l'admin (CdC 2.1) */}
            <a 
              href="https://api.techrepaircontent.com/login" // Lien direct vers le back-office
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}