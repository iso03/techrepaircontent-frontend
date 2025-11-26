// components/Hero.js
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    // Section principale avec un fond clair
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Conteneur Flex pour les deux colonnes */}
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Colonne de Gauche (Texte) - 50% */}
          <div className="md:w-1/2 text-center md:text-left">
            <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full">
              Rédaction web spécialisée
            </span>
            
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Contenu web expert en réparation électronique.
            </h1>
            
            <p className="mt-6 text-lg text-gray-600">
              Nous créons du contenu technique de qualité pour votre site web : guides de réparation, articles spécialisés, descriptions produits et contenus SEO optimisés pour le secteur électronique.
            </p>
            
            {/* Boutons d'action */}
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#contact" // On pointera vers le formulaire de contact
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Demander un accompagnement
              </Link>
              <Link
                href="#service" // On pointe vers le blog
                className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
          
          {/* Colonne de Droite (Image) - 50% */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
            
            {/* Image principale */}
            <div className="relative w-[400px] h-[500px] bg-blue-100 rounded-3xl flex items-end justify-center overflow-hidden shadow-xl">
              <Image
                src="/images/hero-person.png" // ASSUREZ-VOUS QUE LE CHEMIN EST CORRECT
                alt="Expert TechRepair Content"
                width={400}
                height={500}
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              />
            </div>

            {/* Carte flottante "OBJECTIFS" */}
            <div className="absolute bottom-16 -left-10 bg-white p-4 rounded-lg shadow-lg flex items-center w-48">
              <Image
                src="/images/icon-objectifs.png" 
                alt="Icône Objectifs"
                width={40}
                height={40}
                className="bg-blue-100 p-2 rounded-lg"
              />
              <div className="ml-3">
                <span className="text-xs text-gray-500">Atteindre vos</span>
                <span className="block text-sm font-bold text-gray-900">OBJECTIFS</span>
              </div>
            </div>

            {/* Carte flottante "BUSINESS" */}
            <div className="absolute top-16 -right-10 bg-white p-4 rounded-lg shadow-lg flex items-center w-56">
              <Image
                src="/images/icon-business.png" 
                alt="Icône Business"
                width={40}
                height={40}
                className="bg-orange-100 p-2 rounded-lg"
              />
              <div className="ml-3">
                <span className="text-xs text-gray-500">Développement de votre</span>
                <span className="block text-sm font-bold text-gray-900">BUSINESS</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}