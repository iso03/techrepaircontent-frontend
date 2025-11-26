// components/Stats.js
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// --- 1. Petit composant pour l'animation des chiffres ---
function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Math.floor pour avoir des nombres entiers
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

// --- 2. Données mises à jour (on sépare le chiffre du symbole) ---
const statsData = [
  {
    icon: (
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.084-1.28-.24-1.857M17 20H7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 110-8 4 4 0 010 8zM17 16a4 4 0 110-8 4 4 0 010 8z" />
      </svg>
    ),
    number: 5,    // Le chiffre à animer
    suffix: '+',  // Le symbole qui ne bouge pas
    label: 'Clients accompagnés',
  },
  {
    icon: (
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: 32,
    suffix: '+',
    label: 'Projets réalisés',
  },
  {
    icon: (
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2a8.001 8.001 0 0015.357 2m0 0H15" />
      </svg>
    ),
    number: 95,
    suffix: '%',
    label: 'Taux de satisfaction',
  },
];

export default function Stats() {
  return (
    <section className="bg-gray-50">
      {/* Partie 1: Grille de Statistiques */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              // --- CHANGEMENT ICI : 'shadow-sm' au lieu de 'shadow-lg' ---
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <p className="text-5xl font-extrabold text-gray-900">
                {/* Utilisation du composant animé */}
                <AnimatedCounter end={stat.number} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partie 2: Bannière CTA */}
      <div className="bg-blue-600">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-4xl font-extrabold">
                Prêt à propulser votre visibilité ?
              </h2>
              <p className="text-lg text-blue-100 mt-4">
                Appelez-nous pour plus d'informations : 
                <strong className="block text-2xl mt-1">+33 07 58 38 36 35</strong>
              </p>
            </div>
            
            <div>
              <Link
                href="#contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg transition-colors"
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