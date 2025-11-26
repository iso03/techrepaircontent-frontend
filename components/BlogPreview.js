// components/BlogPreview.js
'use client';

import Link from 'next/link';
import Image from 'next/image';

const API_STORAGE_URL = 'http://localhost:8000/storage';

// 1. Carte "À la une" (Grande, image au-dessus)
function FeaturedCard({ article }) {
  return (
    <Link 
      href={`/blog/${article.slug}`} 
      className="block group h-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
    >
      {/* Image (Grande) */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image
          src={`${API_STORAGE_URL}/${article.cover_image}`}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized={true}
        />
      </div>
      
      {/* Contenu */}
      <div className="p-8">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <span className="font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            {article.categories[0]?.name || 'Général'}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {new Date(article.published_at || article.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {article.reading_time || 5} min
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        {/* Résumé (affiché uniquement sur la grande carte) */}
        {article.summary && (
          <p className="text-gray-600 line-clamp-3">
            {article.summary}
          </p>
        )}
      </div>
    </Link>
  );
}

// 2. Carte "Secondaire" (Petite, image à gauche)
function SideCard({ article }) {
  return (
    <Link 
      href={`/blog/${article.slug}`} 
      className="flex group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 h-full"
    >
      {/* Image (Petite, à gauche) - Largeur fixe */}
      <div className="relative w-1/3 min-w-[140px] overflow-hidden">
        <Image
          src={`${API_STORAGE_URL}/${article.cover_image}`}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized={true}
        />
      </div>
      
      {/* Contenu (à droite) */}
      <div className="p-5 flex flex-col justify-center w-2/3">
        <div className="flex items-center text-xs text-gray-500 mb-2 space-x-2">
          <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
            {article.categories[0]?.name || 'Blog'}
          </span>
        </div>
        
        <div className="flex items-center text-xs text-gray-400 mb-2 space-x-2">
           <span>{new Date(article.published_at || article.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
           <span>•</span>
           <span>{article.reading_time || 5} min</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}


export default function BlogPreview({ articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1, 3); // Prend le 2ème et le 3ème article

  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Notre blog
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Tendances et Perspectives du Secteur
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-block bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors mt-6 md:mt-0"
          >
            Voir tous les articles →
          </Link>
        </div>

        {/* MISE EN PAGE ASYMÉTRIQUE (Maquette) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Colonne Gauche (Grand Article) - Prend 3/5 de la largeur */}
          <div className="lg:col-span-3 h-full">
            {featuredArticle && <FeaturedCard article={featuredArticle} />}
          </div>

          {/* Colonne Droite (Liste Verticale) - Prend 2/5 de la largeur */}
          <div className="lg:col-span-2 flex flex-col gap-6 h-full">
            {sideArticles.map((article) => (
              <div key={article.id} className="flex-1"> {/* flex-1 force les cartes à prendre toute la hauteur dispo */}
                <SideCard article={article} />
              </div>
            ))}
          </div>

        </div>
        
        {/* Bouton mobile */}
        <div className="mt-8 text-center md:hidden">
           <Link href="/blog" className="inline-block bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
            Voir tous les articles →
          </Link>
        </div>

      </div>
    </section>
  );
}