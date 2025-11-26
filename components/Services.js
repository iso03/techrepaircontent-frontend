// components/Services.js
'use client';

import Image from 'next/image';

// Les données pour nos 3 cartes de service
const servicesData = [
  {
    icon: '/images/icon-marketing.png',
    title: 'Stratégie marketing',
    description: 'Stratégies complètes pour développer votre présence en ligne et générer des leads qualifiés.',
    features: [
      'Conception de plans éditoriaux',
      'Campagnes de Contenu Promotionnel', // J'ai simplifié le texte de la maquette
    ],
  },
  {
    icon: '/images/icon-redaction.png',
    title: 'Rédaction de Contenu Technique',
    description: 'Des textes précis, clairs et optimisés pour les professionnels de la réparation.',
    features: [
      'Articles de blog spécialisés',
      'Fiches produits',
    ],
  },
  {
    icon: '/images/icon-seo.png',
    title: 'Optimisation SEO',
    description: 'Propulsez votre visibilité sur Google avec nos techniques SEO avancées et éprouvées.',
    features: [
      'Audit SEO complet',
      'Optimisation technique',
      'Link building stratégique',
    ],
  },
];

export default function Services() {
  return (
    <section id="service" className="bg-gray-50 py-20 md:py-32"> {/* Fond légèrement gris */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de la section */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
            Nos domaines d'Expertise
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Des solutions complètes pour votre croissance
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Nos experts vous accompagnent à chaque étape de votre transformation digitale avec des stratégies sur mesure et des résultats mesurables.
          </p>
        </div>

        {/* Grille des 3 services */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <div 
              key={service.title} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              {/* Icône */}
              <Image
                src={service.icon} // ASSUREZ-VOUS QUE LE CHEMIN EST CORRECT
                alt={`Icône ${service.title}`}
                width={64}
                height={64}
                className="bg-blue-100 p-3 rounded-xl" // Style de la maquette
              />
              
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
              
              {/* Liste des caractéristiques */}
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="flex-shrink-0 w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}