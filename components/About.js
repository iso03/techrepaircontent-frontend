// components/About.js
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Conteneur Flex pour les deux colonnes */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Colonne de Gauche (Image) - 45% */}
          <div className="md:w-[45%] relative">
            <Image
              src="/images/about-team.jpg" // ASSUREZ-VOUS QUE LE CHEMIN EST CORRECT
              alt="L'équipe TechRepair Content"
              width={500}
              height={550}
              className="rounded-2xl shadow-xl object-cover"
            />
            {/* Tag "Notre Équipe" 
            <div className="absolute -bottom-8 -right-10 bg-white p-4 rounded-lg shadow-lg">
              <span className="block text-sm font-bold text-gray-900">Notre Équipe</span>
              <span className="text-xs text-gray-500">Innover Ensemble</span>
            </div> */}
          </div>
          
          {/* Colonne de Droite (Texte) - 55% */}
          <div className="md:w-[55%]">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
              À propos de nous
            </span>
            
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
              L'un des moyens les plus rapides pour booster votre croissance
            </h2>
            
            <p className="mt-6 text-lg text-gray-600">
              Nous transformons les défis digitaux en opportunités de croissance mesurables. Notre expertise en SEO et marketing digital a permis à des dizaines d'entreprises d'atteindre leurs objectifs et de dépasser leurs attentes.
            </p>
            
            {/* Liste des points forts */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-6 h-6 text-blue-600 bg-blue-100 rounded-full p-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-lg text-gray-700">Résultats mesurables et ROI prouvé</span>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-6 h-6 text-blue-600 bg-blue-100 rounded-full p-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-lg text-gray-700">Accompagnement personnalisé et dédié</span>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-6 h-6 text-blue-600 bg-blue-100 rounded-full p-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-lg text-gray-700">Expertise SEO reconnue dans le secteur</span>
              </li>
            </ul>

            {/* Bouton d'action */}
            <div className="mt-10">
              <Link
                href="#contact" // On pointera vers le formulaire de contact
                className="inline-block bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Contactez-Nous
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}